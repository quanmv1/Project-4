import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Vi Manh Quan");
  }, []);

  const pathParts = location.pathname.split("/");
  const currentView = pathParts[pathParts.length - 2];

  let title = "PhotoShare";

  if (currentView === "users") {
    const userId = pathParts[pathParts.length - 1];
    title = `User Details: ${userId}`;
  } else if (currentView === "photos") {
    const userId = pathParts[pathParts.length - 1];
    title = `Photos of ${userId}`;
  }
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          color="inherit"
          style={{ textDecoration: "none" }}
        >
          {title}
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Typography variant="h6" component="div">
          {userName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;