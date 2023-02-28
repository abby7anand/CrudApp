import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../service/api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    await getUserDetails();
  };

  return (
    <>
      <Table sx={{ margin: "50px auto", width: "90%" }}>
        <TableHead>
          <TableRow sx={{ background: "black" }}>
            <TableCell sx={{ color: "white", fontSize: "20px" }}>Id</TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }}>
              UserName
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }}>
              Email
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "20px" }}>
              Phone
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow sx={{ fontSize: "20px" }}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  sx={{ marginRight: "10px" }}
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllUsers;
