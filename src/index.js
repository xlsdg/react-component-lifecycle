import React from "react";
import ReactDOM from "react-dom";

import AppA from "./AppA";
// import AppB from "./AppB";

ReactDOM.render(
  <React.StrictMode>
    <AppA />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <AppB />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppA />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppB />
//   </React.StrictMode>
// );
