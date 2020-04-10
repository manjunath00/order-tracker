import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {signIn, signOut} from "../actions/authActions";
const clientId = process.env.REACT_APP_ID;

class GoogleAuth extends React.Component {
  componentDidMount() {
    // console.log(process.env.REACT_APP_ID);
    const gapi = async() =>  await window.gapi.load("client:auth2", () => {
       window.gapi.client
        .init({
          clientId: clientId,
          scope: "profile",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log(this.auth.isSignedIn.get(), ".....from google oauth")
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });

    gapi()
  }

  onSignInClick = () => {
    console.log(" is singed in")
    this.auth.signIn();
  };

  onSignOutClick = () => {
    console.log(" is singed in")
    this.auth.signOut();
    return <Redirect to="/" />;
  };
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const userName = this.auth.currentUser.get().getBasicProfile().Ad;
      const userId = this.auth.currentUser.get().getId();
      const user = {userName, userId};
      this.props.signIn(user);
    } else {
      console.log("Signing out.........")
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
  0;

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(".....From google auth....", state)
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
