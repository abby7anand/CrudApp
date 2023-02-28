import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  InputLabel,
  FormGroup,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import { addUser } from "../service/api";

const initialInfo = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [info, setInfo] = useState(initialInfo);

  const navigate = useNavigate();

  const handleValueChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };
  const handleAddUser = async () => {
    await addUser(info);
    navigate("/all");
  };

  return (
    <>
      <FormGroup sx={{ margin: " 5% auto 0 auto", width: "50%" }}>
        <Typography variant="h4">Add User</Typography>
        <FormControl sx={{ marginTop: "20px" }}>
          <InputLabel>Name</InputLabel>
          <Input onChange={handleValueChange} name="name" />
        </FormControl>
        <FormControl sx={{ marginTop: "20px" }}>
          <InputLabel>userName</InputLabel>
          <Input onChange={handleValueChange} name="username" />
        </FormControl>
        <FormControl sx={{ marginTop: "20px" }}>
          <InputLabel>Email</InputLabel>
          <Input onChange={handleValueChange} name="email" />
        </FormControl>
        <TextField
          label="phone"
          sx={{ mt: "10px" }}
          onChange={handleValueChange}
          name="phone"
        >
          Phone
        </TextField>
        <FormControl sx={{ marginTop: "20px" }}>
          <Button variant="contained" onClick={handleAddUser}>
            {" "}
            Add User
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default AddUser;
