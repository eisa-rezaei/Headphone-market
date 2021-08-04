import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetStartedPage from "./pages/getStarted/GetStartedPage";
import ItemInfo from "./pages/item/ItemInfo";
import Products from "./pages/products/Products";
import "./App.css";
import Card from "./pages/card/Card";

function App() {
  return (
    <>
      <div className="container">
        <div className="pages-container">
          <Router>
            <Switch>
              <Route path="/" component={GetStartedPage} exact />
              <Route path="/listofproducts" component={Products} />
              <Route path="/item/:id" children={<ItemInfo />} />
              <Route path="/card" component={Card} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
