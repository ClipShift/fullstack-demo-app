import React, { Component } from 'react'
import { UserService } from '../Services/UserService'

export default class ListUsersComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        const userService = new UserService();
        userService.getUsers().then((res) => {
            this.setState({
                users: [...res.data]
            });
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Account Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) => (
                                <tr key = {user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.accountType}</td>
                                </tr>
                                
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
