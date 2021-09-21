import React, { Component } from "react";
import Authenticate from "./Authenticate";
import "./bootstrap.css"


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUserName=this.handleUserName.bind(this)
        // this.handlePassword=this.handlePassword.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)

    }
    handleChange(event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]
                : event.target.value
        })
    }
    loginClick() {


        if (this.state.username === 'rahul@123' && this.state.password === 'dummy') {
            Authenticate.loginSuccessful(this.state.username, this.state.password);
            // For Redirecting one page to another............
            this.props.history.push(`/welcome/${this.state.username}`)
            console.log("Successful")
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
            console.log("Failed")

        }




    }

    render() {
        return (
            <div className="div">
                <h1 className="">Login</h1><br></br>
                <div className="container width-100px">
                    {/* <ShowInvalidMessage hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidMessage> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credintial</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccess> */}
                </div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

                Password:  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br></br>
                <button className="btn btn-success" onClick={this.loginClick}>Login</button>
            </div>
        )
    }
} export default LoginComponent;