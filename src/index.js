import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchResult from "./pages/SearchResult";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      {/* <Route index element={<App />} /> */}
      <Route index element={<SearchResult />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      {/* <App /> */}
      {/* <SearchResult /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
