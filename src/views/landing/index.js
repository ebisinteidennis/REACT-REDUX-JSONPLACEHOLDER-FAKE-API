import React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import album from "../../static/album.svg";
import comment from "../../static/comment.svg";
import photo from "../../static/photo.svg";
import post from "../../static/post.svg";
import todo from "../../static/todo.svg";
import user from "../../static/user.svg";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },

  App: {
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  AppLogo: {
    height: "20vmin",
    pointerEvents: "none",
  },
  AppHeader: {
    fontFamily: "FiraCode",
    fontSize: "calc(16px + 3vmin)",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  AppLink: {
    color: "#61dafb",
  },
  card: {
    padding: theme.spacing(2),
  },
}));
const Fixes = [
  { title: "Albums", src: album, text: "Check Memories made" },
  { title: "Comments", src: comment, text: "What do you think?" },
  { title: "Photos", src: photo, text: "Let's take more" },
  { title: "Posts", src: post, text: "Writing clears the mind" },
  { title: "Todos", src: todo, text: "Check your checklist" },
  { title: "Users", src: user, text: "Who's on the platform" },
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.App}>
        <Typography
          variant={"h3"}
          component={"h1"}
          className={classes.AppHeader}
        >
          JSON Placeholder: React Redux
        </Typography>
        <Grid container justify={"center"} alignItems={"center"} spacing={4}>
          {Fixes.map((item) => (
            <Grid
              item
              xs={11}
              md={4}
              component={RouterLink}
              to={`/${item.title.toLowerCase()}`}
              key={item.title}
              className={classes.AppLink}
            >
              <Paper elevation={10} className={classes.card}>
                <Typography variant={"h4"} component={"h1"}>
                  {item.title}
                </Typography>
                <img src={item.src} className={classes.AppLogo} alt="logo" />
                <Typography variant={"subtitle1"} component={"p"}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
