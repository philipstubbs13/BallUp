// Import React
import React from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// Import property types
// import PropTypes from 'prop-types';
// Import style from material ui.
import { withStyles } from '@material-ui/core/styles';
// Import material ui bottom navigation components.
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// Import material ui icons used on bottom navigation bar.
import Home from '@material-ui/icons/Home';
import AddCircle from '@material-ui/icons/AddCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventAvailable from '@material-ui/icons/EventAvailable';
// import Hidden component from material ui to hide bottom navigation on xs screens and down.
import Hidden from '@material-ui/core/Hidden';

// Define styling for bottom navigation.
const styles = {
  root: {
    backgroundColor: '#000022',
    borderTop: '3px solid #FA8320',
  },
  navIcon: {
    color: 'white',
  },
};

class BottomNav extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    // ES6 destructuring.
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Hidden xsDown>
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} justify="center">
          <BottomNavigationAction label="Home" value="home" icon={<Home />} className={classes.navIcon} component={Link} to="/home" />
          <BottomNavigationAction label="Create game" value="create_game" icon={<AddCircle />} className={classes.navIcon} component={Link} to="/newgame" />
          <BottomNavigationAction label="Upcoming games" value="games" icon={<EventAvailable />} className={classes.navIcon} component={Link} to="/upcominggames" />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} className={classes.navIcon} component={Link} to="/nearby" />
        </BottomNavigation>
      </Hidden>
    );
  }
}

// property types
// BottomNav.propTypes = {
//   classes: PropTypes.isRequired,
// };

// export bottom navigation component.
export default withStyles(styles)(BottomNav);
