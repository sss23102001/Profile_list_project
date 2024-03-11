import { useState } from "react";

function DelForm(props){
    let users=props.users
    let setUsers=props.setUsers
    const[aadharCard, setAadhar]=useState("")

    function deleteHandler(){
        let flag=false
        users.forEach(user => {
            if(user.aadharCard===aadharCard){
                let newUsers= users.filter((user)=>{
                    return user.aadharCard!==aadharCard
                })
                setUsers(newUsers)
                flag=true
                return
            }
        });
        if(!flag){
            console.log("no user present , first add it !")
        }
    }

    return(
        <div >
            <label className="delForm">
                <p>Enter Aadhar Number</p>
                <input
                    type="number"
                    placeholder="Enter Aadhar number"
                    onChange={(event)=>{
                        setAadhar(event.target.value)
                    }}
                    value={aadharCard}
                />
            </label>
            <div className="delBtn">
                <button onClick={deleteHandler}>Delete Profile</button>
            </div>
        </div>
    )
}

export default DelForm;