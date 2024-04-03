import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyContext from "./context/MyContext.jsx";
import MyState from "./context/MyState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyState>
      <App />
    </MyState>
  </React.StrictMode>
);
