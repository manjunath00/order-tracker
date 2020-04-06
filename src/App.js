import React from "react";
import "./App.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Header from "./components/Header";
import {
  OrderDelete,
  OrderEdit,
  OrderNew,
  OrdersList    
} from "./components/Order/index.js";
// import OrdersList from "./components/OrdersList";
// import OrderNew from "./components/OrderNew";
// import OrderEdit from "./components/OrderEdit";
// import OrderDelete from "./components/OrderDelete";

function App() {
  return (
    <Router>
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
