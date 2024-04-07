import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  if (!user) return <p>User not found</p>;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.first_name} {user.last_name}</Typography>
        <Typography variant="body2">Location: {user.location}</Typography>
        <Typography variant="body2">Description: {user.description}</Typography>
        <Typography variant="body2">Occupation: {user.occupation}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/photos/${userId}`}>
          Photos
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserDetail;