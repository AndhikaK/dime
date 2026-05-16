// tokens/semantic.ts
// Never references primitive directly — defines meaning per mode.

import { primitive as p } from "./primitive";

interface SemanticTokens {
  "surface-bg": string;
  "surface-card": string;
  "surface-overlay": string;
  "text-primary": string;
  "text-secondary": string;
  "text-muted": string;
  "border-default": string;
  "border-strong": string;
}

export const light: SemanticTokens = {
  "surface-bg": p.color.gray[50],
  "surface-card": p.color.white,
  "surface-overlay": p.color.gray[100],
  "text-primary": p.color.gray[900],
  "text-secondary": p.color.gray[700],
  "text-muted": p.color.gray[500],
  "border-default": p.color.gray[200],
  "border-strong": p.color.gray[300],
};

export const dark: SemanticTokens = {
  "surface-bg": p.color.gray[900],
  "surface-card": p.color.gray[800],
  "surface-overlay": p.color.gray[700],
  "text-primary": p.color.gray[50],
  "text-secondary": p.color.gray[300],
  "text-muted": p.color.gray[500],
  "border-default": p.color.gray[700],
  "border-strong": p.color.gray[500],
};

export const semantic = { light, dark };
