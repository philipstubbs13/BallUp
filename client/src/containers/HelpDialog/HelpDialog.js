// import React
import React from 'react';
// import property types
// import PropTypes from 'prop-types';
// import material ui styling
import { withStyles } from '@material-ui/core/styles';
// import material ui components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import HelpOutline from '@material-ui/icons/HelpOutline';

// material ui styling.
const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

// When user clicks Help from the hamburger menu, slide the help dialog upwards (from top to bottom)
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class HelpDialog extends React.Component {
  state = {
    open: false,
  };

  // When user clicks Help from the menu, set open to true.
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  // When user wants to close the Help dialog, set open to false.
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <MenuItem onClick={this.handleClickOpen}><HelpOutline /> Help</MenuItem>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Help
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

// HelpDialog.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(HelpDialog);
