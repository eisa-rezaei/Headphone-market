import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AddtoCardCtxProvider from "./storage/addtoCard";
import AddToLikesCtxProvider from "./storage/addToLikes";
import ColorChangeCtxProvider from "./storage/colorChange";

ReactDOM.render(
  <AddtoCardCtxProvider>
    <AddtoCardCtxProvider>
      <ColorChangeCtxProvider>
        <AddToLikesCtxProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </AddToLikesCtxProvider>
      </ColorChangeCtxProvider>
    </AddtoCardCtxProvider>
  </AddtoCardCtxProvider>,
  document.getElementById("root")
);
