// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   FormControl,
//   Input,
//   InputLabel,
//   FormGroup,
//   Typography,
//   Button,
//   TextField,
// } from "@mui/material";

// import { editUser, getUser } from "../service/api";

// const initialInfo = {
//   name: "",
//   username: "",
//   email: "",
//   phone: "",
// };

// const EditUser = () => {
//   const [info, setInfo] = useState(initialInfo);

//   const navigate = useNavigate();

//   const { id } = useParams();

//   useEffect(() => {
//     getUserData();
//   });

//   const getUserData = async () => {
//     let response = await getUser(id);
//     setInfo(response.data)
//   };
//   const handleValueChange = (e) => {
//     setInfo({ ...info, [e.target.name]: e.target.value });
//   };
//   const handleEditUser = async () => {
//     await editUser(info,id );
//     navigate("/all");
//   };

//   return (
//     <>
//       <FormGroup sx={{ margin: " 5% auto 0 auto", width: "50%" }}>
//         <Typography variant="h4">Add User</Typography>

//         <FormControl sx={{ marginTop: "20px" }}>
//           <InputLabel>Name</InputLabel>
//           <Input onChange={(e) => handleValueChange(e)} name="name" value={info.name}/>
//         </FormControl>

//         <FormControl sx={{ marginTop: "20px" }}>
//           <InputLabel>userName</InputLabel>
//           <Input onChange={(e) => handleValueChange(e)} name="username" value={info.username}/>
//         </FormControl>

//         <FormControl sx={{ marginTop: "20px" }}>
//           <InputLabel>Email</InputLabel>
//           <Input onChange={(e) => handleValueChange(e)} name="email" value={info.email}/>
//         </FormControl>

//         <TextField
//           label="phone"
//           sx={{ mt: "10px" }}
//           onChange={(e) => handleValueChange(e)}
//           name="phone"
//           value={info.phone}
//         >
//           Phone
//         </TextField>

//         <FormControl sx={{ marginTop: "20px" }}>
//           <Button variant="contained" onClick={() => handleEditUser()}>

//             Edit User
//           </Button>
//         </FormControl>
//       </FormGroup>
//     </>
//   );
// };

// export default EditUser;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  Input,
  InputLabel,
  FormGroup,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { editUser, getUser } from "../service/api";

const initialInfo = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [info, setInfo] = useState(initialInfo);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  },[]);

  const getUserData = async () => {
    let response = await getUser(id);
    setInfo(response.data);
    // console.log(response.data);
  };

  const handleValueChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };
  const handleAddUser = async () => {
    await editUser(info,id);
    navigate('/all')
  };

  return (
    <>
      <FormGroup sx={{ margin: " 5% auto 0 auto", width: "50%" }}>
        <Typography variant="h4">Edit User</Typography>
        <FormControl sx={{ marginTop: "20px" }}>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => handleValueChange(e)}  value={info.name} name="name"/>
        </FormControl>
        <FormControl sx={{ marginTop: "20px" }}>
          <InputLabel>userName</InputLabel>
          <Input onChange={(e) => handleValueChange(e)} name="username" value={info.username}/>
        </FormControl>
        <FormControl sx={{ marginTop: "20px" }}>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => handleValueChange(e)} name="email" value={info.email}/>
        </FormControl>
        <TextField
          label="phone"
          sx={{ mt: "10px" }}
          onChange={(e) => handleValueChange(e)}
          name="phone"
          value={info.phone}
        >
          Phone
        </TextField>
        <FormControl sx={{ marginTop: "20px" }}>
          <Button variant="contained" onClick={handleAddUser}>
            {" "}
            Edit User
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default EditUser;
