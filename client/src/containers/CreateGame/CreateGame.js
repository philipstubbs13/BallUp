// Import React.
import React, { Component } from 'react';
// Import material ui grid layout.
import Grid from '@material-ui/core/Grid';
// Import material ui styling.
import { withStyles } from '@material-ui/core/styles';
// Import material ui Typography component.
import Typography from '@material-ui/core/Typography';
// Import bottom navigation
import BottomNav from '../../components/BottomNav';
// Import Top Navigation Bar Component.
import TopAppBar from '../../components/AppBar';
import CreateGameForm from './CreateGameForm';

// Home page styling.
const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  instructionalText: {
    color: 'white',
    fontSize: 24,
  },
});

class CreateGame extends Component {
  render() {
    const { classes } = this.props;

    return [
      <div>
        <TopAppBar />
          <Grid container className={classes.root} spacing={16} justify="center">
            <Grid item xs={12}>
              <Typography variant="title" className={classes.title}>
                Ready to play?
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.root} spacing={16} justify="center">
            <Grid item x={12}>
              <Typography component="p" className={classes.instructionalText}>
                Fill out the form below to set up a game near you.
              </Typography>
            </Grid>
          </Grid>
          <div className="main-content-section">
            <Grid item xs={12}>
            <Grid container className={classes.root} spacing={16} justify="center">
              <CreateGameForm />
            </Grid>
          </Grid>
        </div>
        <BottomNav />
      </div>,
    ];
  }
}

export default withStyles(styles)(CreateGame);
