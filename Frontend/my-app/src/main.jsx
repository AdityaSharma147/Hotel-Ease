import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import RoomContextProvider from "./context/RoomContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoomContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoomContextProvider>
  </StrictMode>,
);
