import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WorkspaceLayout from "./layouts/workspaceLayout";
import "./i18n";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WorkspaceLayout />
  </React.StrictMode>
);
