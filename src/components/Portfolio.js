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
import project4 from "../images/img/react-redux.jpg";

const useStyle = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto",
  },
});

function Portfolio() {
  const classes = useStyle();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <NavBar />
        <Grid container justify="center">
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
                    Redux, Firebase 5, and Semantic UI React
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/bveretelnik/react-slack-clone"
                >
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
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
                    Todo List React
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
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
                    Income Tracker React
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
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
                    React & Redux Project
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
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
