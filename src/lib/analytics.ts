type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

export type LauraAnalyticsEvent =
  | "reservation_add_item"
  | "reservation_decrement_item"
  | "reservation_remove_item"
  | "reservation_pickup_slot_selected"
  | "reservation_validation_failed"
  | "reservation_submit_started"
  | "reservation_submit_succeeded"
  | "reservation_submit_failed";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackAnalyticsEvent(event: LauraAnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const detail = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer?.push(detail);
  window.dispatchEvent(new CustomEvent("lauraorganic:analytics", { detail }));

  if (process.env.NODE_ENV !== "production") {
    console.info("[lauraorganic:analytics]", detail);
  }
}
