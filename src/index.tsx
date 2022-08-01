import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import App from "./App";
import { OpenCard } from "./components/OpenCard";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<OpenCard />} />
          <Route path="OpenCard" element={<OpenCard />}>
            {/*       <Route path=":teamId" element={< />} />
            <Route path="new" element={< />} />
            <Route index element={< />} /> */}
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
