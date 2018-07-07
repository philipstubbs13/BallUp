import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import HelpAccordion component
import HelpAccordion from './HelpAccordion';
// Import Top Navigation Bar Component.
import TopAppBar from '../../components/AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    fontSize: 40,
    color: 'white',
  },
  tagline: {
    marginTop: 5,
    color: 'white',
    fontSize: 24,
  },
};

class Help extends Component {
  render() {
    const { classes } = this.props;

    return [
      <TopAppBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={16} className={classes.root} justify="center">
            <Typography variant="h1">
                Help
            </Typography>
          </Grid>
        </Grid>
        ,
        <div className="main-content-section">
          <Grid item xs={12}>
            <Grid container className={classes.root} spacing={16} justify="center">
              <HelpAccordion />
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

Help.propTypes = {
  classes: PropTypes.isRequired,
};

export default withStyles(styles)(Help);
