import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel();
  return (
    <div>
      <Typography variant="h6">Users</Typography>
      <List component="nav">
        {users.map((user) => (
          <ListItem key={user._id}>
            <Link to={`/users/${user._id}`}>
              <ListItemText primary={user.first_name + " " + user.last_name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UserList;