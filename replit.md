# Project Overview

This is a React + TypeScript + Vite application — an AI-powered learning platform with multiple modules, quizzes, flashcards, and a certificate system. It uses Google Gemini AI for various interactive features.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Vite 6
- **State Management**: Zustand
- **Routing**: React Router DOM v7
- **AI**: Google Gemini AI (`@google/genai`)
- **Drag & Drop**: `@hello-pangea/dnd`
- **PDF Generation**: jsPDF + html2canvas
- **Animations**: Motion (Framer Motion)

## Project Structure

```
src/
  App.tsx           - Root component with routing
  main.tsx          - Entry point
  index.css         - Global styles
  components/       - Reusable UI components
  pages/            - Module pages (Module0-6, Dashboard, Certificate)
  store/            - Zustand state management
public/             - Static assets
```

## Environment Variables

- `GEMINI_API_KEY` - Required for Gemini AI API calls (set in `.env.local`)

## Development

- Dev server: `npm run dev` (runs on port 5000, host 0.0.0.0)
- Build: `npm run build`
- Lint: `npm run lint`

## Replit Configuration

- Frontend served on port 5000 (configured in `vite.config.ts`)
- `allowedHosts: true` set to work through Replit's proxy
- Deployment: static site via `npm run build` → `dist/`
