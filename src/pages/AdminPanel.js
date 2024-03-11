import { useState } from "react";
import AddForm from "../components/AddForm";
import DelForm from "../components/DelForm";
import EditForm from "../components/EditForm";
import { useLocation } from "react-router-dom";
function AdminPanel(props) {
    let setAdmin= props.setAdmin
    let location= useLocation();
    let loc= location.pathname.split("/").at(-1)
    if(loc==="admin"){
        setAdmin(true)
    }
    let users = props.users
    let setUsers = props.setUsers
    let selectedFile = props.selectedFile
    let setSelectedFile = props.setSelectedFile
    let preview = props.preview
    let setPreview = props.setPreview
    let handleFileChange = props.handleFileChange
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const [del, setDel] = useState(false)
    return (
        <div className="adminPanel">
            <div className="adminHeader">
                <h2>Admin Panel</h2>
                <p className="adminPara">Click on operation you want to perform</p>
            </div>
            <div className="adminButtons">
                <button onClick={() => {
                    setAdd(true)
                    setDel(false)
                    setEdit(false)
                }}>Add</button>

                <button onClick={() => {
                    setEdit(true)
                    setAdd(false)
                    setDel(false)
                }}>Edit</button>

                <button onClick={() => {
                    setDel(true)
                    setAdd(false)
                    setEdit(false)
                }}>Delete</button>

            </div>

            {add &&
                <AddForm users={users} setUsers={setUsers} selectedFile={selectedFile} setSelectedFile={setSelectedFile} preview={preview} setPreview={setPreview} handleFileChange={handleFileChange} />
            }
            {edit &&
                <EditForm users={users} setUsers={setUsers} selectedFile={selectedFile} setSelectedFile={setSelectedFile} preview={preview} setPreview={setPreview} handleFileChange={handleFileChange} />
            }
            {del &&
                <DelForm users={users} setUsers={setUsers} />
            }
        </div>
    )
}

export default AdminPanel;