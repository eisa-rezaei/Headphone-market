import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import GetStartedPage from "./pages/getStarted/GetStartedPage";
import ItemInfo from "./pages/item/ItemInfo";
import Products from "./pages/products/Products";
import Card from "./pages/card/Card";
import Favorites from "./pages/favorites/Favorites";
import "./App.css";
import { ColorChangingCtxProvider } from "./stogre/colorChangeing";

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
                  <ColorChangingCtxProvider>
                    <ItemInfo />
                  </ColorChangingCtxProvider>
                }
              />
              <Route path="/card" component={Card} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;