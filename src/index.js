import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AddToLikesCtxProvider } from "./stogre/addToLikes";

ReactDOM.render(
  <AddToLikesCtxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AddToLikesCtxProvider>,
  document.getElementById("root")
);
