import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "2rem",
      },
    },
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/bohdan-veretelnik-15a834147/"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        href="https://github.com/bveretelnik"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<FacebookIcon />}
        href="https://www.facebook.com/bogdan.veretelnik"
      />
    </BottomNavigation>
  );
}

export default Footer;
