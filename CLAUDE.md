# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

Next.js 16 app using the **App Router** (`src/app/`). TypeScript with strict mode. Tailwind CSS v4 via `@tailwindcss/postcss`.

Path alias: `@/*` → `src/*`

The project is a fresh scaffold with no business logic yet — just the default Next.js template structure.
