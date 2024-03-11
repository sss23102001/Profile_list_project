import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserProfile(props) {
    let navigate= useNavigate()
    let users= props.users
    let location = useLocation();
    const [myprofile, setMyProfile] = useState("")
    function fetchUserProfile(){
        if (location.pathname.includes("profile")) {
            let userId = location.pathname.split("/").at(-1).split("-").at(-1)
            setMyProfile(users[userId])
        }
        else{
            return
        }
    }
    useEffect(()=>{
        fetchUserProfile()
    },[location.pathname])
    return (
        <div className="userProfile">
            <button onClick={()=>{
                navigate(-1)
            }}>Go Back</button>
            <h2>User Details</h2>
            <img src={myprofile.imgSource} alt="Profile"/>
            <p>Name: {myprofile.name}</p>
            <p>Description: {myprofile.description}</p>
            <p>Age: {myprofile.age}</p>
            <p>Mobile no: {myprofile.mob}</p>
            <p>Birth Date: {myprofile.dob}</p>
            <p>Qualification: {myprofile.qualification}</p>
            <p>Address: {myprofile.address}</p>
            <p>Marital Status: {myprofile.maritalStatus}</p>
        </div>
    )
}

export default UserProfile;