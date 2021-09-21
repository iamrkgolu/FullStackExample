import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Authenticate from "./Authenticate";


class Authenticated extends Component {
    render() {
        if (Authenticate.isUserLogin()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
    }

} export default Authenticated;