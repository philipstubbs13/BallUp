import React from 'react';
// import third party linking library to link pages.
// Import third party linking library to add links to the different pages in hamburger menu.
import { Link } from 'react-router-dom';
// import property types
// import PropTypes from 'prop-types';
// import styling from material ui.
import { withStyles } from '@material-ui/core/styles';
// import ClickAwayListener component from material ui.
// Listen for click events that occur somewhere in the document, outside of the element itself.
// For instance, if you need to hide a menu when people click anywhere else on your page.
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Button from material ui
import IconButton from '@material-ui/core/IconButton';
// import Paper component from material ui
import Paper from '@material-ui/core/Paper';
// import material ui Menu component to be used with Hamburger menu.
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// Import material ui icons used in hamburger menu
import Home from '@material-ui/icons/Home';
import AddCircle from '@material-ui/icons/AddCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventAvailable from '@material-ui/icons/EventAvailable';
// import About Dialog
import AboutDialog from '../../containers/AboutDialog';

// styling for hamburger menu
const styles = ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    // right: 0,
    // left: 0,
    color: 'black',
  },
});

class HamburgerMenu extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleClick}>
          <MenuIcon />
        </IconButton>
        {open ? (
          <ClickAwayListener onClickAway={this.handleClickAway}>
            <Paper className={classes.paper}>
              <MenuItem onClick={this.handleClose} component={Link} to="/home"><Home /> Home</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/newgame"><AddCircle /> Create game</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/upcominggames"><EventAvailable /> Upcoming games</MenuItem>
              <MenuItem onClick={this.handleClose} component={Link} to="/nearby"><LocationOnIcon /> Search nearby</MenuItem>
              <AboutDialog />
            </Paper>
          </ClickAwayListener>
        ) : null}
      </div>
    );
  }
}

// Property types
// HamburgerMenu.propTypes = {
//   classes: PropTypes.func.isRequired,
// };

// export the hamburger menu component.
export default withStyles(styles)(HamburgerMenu);
