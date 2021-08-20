import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import project1 from "../images/img/slack-clone.png";
import project2 from "../images/img/todo-list.png";
import project3 from "../images/img/income-react.png";
import project4 from "../images/img/accounting.jpg";

const useStyle = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 435,
    margin: "2rem auto",
  },
});

function Portfolio() {
  const classes = useStyle();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <NavBar />
        <Grid container justify="center" item xs={12} spacing={3}>
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Slack Clone
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Full-stack chat application from front to back with React,
                    Redux, Firebase, and Semantic UI React
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bveretelnik/react-slack-clone"
                >
                  Live Preview on GitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-slack-clone-527e8.firebaseapp.com/"
                >
                  Live Preview
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Cloud Drive React
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Application from front with React, Redux, Firebase, CSS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bveretelnik/Cloud-Drive_React"
                >
                  Live Preview on GitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-cloud-drive-442db.firebaseapp.com/"
                >
                  Live Preview
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Expense Tracker App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Complex Expense Budget Tracker. React, JS, Material UI React
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bveretelnik/speechly_expense_tracker/"
                >
                  Live Preview on GitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://speechly-transatcions-app.firebaseapp.com/"
                >
                  Live Preview
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 4 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Accounting web app
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Web app with React js, Next js and styled-component
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bveretelnik/Account-portfolio/"
                >
                  Live Preview on GitHub
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://account-portfolio.web.app/"
                >
                  Live Preview
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Portfolio;
