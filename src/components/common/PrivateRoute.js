import {Route, Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const PrivateRoute = (props) => {
  if (props.isSignedIn) {
    return <Route exact={props.exact} path={props.path} component={props.component} />;
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, null)(PrivateRoute);
