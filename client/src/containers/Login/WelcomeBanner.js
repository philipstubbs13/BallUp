import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import css for welcome banner
import './WelcomeBanner.css';

const styles = {
  root: {
    flexGrow: 1,
    borderBottom: '3px solid #FA8320',
    textAlign: 'center',
  },
  flex: {
    flex: 1,
    fontSize: 25,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function WelcomeBanner(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Welcome
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

WelcomeBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeBanner);
