# UI Coding Standards

## Component Library

**All UI must be built exclusively with [shadcn/ui](https://ui.shadcn.com/) components.**

- Do NOT create custom UI components.
- Do NOT use any other component library (e.g. MUI, Chakra, Radix directly, etc.).
- If a shadcn/ui component exists for the use case, use it — no exceptions.
- If a layout or composition is needed, build it by composing existing shadcn/ui components together.
- Styling adjustments are allowed via Tailwind utility classes applied directly to shadcn/ui components, but structural or behavioural changes that would constitute a new custom component are not permitted.

### Adding shadcn/ui Components

Install components via the CLI:

```bash
npx shadcn@latest add <component-name>
```

Components are added to `src/components/ui/`. Do not modify the generated component files unless absolutely necessary.

---

## Date Formatting

All dates must be formatted using [date-fns](https://date-fns.org/).

### Required Format

Dates must be displayed in the following format:

```
1st Sep 2025
2nd Aug 2025
3rd Jan 2026
4th Jun 2024
```

This is: `do MMM yyyy` in date-fns format tokens.

### Usage

```ts
import { format } from "date-fns";

format(new Date("2025-09-01"), "do MMM yyyy"); // "1st Sep 2025"
format(new Date("2025-08-02"), "do MMM yyyy"); // "2nd Aug 2025"
format(new Date("2026-01-03"), "do MMM yyyy"); // "3rd Jan 2026"
format(new Date("2024-06-04"), "do MMM yyyy"); // "4th Jun 2024"
```

- Do NOT use `new Date().toLocaleDateString()`, `Intl.DateTimeFormat`, or any other date formatting approach.
- All date formatting throughout the project must go through `date-fns`.
