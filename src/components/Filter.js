import { useState } from "react"

function Filter(props) {
    let profiles=props.profiles
    let users = props.users
    let setUsers = props.setUsers
    const [minAge, setGreaterAge] = useState(0)
    const [maxAge, setLessAge] = useState(0)
    const [qualification, setQualification] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    function changeQualification(event) {
        setQualification(event.target.value)
    }
    function changeMaritalStatus(event) {
        setMaritalStatus(event.target.value)
    }
    function filterUsers() {
        users=profiles;
        if (minAge !== maxAge && minAge < maxAge) {
            if (minAge && maxAge) {
                if (qualification && maritalStatus) {
                    let newUsers = users.filter((user) => {
                        return (user.age > minAge && user.age < maxAge && user.qualification === qualification && user.maritalStatus === maritalStatus)
                    })
                    setUsers(newUsers)
                }
                else if (qualification) {
                    let newUsers = users.filter((user) => {
                        return (user.age < maxAge && user.age > minAge && user.qualification === qualification)
                    })
                    setUsers(newUsers)
                }
                else if (maritalStatus) {
                    let newUsers = users.filter((user) => {
                        return (user.age < maxAge && user.age > minAge && user.maritalStatus === maritalStatus)
                    })
                    setUsers(newUsers)
                }
                else {
                    let newUsers = users.filter((user) => {
                        return (user.age < maxAge && user.age > minAge)
                    })
                    setUsers(newUsers)
                }
            }

            else if (qualification && maritalStatus) {
                let newUsers = users.filter((user) => {
                    return (user.age > minAge && user.qualification === qualification && user.maritalStatus === maritalStatus)
                })
                setUsers(newUsers)
            }
            else if (qualification) {
                let newUsers = users.filter((user) => {
                    return (user.age > minAge && user.qualification === qualification)
                })
                setUsers(newUsers)
            }
            else if (maritalStatus) {
                let newUsers = users.filter((user) => {
                    return (user.age > minAge && user.maritalStatus === maritalStatus)
                })
                setUsers(newUsers)
            }

        }

        else {
            console.log("do nothing")
            return
        }
    }
    return (
        <div>
            <div>
                <p className="Filter">Filters</p>
                <div className="labelDiv">
                    <label>
                        <p className="filter-para">Age</p>
                        <input
                            type="number"
                            min={0}
                            max={100}
                            placeholder="min age"
                            onChange={(event) => {
                                setGreaterAge(event.target.value)
                            }}
                            value={minAge}
                        />
                        <span className="toWord">to</span>
                        <input
                            type="number"
                            min={0}
                            max={100}
                            placeholder="max age"
                            onChange={(event) => {
                                setLessAge(event.target.value)
                            }}
                            value={maxAge}
                        />

                    </label>
                    <label>
                        <p className="filter-para">Qualification</p>
                        <input
                            type="text"
                            placeholder="Enter qualification"
                            value={qualification}
                            onChange={changeQualification}
                        />
                    </label>
                    <label>
                        <p className="filter-para">Marital Status</p>
                        <input
                            type="text"
                            placeholder="Marrital status"
                            value={maritalStatus}
                            onChange={changeMaritalStatus}
                        />
                    </label>

                </div>

                <button className="filterBtn" onClick={filterUsers}>Apply Filters</button>
            </div>

        </div>
    )
}

export default Filter;