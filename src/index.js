import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Folder from "../src/components/pages/Folder";
import Shared from "./components/pages/Shared";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Folder /> */}
    <Shared />
  </React.StrictMode>
);
