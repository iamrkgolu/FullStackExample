import React, { Component } from "react";
import TodoDataService from '../../api/todo/TodoDataService.js'
import Authenticate from "./Authenticate.js";
import "./bootstrap.css"

class ListTodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                ],
                message:null

                
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
    }
    componentDidMount() {
        let username = Authenticate.getLogin;
        TodoDataService.executeTodoDataService(username)
            .then(
                response => {
                    this.setState(
                        { todos: response.data }
                    )
                })
    }
    deleteTodoClicked(id) {
        let username = Authenticate.getLogin;
        TodoDataService.deleteTodos(username,id)
        .then(Response=>{
            this.setState({message:`Delete Of Todo ${id} Successful`})
        })

    }
    render() {
        return (
            <div className="container">
                <h1>List Todo</h1>
                {this.state.message &&<div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DESRIPTION</th>
                                <th>DONE</th>
                                <th>TARGET DATE</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
} export default ListTodoComponent;