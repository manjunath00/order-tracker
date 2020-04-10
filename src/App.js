import React from "react";
import {Route, Router, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";
import Header from "./components/Header";
import {
  OrderDelete,
  OrderEdit,
  OrderNew,
  OrdersList,
} from "./components/Order/index.js";
import history from "./history";

function App(props) {
  // console.log(props);
  return (
    <Router history={history}>
      <div className="mx-auto">
        <Route path="/">
          <Header />
          {props.isSignedIn ? <Redirect to="/orders" /> : ""}
        </Route>
        <PrivateRoute path="/orders" component={OrdersList} />
        <Switch>
          <PrivateRoute exact={true} path="/orders/new" component={OrderNew} />
          <PrivateRoute
            exact={true}
            path="/orders/edit/:id"
            component={OrderEdit}
          />
          <PrivateRoute
            exact={true}
            path="/orders/delete/:id"
            component={OrderDelete}
          />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {})(App);
