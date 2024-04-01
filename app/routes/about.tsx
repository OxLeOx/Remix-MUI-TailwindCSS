import * as React from "react";
import { Link } from "@remix-run/react";
import { Button, Typography } from "@mui/material";

export default function About() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go to the main page
      </Button>
    </React.Fragment>
  );
}
