import { readFileSync } from "node:fs";
import { defineConfig, globalIgnores } from "eslint/config";
import {
  createGdsConfig,
  resolveAllowedImports,
} from "@doneisbetter/gds-eslint-config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const gdsAdoptionManifest = JSON.parse(
  readFileSync(new URL("./gds-adoption.json", import.meta.url), "utf8"),
);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...createGdsConfig({
    allowedImports: resolveAllowedImports(gdsAdoptionManifest),
  }),
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
