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
        <div className="main-content-section">
          <Grid item xs={12}>
            <Grid container className={classes.root} spacing={16} justify="center">
              <Typography variant="title" className={classes.title}>
                Get up and play!
              </Typography>
            </Grid>
            <Grid container spacing={16} justify="center">
              <Typography component="p" className={classes.instructionalText}>
                Click below to get started
              </Typography>
            </Grid>
          </Grid>
        </div>
        <BottomNav />
      </div>,
    ];
  }
}

export default withStyles(styles)(CreateGame);
