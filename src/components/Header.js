import React from "react";
import GoogleAuth from "./GoogleAuth";
import { connect} from "react-redux";

const Header = (props) => {
    return <div className="container">
        <div className="flex">
        <div>{props.userName ? <strong>Hi {props.userName}</strong>: "Orders"}</div>
        <div><GoogleAuth /></div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return { userName: state.auth.userName}
}

export default connect(mapStateToProps, {})(Header);