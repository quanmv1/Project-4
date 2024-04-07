import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {

  const { userId } = useParams();
  const userPhotos = models.photoOfUserModel(userId);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  return (
    <Grid container spacing={2}>
      {userPhotos.map((photo) => (
        <Grid item xs={12} md={6} key={photo._id}>
          <Card>
            <CardMedia
              component="img"
              image={require(`../../images/${photo.file_name}`)}
              alt={photo.file_name}
            />
            <CardContent>
              <Typography variant="body2">Date: {formatDate(photo.date_time)}</Typography>
              <Typography variant="h6">Comments:</Typography>
              {photo.comments && photo.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography variant="body2">{formatDate(comment.date_time)}</Typography>
                  <Typography variant="body1">
                    <Link to={`/user/${comment.user._id}`}>
                      {`${comment.user.first_name} ${comment.user.last_name}`}
                    </Link>: {comment.comment}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default UserPhotos;