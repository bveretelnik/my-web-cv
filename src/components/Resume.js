import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAligh: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016-2021
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Senior Accountant 📜
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              BPO Company 🦖
            </Typography>
            <Typography
              variant="sumtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Ведення фопів на спрощеній системі оподаткування, здача звітів,
              оплата податків, підготовка первинної документації. Консультування
              з питань оподаткування.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              HTML & CSS 🔨
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              Home 🏘
            </Typography>
            <Typography
              variant="sumtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Ознайомлення та вивчення бази HTML та CSS, також вивчав Bottstrap,
              препроцесор SASS. Застосовував отриманні знання на розробці
              простих Web додатків. Знаю як працюють Grid, Flex. Розуміюся на
              побудові простих анімацій.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              JavaScript & React JS 💻
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "tomato" }}
            >
              Home 🏘
            </Typography>
            <Typography
              variant="sumtitle1"
              aligh="center"
              style={{ color: "tan" }}
            >
              Вивчення JavaScrip: змінні, функції, типи данних, масиви, обєкти,
              обіцянки, області бачення, замикання і тд. Вмію працювати з новим
              стандартом ES6. Обраний фреймворк - React JS. У своїх проектах
              використовую Axios, Redux, Firebase, Router Cтилізую за домопогою
              Material UI та Semantic UI
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
