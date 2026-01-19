import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

// Create a client
// const queryClient = new QueryClient();
const queryClient = new QueryClient();
// defaultOptions: {
//   queries: {
//     refetchOnWindowFocus: false,
//   },
// },

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#051117]">
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </div>
    </QueryClientProvider>
  </StrictMode>
);
