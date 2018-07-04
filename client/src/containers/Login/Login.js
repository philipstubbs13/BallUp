import React, { Component } from 'react';
// import Login form component
import LoginForm from './LoginForm';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Import Welcome Banner component.
import WelcomeBanner from './WelcomeBanner';

const styles = {
    root: {
        flexGrow: 1,
    },
    headline: {
        fontSize: 40,
        color: 'white'
    },
    tagline: {
        marginTop: 5,
        color: 'white',
        fontSize: 24,
    },
};

class Login extends Component {
 
  render() {
    const { classes } = this.props;

    return [
      <WelcomeBanner />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
            <Grid container spacing={16} className={classes.root} justify="center">
            <Typography variant="h1">
                BallUp
            </Typography>
            </Grid>
        </Grid>,
        <Grid item xs={12} className={classes.headline}>
            <Grid container spacing={16} className={classes.root} justify="center">
            <Typography component="p" className={classes.tagline}>
                You don't stop playing because you get old.
            </Typography>
            </Grid>
            <Grid container spacing={16} className={classes.root} justify="center">
                <Typography component="p" className={classes.tagline}>
                    You get old because you stop playing.
                </Typography>
            </Grid>
        </Grid>
        <div className="main-content-section">
            <Grid item xs={12}>
            <Grid container className={classes.root} spacing={16} justify="center">
                <LoginForm />    
            </Grid>
            </Grid>
        </div>
      </div>
    ];
  }
}

export default withStyles(styles)(Login);