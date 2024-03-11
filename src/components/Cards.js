
import Card from "./Card"
import { Link } from "react-router-dom"
function Cards(props) {
    let users = props.users
    // setUsers(users)
    console.log("card")
    console.log(typeof users)
    console.log(users)
    return (
        <div className="cardsDiv">
            {
                users.map((user, index) => {
                    console.log("cards")
                    console.log(user)
                    return (
                        <Link key={index} to={`/profile/${user.name}-${index}`}>
                            <Card key={index} user={user} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Cards