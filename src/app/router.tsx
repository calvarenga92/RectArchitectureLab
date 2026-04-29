import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Feed
import FeedPage from "@/features/feed/pages/FeedPage";

// Docs (se quiser manter depois)
// import Architecture from "@/features/architecture-docs/Architecture";
import { Hero } from "@/shell/layout/Hero";

import HomePage from "@/features/home/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/feed",
        element: <FeedPage />,
      },
    ],
  },
]);