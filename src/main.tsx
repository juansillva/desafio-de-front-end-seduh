import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

const root = document.getElementById("root");

if (!root) throw new Error("Root element não encontrado");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
