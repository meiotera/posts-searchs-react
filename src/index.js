import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.styles.css";
import Home from "./templates/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
