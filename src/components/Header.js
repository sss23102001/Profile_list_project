import { Link } from "react-router-dom"

function Header({admin, setAdmin}) {
    return (
        <div className="headerDiv">
            <h1>Profiles List</h1>
            {admin &&
                <Link to="/">
                    <button onClick={()=>{
                        setAdmin(false)
                    }}>Logout</button>
                </Link>
            }
            {!admin &&
                <Link to="/admin">
                    <button onClick={()=>{
                        setAdmin(true)
                    }}>Admin</button>
                </Link>
            }
            
        </div>
    )
}
export default Header