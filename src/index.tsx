import "bootstrap/dist/css/bootstrap.min.css";

import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from "./App";
import { OpenCard } from "./components/OpenCard";
import { GoToArtist } from "./components/GoToArtist";
import { HoverCard } from "./components/HoverCard";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="gotoartist" element={<GoToArtist />} />
        <Route path="opencard" element={<OpenCard />} />
        <Route path="hovercard" element={<HoverCard />} />
      </Routes>
    </Router>
  </StrictMode>
);
