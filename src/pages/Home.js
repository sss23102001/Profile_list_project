import SearchProfile from "../components/SearchProfile"
import Cards from "../components/Cards"
import Filter from "../components/Filter"
import { useLocation } from "react-router-dom";
function Home(props) {
    let profiles=props.profiles
    let setAdmin= props.setAdmin
    let location= useLocation();
    let loc= location.pathname.split("/").at(-1)
    if(loc===""){
        setAdmin(false)
    }
    let users = props.users
    let setUsers = props.setUsers
    console.log("home")
    console.log(users)
    return (
        <div className="homeDiv">
            <div className="searchFilter">
                <SearchProfile users={users} setUsers={setUsers} />
                <Filter users={users} setUsers={setUsers} profiles={profiles} />
            </div>
            <Cards users={users} setUsers={setUsers} />
        </div>
    )
}

export default Home