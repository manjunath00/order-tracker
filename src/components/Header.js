import React from "react";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return <div className="container">
        <div className="flex">
        <div>Orders</div>
        <div><GoogleAuth /></div>
        </div>
    </div>
}

export default Header;