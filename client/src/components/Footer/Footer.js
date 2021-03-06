import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: '#000022',
    borderTop: '5px solid #FA8320',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: 'white',
  },
  footerContent: {
    color: 'white',
  },
};

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2" className={classes.footerContent}>
            BallUp
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Copyright &copy; 2018 Phil Stubbs
          </Typography>
          <Typography component="p" className={classes.footerContent}>
            You don't stop playing because you get old.
            <br />
            You get old because you stop playing.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
