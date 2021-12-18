import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Css/ListUserComp.css";
import { UserService } from "../Services/UserService";

function CreateUserComponent() {
    const navigate = useNavigate();
    const params = useParams();
    const userService = new UserService();
    const [user, setUser] = useState({});

    const formRef = useRef(null)
    const firstName = useRef(null)
    const lastName = useRef(null)
    const technology = useRef(null)
    const email = useRef(null)
    const age = useRef(null)
    const experience = useRef(null)
    const lastCtc = useRef(null)
    const expectedCtc = useRef(null)
    const lastCompany = useRef(null)
    const inviteLink = useRef(null)
    const assignedInterviewer = useRef(null)

    useEffect(() => {
        userService.viewUser(params.createId)
        .then(res => setUser({...res.data}))
    }, []);

    const [firstname, setFirstname] = useState();

   

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     if(params.createId === "_add"){
    //         handleAdd(e);
    //     }
    //     else{
    //         handleEdit(e);
    //     }

    // }

    // const handleEdit = (e) => {
        // firstName.current.value = user.firstName
        // lastName.current.value = user.lastName
        // technology.current.value = user.technology
        // email.current.value = user.email
        // age.current.value = user.age
        // experience.current.value = user.experience
        // lastCtc.current.value = user.lastCtc
        // expectedCtc.current.value = user.expectedCtc
        // lastCompany.current.value = user.lastCompany
        // inviteLink.current.value = user.inviteLink
        // assignedInterviewer.current.value = user.assignedInterviewer
    // }

    const handleAdd = (e) => {
        e.preventDefault();
        let form = document.getElementById('formId')
        let valid = form.checkValidity();
        form.reportValidity()
        
        if(params.createId == "_add"){
            setFirstname(user.firstName)
            firstName.current.value = firstname
            lastName.current.value = user.lastName
            technology.current.value = user.technology
            email.current.value = user.email
            age.current.value = user.age
            experience.current.value = user.experience
            lastCtc.current.value = user.lastCtc
            expectedCtc.current.value = user.expectedCtc
            lastCompany.current.value = user.lastCompany
            inviteLink.current.value = user.inviteLink
            assignedInterviewer.current.value = user.assignedInterviewer
        }

        if(valid){
            let user1 =   {
                "firstName": firstName.current.value,
                "lastName": lastName.current.value,
                "technology": technology.current.value,
                "email": email.current.value,
                "age": age.current.value,
                "experience": experience.current.value,
                "lastCtc": lastCtc.current.value,
                "expectedCtc": expectedCtc.current.value,
                "lastCompany": lastCompany.current.value,
                "inviteLink": inviteLink.current.value,
                "assignedInterviewer":assignedInterviewer.current.value
              }
            if(params.createId == "_add"){
                userService.editUser(user1).then(res => {
                    navigate("/users")
                })
            }else{
                userService.createUser(user1).then(res => {
                    navigate("/users")
                })
            }
        }
        else{
            console.log("Enter correct details")
        }
    }

    const handleReset = (e) => {
        e.preventDefault()
        formRef.current.reset()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h4 className="card-header text-center">Add Candidate</h4>
                    <form id = "formId" ref={formRef}>
                        <div className="card-body">
                            <div className="card-text">
                                <div className="d-flex justify-content-between">
                                    <label>First Name</label>
                                    <input
                                        className="textBox"
                                        name="firstName"
                                        ref={firstName}
                                        type="text"
                                        placeholder="First Name"
                                        pattern="[A-Za-z]*"
                                        title="Names cannot contain numbers"
                                        value = {firstname}
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Last Name</label>
                                    <input
                                        className="textBox"
                                        name="lastName"
                                        ref={lastName}
                                        type="text"
                                        placeholder="Last Name "
                                        pattern="[A-Za-z]*"
                                        title="Names cannot contain numbers"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Age</label>
                                    <input
                                        className="textBox"
                                        name="age"
                                        ref={age}
                                        type="number"
                                        step = "1"
                                        placeholder="Age"
                                        title="Enter a number"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Email Id</label>
                                    <input
                                        className="textBox"
                                        name="email"
                                        ref={email}
                                        type="email"
                                        placeholder="Email Id"
                                        title="Enter a valid email address"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Experience</label>
                                    <input
                                        className="textBox"
                                        name="experience"
                                        ref={experience}
                                        type="number"
                                        step = "0.1"
                                        placeholder="Experience"
                                        title="Enter a number with atmost one decimal"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label for="myBrowser">Technology</label>
                                    <select
                                        className="textBox"
                                        name="technology"
                                        ref={technology}
                                        required
                                    >
                                        <option value="">
                                            Select a Technology
                                        </option>
                                        <option value="Chrome">Chrome</option>
                                        <option value="Firefox">Firefox</option>
                                        <option value="Internet Explorer">
                                            IE
                                        </option>
                                    </select>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Previous Company</label>
                                    <input
                                        className="textBox"
                                        name="lastCompany"
                                        ref={lastCompany}
                                        type="text"
                                        placeholder="Previous Company"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Last CTC</label>
                                    <input
                                        className="textBox"
                                        name="lastCtc"
                                        ref={lastCtc}
                                        type="number"
                                        step="0.1"
                                        placeholder="Last CTC in Lacs"
                                        title="If CTC is 10,00,000 then type 10.3"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Expected CTC</label>
                                    <input
                                        className="textBox"
                                        name="expectedCtc"
                                        ref={expectedCtc}
                                        type="number"
                                        step="0.1"
                                        placeholder="Expected CTC in Lacs"
                                        title="If CTC is 10,00,000 then type 10.3"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Invite Link</label>
                                    <input
                                        className="textBox"
                                        name="inviteLink"
                                        ref={inviteLink}
                                        type = "url"
                                        placeholder="Invite Link"
                                        title="Enter a valid URL"
                                        required
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <label>Assigned Interviewer</label>
                                    <input
                                        className="textBox"
                                        name="assignedInterviewer"
                                        ref={assignedInterviewer}
                                        type="text"
                                        placeholder="Interviewer Name"
                                        pattern="[A-Za-z]*"
                                        title="Names cannot contain numbers"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button id = "submit" type = "submit" className="btn btn-outline-primary"
                            onClick={handleAdd}>
                                Add
                            </button>
                            <button button = "reset" className="btn btn-outline-danger"
                            onClick={handleReset}>
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUserComponent;
