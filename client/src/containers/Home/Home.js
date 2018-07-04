import React, { Component } from 'react';
import TopAppBar from '../../components/AppBar';
import { startOfSecond } from 'date-fns';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
// Import bottom navigation
import BottomNav from '../../components/BottomNav';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AddCircle from '@material-ui/icons/AddCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventAvailable from '@material-ui/icons/EventAvailable';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
      backgroundColor: '#FA8320',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#000022',
      marginTop: 20,
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
      textAlign: 'center',
      fontSize: 24,
    },
    listItem:{
      backgroundColor: '#FA8320',
      padding: 20,
    },
    listDivider: {
      backgroundColor: '#000022',
    },
});

class Home extends Component {

  state = {
    dense: false,
    secondary: false,
  };
  
  render() {
    const {classes} = this.props;
    const { dense, secondary } = this.state;

    return [
      <div>
        <TopAppBar />,
        <div className="main-content-section">
          <Grid item xs={12}>
            <Grid container className={classes.root} spacing={16} justify="center">
                <Typography variant="title" className={classes.title}>
                  Get up and play!
                </Typography>
            </Grid>
            <Grid container spacing={16} className={classes.instructionText} justify="center">
                <Typography component="p">
                  Click below to get started
                </Typography>
            </Grid>
            <Grid container spacing={16} justify="center">
              <div className={classes.demo}>
                <List dense={dense}>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Create a game"
                      className={classes.listText}
                    />
                  </ListItem>
                  <Divider className={classes.listDivider}/>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <EventAvailable />
                    </ListItemIcon>
                    <ListItemText
                      primary="See upcoming games"
                      className={classes.listText}
                    />
                  </ListItem>
                  <Divider className={classes.listDivider}/>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Search games nearby"
                      className={classes.listText}
                    />
                  </ListItem>
                  <Divider className={classes.listDivider}/>
                  <ListItem className={classes.listItem}>
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
        </div>,
        <BottomNav />  
      </div>
    ];
  }
}

export default withStyles(styles)(Home);