import {Route, Redirect} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const PrivateRoute = (props) => {
  if (props.isSignedIn) {
    return (
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

PrivateRoute.propTypes = {
  isSignedIn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, null)(PrivateRoute);
