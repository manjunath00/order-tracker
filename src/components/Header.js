import React from "react";
import PropTypes from "prop-types";
import GoogleAuth from "./GoogleAuth";
import {connect} from "react-redux";

const Header = ({userName}) => {
  return (
    <div className="container">
      <div className="flex">
        <div>{userName ? <strong>Hi {userName}</strong> : "Orders"}</div>
        <div>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {userName: state.auth.userName};
};

export default connect(mapStateToProps, {})(Header);
