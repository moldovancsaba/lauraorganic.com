"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  activeWeeklyAvailability,
  buildReservationRows,
  calculateReservationSubtotal,
  defaultPickupSlotId,
  getAvailabilityItem,
  getPickupSlot,
  sanitizeReservationItems,
  type ProductId,
  type ReservationItemInput,
} from "@/lib/reservation";

type ReservationContextValue = {
  items: ReservationItemInput[];
  selectedPickupSlotId: string;
  reservationCount: number;
  subtotal: number;
  rows: ReturnType<typeof buildReservationRows>;
  addItem: (productId: ProductId) => void;
  decrementItem: (productId: ProductId) => void;
  removeItem: (productId: ProductId) => void;
  clearReservation: () => void;
  setPickupSlot: (slotId: string) => void;
};

const STORAGE_KEY = "lauraorganic.reservation.v1";

const ReservationContext = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ReservationItemInput[]>([]);
  const [selectedPickupSlotId, setSelectedPickupSlotId] = useState(defaultPickupSlotId);
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    let nextItems: ReservationItemInput[] | null = null;
    let nextPickupSlotId: string | null = null;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as {
          items?: ReservationItemInput[];
          selectedPickupSlotId?: string;
        };

        if (Array.isArray(parsed.items)) {
          nextItems = sanitizeReservationItems(parsed.items);
        }

        if (parsed.selectedPickupSlotId && getPickupSlot(parsed.selectedPickupSlotId)) {
          nextPickupSlotId = parsed.selectedPickupSlotId;
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    const timer = window.setTimeout(() => {
      if (nextItems) {
        setItems(nextItems);
      }

      if (nextPickupSlotId) {
        setSelectedPickupSlotId(nextPickupSlotId);
      }

      hasLoadedRef.current = true;

      if (!nextItems && !nextPickupSlotId) {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            items: [],
            selectedPickupSlotId: defaultPickupSlotId,
          }),
        );
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasLoadedRef.current) {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        items,
        selectedPickupSlotId,
      }),
    );
  }, [items, selectedPickupSlotId]);

  const value = useMemo<ReservationContextValue>(() => {
    const rows = buildReservationRows(items);
    const subtotal = calculateReservationSubtotal(items);
    const reservationCount = items.reduce((total, item) => total + item.quantity, 0);

    return {
      items,
      selectedPickupSlotId,
      reservationCount,
      subtotal,
      rows,
      addItem(productId) {
        const availability = getAvailabilityItem(productId);
        const maxPerOrder = availability?.maxPerOrder ?? 10;

        setItems((current) => {
          const existingItem = current.find((item) => item.productId === productId);

          if (!existingItem) {
            return [...current, { productId, quantity: 1 }];
          }

          return current.map((item) =>
            item.productId === productId
              ? { ...item, quantity: Math.min(item.quantity + 1, maxPerOrder) }
              : item,
          );
        });
      },
      decrementItem(productId) {
        setItems((current) =>
          current.flatMap((item) => {
            if (item.productId !== productId) {
              return [item];
            }

            if (item.quantity <= 1) {
              return [];
            }

            return [{ ...item, quantity: item.quantity - 1 }];
          }),
        );
      },
      removeItem(productId) {
        setItems((current) => current.filter((item) => item.productId !== productId));
      },
      clearReservation() {
        setItems([]);
      },
      setPickupSlot(slotId) {
        if (getPickupSlot(slotId)) {
          setSelectedPickupSlotId(slotId);
        }
      },
    };
  }, [items, selectedPickupSlotId]);

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
}

export function useReservation() {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }

  return context;
}

export function getReservationWeekLabel() {
  return {
    title: activeWeeklyAvailability.title,
    deadline: activeWeeklyAvailability.preorderDeadlineLabel,
    pickup: activeWeeklyAvailability.pickupWindowLabel,
  };
}
