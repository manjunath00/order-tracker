import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import {
  OrderDelete,
  OrderEdit,
  OrderNew,
  OrdersList    
} from "./components/Order/index.js";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div className="mx-auto">
        <Header />
        <OrdersList />
        <Switch>
          {/* <Route exact={true} path="/orders/orders" component={OrdersList} /> */}
          <Route exact={true} path="/orders/new" component={OrderNew} />
          <Route exact={true} path="/orders/edit/:id" component={OrderEdit} />
          <Route
            exact={true}
            path="/orders/delete/:id"
            component={OrderDelete}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
