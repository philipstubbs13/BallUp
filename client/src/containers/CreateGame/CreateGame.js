// Import React.
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
  headline: {
    fontSize: 40,
    color: 'white',
  },
});

class CreateGame extends Component {
  render() {
    const { classes } = this.props;

    return [
      <div>
        <TopAppBar />
        <div style={{ paddingTop: 100 }}>
          <Grid item xs={12} className={classes.headline}>
            <Grid container className={classes.root} spacing={0} justify="center">
              <Typography variant="h1">
                  Ready to play?
              </Typography>
            </Grid>
          </Grid>
          <div className="main-content-section">
            <Grid item xs={12}>
              <Grid container className={classes.root} spacing={0} justify="center">
                <CreateGameForm />
              </Grid>
            </Grid>
          </div>
        </div>
        <BottomNav />
      </div>,
    ];
  }
}

// CreateGame.propTypes = {
//   classes: PropTypes.func.isRequired,
// };

export default withStyles(styles)(CreateGame);
