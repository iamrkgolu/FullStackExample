import React, { Component } from "react";
import "./bootstrap.css"
import Authenticated from "./Authenticated";
import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
import Header from "./Header";
import Footer from "./Footer";
import WelcomeComponent from "./WelcomeComponent";
import LogOut from "./LogOut";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header></Header>
                    <h1 className="div">Welcome To Todo</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Authenticated path="/welcome/:name" component={WelcomeComponent} />
                        <Authenticated path="/todo" component={ListTodoComponent} />
                        <Authenticated path="/logout" component={LogOut} />
                        <Route path="" component={Error} />
                    </Switch>
                    <Footer></Footer>
                </Router>
            </div>
        )
    }
}
export default TodoApp