import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserService } from '../Services/UserService';
import '../Css/ViewUserComponent.css'

function ViewUserComponent() {
    
    let params = useParams();
    let navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        let userService = new UserService();
        userService.viewUser(params.userId).then(res => {
            setUser({...res.data});
        });
    }, []);

    let handleEdit = () => {
        navigate("/createUser/" + params.userId)
    }

    let handleBack = () => {
        navigate('/users/')
    }

    return (
        <div className = "viewContainer">
            <div className="card border-dark w-25">
                    <span className="card-header text-center">{user.firstName + " " + user.lastName}</span>
                    <div className="card-body">
                            <div className="card-text">
                                <div className='userInfo'>
                                    <label>Technology</label>
                                    <span>{user.technology}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Experience</label>
                                    <span>{user.experience}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Age</label>
                                    <span>{user.age}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Email</label>
                                    <span>{user.email}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Last Company</label>
                                    <span>{user.lastCompany}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Last CTC</label>
                                    <span>{user.lastCtc}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Expected CTC</label>
                                    <span>{user.expectedCtc}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Assigned Interviewer</label>
                                    <span>{user.assignedInterviewer}</span>
                                </div>
                                <div className='userInfo'>
                                    <label>Interview Link</label>
                                    <span>{user.inviteLink}</span>
                                </div>
                            </div>
                    </div>
                    <div className="card-footer">
                            <button id = "submit" type = "submit" className="btn btn-outline-success"
                            onClick={handleEdit}
                            >
                                Edit
                            </button>
                            <button button = "reset" className="btn btn-outline-warning"
                            onClick={handleBack}
                            >
                                Back
                            </button>
                        </div>
            </div>           
        </div>
    )
}

export default ViewUserComponent
