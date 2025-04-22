import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WordLibz } from "./components/wordLibz/WordLibz.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WordLibz />
  </StrictMode>,
);
