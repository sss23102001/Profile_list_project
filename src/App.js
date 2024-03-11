import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import UserProfile from "./pages/UserProfile";


function App() {
  const [admin, setAdmin] = useState(false)

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Clean up the preview when unmounting
    return () => URL.revokeObjectURL(preview);
  }, []);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setSelectedFile(file);

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      // console.log(reader.result)
      setPreview(reader.result);
      // console.log(preview)
    };
  }


  let profiles = [
    {
      name: "swapnil",
      imgSource:"https://ozgrozer.github.io/100k-faces/0/2/002018.jpg",
      description: "I am a student in SIBAR",
      address: "Pune ,Maharashtra",
      age: "22",
      mob: "9327100951",
      aadharCard: "388237229005",
      dob: "23-10-2001",
      qualification: "MCA",
      maritalStatus: "no"
    },
    {
      name: "foram",
      imgSource:"https://ozgrozer.github.io/100k-faces/0/0/000080.jpg",
      description: "I am a student in SIMCA",
      address: "Pune ,Maharashtra",
      age: "21",
      mob: "9327100951",
      aadharCard: "948603957245",
      dob: "23-10-2001",
      qualification: "MBA",
      maritalStatus: "no"
    },
    {
      name: "rahul",
      imgSource:"https://ozgrozer.github.io/100k-faces/0/8/008340.jpg",
      description: "I am a student in SIOM",
      address: "Pune ,Maharashtra",
      age: "24",
      mob: "9327100951",
      aadharCard: "496386083568",
      dob: "23-10-2001",
      qualification: "Mtech",
      maritalStatus: "yes"
    },
    {
      name: "gahul",
      imgSource:"https://ozgrozer.github.io/100k-faces/0/9/009008.jpg",
      description: "I am a student in MSU",
      address: "Pune ,Maharashtra",
      age: "22",
      mob: "9327100951",
      aadharCard: "839572546789",
      dob: "23-10-2001",
      qualification: "MPhil",
      maritalStatus: "yes"
    },
    {
      name: "tokiya",
      imgSource:"https://ozgrozer.github.io/100k-faces/0/0/000053.jpg",
      description: "I am a student in Politics",
      address: "Pune ,Maharashtra",
      age: "25",
      mob: "9327100951",
      aadharCard: "657834512098",
      dob: "23-10-2001",
      qualification: "Politician",
      maritalStatus: "yes"
    }
  ]
  const [users, setUsers] = useState(profiles)

  return (
    <div className="App">
      <Header admin={admin} setAdmin={setAdmin} />
      <Routes>
        <Route path='/' element={<Home users={users} setUsers={setUsers} setAdmin={setAdmin} profiles={profiles}/>} />
        <Route path='/admin' element={<AdminPanel setAdmin={setAdmin} users={users} setUsers={setUsers} selectedFile={selectedFile} setSelectedFile={setSelectedFile} preview={preview} setPreview={setPreview} handleFileChange={handleFileChange}/>} />
        <Route path='/profile/:ProfileId' element={<UserProfile users={users} setUsers={setUsers} selectedFile={selectedFile} setSelectedFile={setSelectedFile} preview={preview} setPreview={setPreview} handleFileChange={handleFileChange}/>} />
      </Routes>
    </div>
  );
}

export default App;
