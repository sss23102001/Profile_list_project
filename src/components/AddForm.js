
import { useState } from "react"

function AddForm(props) {
    let handleFileChange=props.handleFileChange
    let users = props.users
    let setUsers = props.setUsers
    let preview= props.preview
    
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    const [age, setAge] = useState("")
    const [mob, setMob] = useState("")
    const [aadharCard, setAadhar] = useState("")
    const [dob, setDob] = useState("")
    const [qualification, setQualification] = useState("")
    const [maritalStatus, setMarialStatus] = useState("")


    function addHandler() {
        let flag = false
        users.forEach((user) => {
            if (user.aadharCard === aadharCard) {
                console.log("present")
                console.log("the user is already present")
                flag = true
            }
        });
        if (!flag) {
            let newUserObject = {
                name: username,
                imgSource: preview,
                description: description,
                age: age,
                mob: mob,
                aadharCard: aadharCard,
                dob: dob,
                qualification: qualification,
                maritalStatus: maritalStatus
            }
            users.push(newUserObject)
            // console.log("add form")
            // console.log(users.imageSource)
            setUsers(users)
        }

    }
    

        return (
            <div className="FormDiv">
                <label>
                    <p>Enter name</p>
                    <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }}
                        value={username}
                    />
                </label>
                <label>
                    <p>Enter your photo</p>
                    <input type="file" onChange={handleFileChange} />
                </label>
                <label>
                    <p>Enter Description</p>
                    <input
                        required
                        type="text"
                        placeholder="Enter Description"
                        onChange={(event) => {
                            setDescription(event.target.value)
                        }}
                        value={description}
                    />
                </label>
                <label>
                    <p>Enter Age</p>
                    <input
                        required
                        type="number"
                        placeholder="Enter Age"
                        onChange={(event) => {
                            setAge(event.target.value)
                        }}
                        value={age}
                    />
                </label>
                <label>
                    <p>Enter Mobile number</p>
                    <input
                        required
                        type="tel"
                        placeholder="Enter mobile number"
                        onChange={(event) => {
                            setMob(event.target.value)
                        }}
                        value={mob}
                    />
                </label>
                <label>
                    <p>Enter Aadhar number</p>
                    <input
                        required
                        type="number"
                        placeholder="Enter Aadhar number"
                        onChange={(event) => {
                            setAadhar(event.target.value)
                        }}
                        value={aadharCard}
                    />
                </label>
                <label>
                    <p>Enter date of birth</p>
                    <input
                        required
                        type="date"
                        placeholder="Enter Birth Date"
                        onChange={(event) => {
                            setDob(event.target.value)
                        }}
                        value={dob}
                    />
                </label>
                <label>
                    <p>Enter Qualification</p>
                    <input
                        required
                        type="text"
                        placeholder="Enter Qualification"
                        onChange={(event) => {
                            setQualification(event.target.value)
                        }}
                        value={qualification}
                    />
                </label>
                <label>
                    <p>Enter Marital Status</p>
                    <input
                        required
                        type="text"
                        placeholder="Enter Marital Status"
                        onChange={(event) => {
                            setMarialStatus(event.target.value)
                        }}
                        value={maritalStatus}
                    />
                </label>
                <div>
                    <button onClick={()=>{
                        addHandler(preview)
                    }}>Add Profile</button>
                </div>
            </div>
        )
    }

    export default AddForm;