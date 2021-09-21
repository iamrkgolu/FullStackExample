import React, { Component } from "react";
import "./bootstrap.css"
import { Link } from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retriveMessage = this.retriveMessage.bind(this)
        this.state = {
            message: ""
        }
        this.handleMessage = this.handleMessage.bind(this)
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    <div><h1>Welcome {this.props.match.params.name}.You can Manage Your todos</h1><Link to="/todo">here</Link></div>

                </div>
                <div className="container">
                    <button className="btn btn-success" onClick={this.retriveMessage}>Get</button>
                </div>
                <div>
                    {this.state.message}
                </div>
            </>


        )

    }
    retriveMessage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => this.handleMessage(response))
    }
    handleMessage(response) {
        // this.setState({
        //     message:  response.data
        // })
        this.setState({
            message: response.data.message
        })


    }
} export default WelcomeComponent;