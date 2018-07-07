// import React
import React from 'react';
// import third party linking library to link pages.
import { Link } from 'react-router-dom';
// import property types
import PropTypes from 'prop-types';
// import styling from material ui library
import { withStyles } from '@material-ui/core/styles';
// import material ui AppBar component
import AppBar from '@material-ui/core/AppBar';
// import material ui Toolbar component
import Toolbar from '@material-ui/core/Toolbar';
// import material ui Typography component
import Typography from '@material-ui/core/Typography';
// import material ui Button component
import Button from '@material-ui/core/Button';
// import hamburger menu component
import HamburgerMenu from './HamburgerMenu';
// import css for app bar
import './AppBar.css';

// styling for app bar component.
const styles = {
  root: {
    flexGrow: 1,
    borderBottom: '3px solid #FA8320',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  welcomeUser: {
    textAlign: 'center',
    marginRight: 30,
  },
};

function TopAppBar(props) {
  // ES6 destructuring
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <HamburgerMenu />
          <Typography variant="title" color="inherit" className={classes.flex} component={Link} to="/home">
            BallUp
          </Typography>
          <Typography variant="title" color="inherit" className={classes.welcomeUser}>
            Welcome, Jax
          </Typography>
          <Button color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopAppBar.propTypes = {
  classes: PropTypes.isRequired,
};

// Export the TopAppBar component from this file.
export default withStyles(styles)(TopAppBar);
