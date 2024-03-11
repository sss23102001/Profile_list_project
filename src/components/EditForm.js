import { useState } from "react"

function EditForm(props) {
    let users = props.users
    let setUsers = props.setUsers
    let handleFileChange = props.handleFileChange
    let preview = props.preview
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [age, setAge] = useState("")
    const [mob, setMob] = useState("")
    const [aadharCard, setAadhar] = useState("")
    const [dob, setDob] = useState("")
    const [qualification, setQualification] = useState("")
    const [maritalStatus, setMarialStatus] = useState("")
    function editHandler() {
        let flag = false;
        users.forEach(user => {

            if (user.aadharCard === aadharCard) {
                console.log("inside edit")
                user.name = name
                user.imgSource=preview
                user.description = description
                user.mob = mob
                user.qualification = qualification
                user.maritalStatus = maritalStatus
                flag = true
                return
            }
        });
        if (!flag) {
            console.log("No user present, Add the user first")
        }
        else {
            setUsers(users)
        }
    }

    return (
        <div className="FormDiv">
            <label>
                <p>Enter name</p>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    value={name}
                />
            </label>
            <label>
                <p>Enter your photo</p>
                <input type="file" onChange={handleFileChange} />
            </label>
            <label>
                <p>Enter Description</p>
                <input
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

                    type="text"
                    placeholder="Enter Marital Status"
                    onChange={(event) => {
                        setMarialStatus(event.target.value)
                    }}
                    value={maritalStatus}
                />
            </label>
            <div>
                <button onClick={editHandler}>Edit Profile</button>
            </div>
        </div>
    )
}

export default EditForm;