import React from "react";

const clientId = process.env.REACT_APP_ID;

class GoogleAuth extends React.Component {
  state = {isSignedIn: null};

  componentDidMount() {
    // console.log(process.env.REACT_APP_ID);
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: clientId,
          // scope:"email"
          scope:"profile"
          // scope: {email: "email", profile:"profile"},
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({isSignedIn: this.auth.isSignedIn.get()});
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  };

  onSingIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === true) {
      return (
        <div className="red">
          <button onClick={() => this.onSignOut()}> Singout </button>
        </div>
      );
    } else {
      return (
        <div className="blue">
          <button onClick={() => this.onSingIn()}> SignIn </button>
        </div>
      );
    }
  }
  0;

  render() {
    console.log(this.state)
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
