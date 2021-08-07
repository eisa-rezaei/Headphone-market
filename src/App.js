import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
//local data
import GetStartedPage from "./pages/getStarted/GetStartedPage";
import ColorChangeCtxProvider from "./storage/colorChange";
import AddtoCardCtxProvider from "./storage/addtoCard";
import ItemInfo from "./pages/item/ItemInfo";
import Products from "./pages/products/Products";
import Card from "./pages/card/Card";
import Favorites from "./pages/favorites/Favorites";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="pages-container">
          <Router>
            <Switch>
              <Route path="/" component={GetStartedPage} exact />
              <Route path="/listofproducts" component={Products} />
              <Route
                path="/item/:id"
                children={
                  <AddtoCardCtxProvider>
                    <ColorChangeCtxProvider>
                      <ItemInfo />
                    </ColorChangeCtxProvider>
                  </AddtoCardCtxProvider>
                }
              />
              <Route path="/card">
                <AddtoCardCtxProvider>
                  <Card />
                </AddtoCardCtxProvider>
              </Route>
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
