# FinSight AI - AI Powered Finance Dashboard

FinSight AI is a personal finance dashboard built using React and Tailwind CSS. The goal of this project was to create a clean and responsive fintech-style dashboard with spending analytics, AI-based insights, and portfolio tracking using mock financial data.

The project mainly focuses on reusable frontend architecture, responsive UI design, performance optimization, and smooth user interactions.

---

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Recharts
- Framer Motion
- React Helmet Async
- Lucide React

---

## Features

- Financial overview cards
- AI-generated finance insights
- Transaction history table
- Budget tracking section
- Investment overview
- Search and filtering
- Responsive dashboard layout
- Dark mode support
- Analytics event tracking
- Reusable UI components

---

## Folder Structure

```text
src/
├── components/
│   ├── dashboard/
│   ├── layout/
│   └── ui/
│
├── hooks/
│   ├── useFetch.ts
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── useAnalytics.ts
│
├── pages/
├── services/
├── data/
├── utils/
├── styles/
└── App.tsx
```

---

## Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically detect the Vite configuration and deploy the project.

**Note**: A `vercel.json` file is included to handle SPA routing, ensuring all routes work correctly on refresh.

---

## Setup & Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```