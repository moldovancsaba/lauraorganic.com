"use client";

import type { ReactNode } from "react";
import { GdsProvider } from "@doneisbetter/gds/client";
import { ReservationProvider } from "@/components/reservation/reservation-provider";
import { lauraTheme } from "@/theme/gds-theme";

type ProvidersProps = {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
};

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <GdsProvider locale={locale} messages={messages} theme={lauraTheme} defaultColorScheme="light">
      <ReservationProvider>{children}</ReservationProvider>
    </GdsProvider>
  );
}
