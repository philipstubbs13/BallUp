// Import React.
import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// Import material ui grid layout.
import Grid from '@material-ui/core/Grid';
// Import material ui styling.
import { withStyles } from '@material-ui/core/styles';
// Import List components.
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Import material ui Typography component.
import Typography from '@material-ui/core/Typography';
// Import material ui icons
import AddCircle from '@material-ui/icons/AddCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventAvailable from '@material-ui/icons/EventAvailable';
import HelpOutline from '@material-ui/icons/HelpOutline';
// Import Divider component to separate items in list.
import Divider from '@material-ui/core/Divider';
// Import Top Navigation Bar Component.
import TopAppBar from '../../components/AppBar';
// Import bottom navigation
import BottomNav from '../../components/BottomNav';

// Home page styling.
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: '#FA8320',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: '#000022',
    marginTop: 20,
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
  listItem: {
    backgroundColor: '#FA8320',
    padding: 20,
  },
  listDivider: {
    backgroundColor: '#000022',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#0000222',
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return [
      <div>
        <TopAppBar />
        ,
        <div className="main-content-section">
          <Grid item xs={12}>
            <Grid container className={classes.root} spacing={0} justify="center">
              <Typography variant="title" className={classes.title}>
                Get up and play!
              </Typography>
            </Grid>
            <Grid container spacing={0} justify="center">
              <Typography component="p" className={classes.instructionalText}>
                Click below to get started
              </Typography>
            </Grid>
            <Grid container spacing={0} justify="center">
              <div className={classes.demo}>
                <List>
                  <ListItem className={classes.listItem} component={Link} to="/newgame">
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Create a game"
                      className={classes.listText}
                    />
                  </ListItem>
                  <Divider className={classes.listDivider} />
                  <ListItem className={classes.listItem} component={Link} to="/upcominggames">
                    <ListItemIcon>
                      <EventAvailable />
                    </ListItemIcon>
                    <ListItemText
                      primary="See upcoming games"
                      className={classes.listText}
                    />
                  </ListItem>
                  <Divider className={classes.listDivider} />
                  <ListItem className={classes.listItem} component={Link} to="/nearby">
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Search games nearby"
                      className={classes.listText}
                    />
                  </ListItem>
                  <Divider className={classes.listDivider} />
                  <ListItem className={classes.listItem} component={Link} to="/help">
                    <ListItemIcon>
                      <HelpOutline />
                    </ListItemIcon>
                    <ListItemText
                      primary="Help"
                      className={classes.listText}
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
        ,
        <BottomNav />
      </div>,
    ];
  }
}

export default withStyles(styles)(Home);
