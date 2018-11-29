import React from "react";
import ReactDOM from "react-dom";
import { AppBar, Toolbar, Typography } from "material-ui/";

export default props => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Exercise
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
