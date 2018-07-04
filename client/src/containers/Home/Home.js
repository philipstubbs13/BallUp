import React, { Component } from 'react';
import TopAppBar from '../../components/AppBar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Home extends Component {
  
  render() {
    const {classes} = this.props;

    return [
      <div>
        <TopAppBar />,
        <div className="main-content-section">
          <Grid item xs={12}>
          <Grid container className={classes.root} spacing={16} justify="center">
                
          </Grid>
          </Grid>
        </div>  
      </div>
    ];
  }
}

export default withStyles(styles)(Home);