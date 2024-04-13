import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const user = useParams();
    return (
      <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {user.userId}. You can fetch the model for the user
        from models.photoOfUserModel(userId):
      </Typography>
    );
}

export default UserPhotos;
