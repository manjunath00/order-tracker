import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {signIn, signOut} from "../actions/authActions";
const clientId = process.env.REACT_APP_ID;

class GoogleAuth extends React.Component {
  componentDidMount() {
    // console.log(process.env.REACT_APP_ID);
    const gapi = async () =>
      await window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId: clientId,
            scope: "profile",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });

    gapi();
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userName = this.auth.currentUser.get().getBasicProfile().Ad;
      const userId = this.auth.currentUser.get().getId();
      const user = {userName, userId};
      this.props.signIn(user);
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === true) {
      return (
        <div className="red">
          <button onClick={() => this.onSignOutClick()}> Signout </button>
        </div>
      );
    } else {
      return (
        <div className="blue">
          <button onClick={() => this.onSignInClick()}> SignIn </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

GoogleAuth.propTypes = {
  isSignedIn: PropTypes.bool,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
