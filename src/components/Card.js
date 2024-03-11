
function Card(props) {
    let imgSource = props.user.imgSource
    // console.log("inside card")
    // console.log(imgSource)
    let username = props.user.name;
    let description = props.user.description
    let address= props.user.address
    // let age= props.user.age
    // let dob= props.user.dob
    // let qualification= props.user.qualification
    // let maritalStatus= props.user.maritalStatus
    return (
        <div className="cardDiv">
            <p><span className="cardAtt">Name: </span>{username}</p>
            {
                // preview? (<img src={preview} alt="Selected Image" width="100px" height="100px"/>):(<img src={imgSource} alt="Selected Image"  width="100px" height="100px"/>)
            }
            <div>
                <img src={imgSource} alt="Selected Image" />
            </div>
            <p><span className="cardAtt">Description: </span>{description}</p>
            <p><span className="cardAtt">Address: </span>{address}</p>
            {/* <p>Date of Birth: {dob}</p>
            <p>Age: {age}</p>
            <p>Qualification: {qualification}</p>
            <p>Marital Status: {maritalStatus}</p> */}
            
        </div>
    )
}

export default Card;