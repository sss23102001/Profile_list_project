import { useState } from "react";

function SearchProfile(props){
    let users= props.users
    let setUsers= props.setUsers
    const[search, setSearch]=useState("")
    function changeHandler(event){
        setSearch(event.target.value)
    }
    function searchHandler(search){
        if(search){
            console.log(search)
            console.log("clicked")
            let newUsers=users.filter((user)=>{
                return user.name===search
            })
           setUsers(newUsers)
            
        }
    }
    return(
        <div className="searchDiv">
            <label>
                <p>Search Profile</p>
                <input
                    data-name
                    type="text"
                    placeholder="Enter user name.."
                    value={search}
                    onChange={changeHandler}
                />
            </label>
            <button onClick={()=>{
                searchHandler(search)
            }}>Search</button>
        </div>
    )
}

export default SearchProfile;