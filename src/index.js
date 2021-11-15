import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AddtoCardCtxProvider from "./storage/addtoCard";
import AddToLikesCtxProvider from "./storage/addToLikes";
import ColorChangeCtxProvider from "./storage/colorChange";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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

serviceWorkerRegistration.register();
