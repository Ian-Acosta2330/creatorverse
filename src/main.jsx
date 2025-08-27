// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Client from "./client";

const router = createBrowserRouter([]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Client />
  </StrictMode>
);
