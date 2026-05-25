"use client";

import type { ReactNode } from "react";
import { hu } from "@gds/core";
import { GdsProvider } from "@gds/theme/client";
import { lauraTheme } from "@/lib/gds-theme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <GdsProvider locale="hu" messages={hu} theme={lauraTheme} defaultColorScheme="auto">
      {children}
    </GdsProvider>
  );
}
