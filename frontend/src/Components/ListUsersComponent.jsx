import React, { useEffect, useState } from "react";
import { UserService } from "../Services/UserService";
import { useNavigate } from "react-router-dom";

function ListUsersComponent() {
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userService = new UserService();
        userService.getUsers().then((res) => {
            setUsers([...res.data]);
        });
    }, []);

    const createUser = () => {
        navigate("/createUser");
    };

    return (
        <div className="container outerDiv">
            <h2 className="text-center">Users List</h2>
            <button className="btn btn-primary btn-block" onClick={createUser}>
                Add Candidate
            </button>
            <div className="divs">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>Technology</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length !== 0 ? (
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.technology}</td>
                                    <td>
                                        <button class="btn btn-secondary">
                                            View
                                        </button>
                                        <button class="btn btn-warning">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">
                                    <div className="spinDiv">
                                        <div
                                            className="spinner-border text-secondary actualSpinner"
                                            role="status"
                                        >
                                            <span class="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListUsersComponent;
