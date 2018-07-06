import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
// Import material ui Typography component.
import Typography from '@material-ui/core/Typography';
// Import material ui grid layout.
import Grid from '@material-ui/core/Grid';
// import css
import './CreateGame.css';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '50%',
    padding: 30,
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: '#FA8320',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  instructionalText: {
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000022',
    color: 'white',
  },
});

class CreateGameForm extends React.Component {
  state = {
    gameDate: '',
    gameTime: '',
    gameAgeGroup: '',
    gameGender: '',
    gameLocation: '',
    gameAddress: '',
    gameCity: '',
    gameState: '',
    gameZip: '',
  };

  handleGameDateChange = (event) => {
    this.setState({ gameDate: event.target.value });
  };

  handleGameTimeChange = (event) => {
    this.setState({ gameTime: event.target.value });
  };

  handleGameAgeGroupChange = (event) => {
    this.setState({ gameAgeGroup: event.target.value });
  };

  handleGameGenderChange = (event) => {
    this.setState({ gameGender: event.target.value });
  };

  handleGameLocationChange = (event) => {
    this.setState({ gameLocation: event.target.value });
  };

  handleGameAddressChange = (event) => {
    this.setState({ gameAddress: event.target.value });
  };

  handleGameCityChange = (event) => {
    this.setState({ gameCity: event.target.value });
  };

  handleGameStateChange = (event) => {
    this.setState({ gameState: event.target.value });
  };

  handleGameZipChange = (event) => {
    this.setState({ gameZip: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography component="p" className="instructionalText">
            Fill out the form to set up a game near you
        </Typography>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-date">Date</InputLabel>
          <Input id="game-date" value={this.state.gameDate} onChange={this.handleGameDateChange} />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-time">Time</InputLabel>
          <Input id="game-time" value={this.state.gameTime} onChange={this.handleGameTimeChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-age-group">Age group</InputLabel>
          <Input id="game-age-group" value={this.state.gameAgeGroup} onChange={this.handleGameAgeGroupChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-gender">Gender</InputLabel>
          <Input id="game-gender" value={this.state.gameGender} onChange={this.handleGameGenderChange} />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="game-location">Location</InputLabel>
            <Input id="game-location" value={this.state.gameLocation} onChange={this.handleGameLocationChange} />
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-address">Address line 1</InputLabel>
          <Input id="game-address" value={this.state.gameAddress} onChange={this.handleGameAddressChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-city">City</InputLabel>
          <Input id="game-city" value={this.state.gameCity} onChange={this.handleGameCityChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-state">State</InputLabel>
          <Input id="game-state" value={this.state.gameState} onChange={this.handleGameStateChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-zip">Zip</InputLabel>
          <Input id="game-zip" value={this.state.gameZip} onChange={this.handleGameZipChange} />
        </FormControl>

        <Button variant="contained" className={classes.button}>
          Create game
        </Button>
      </Paper>
    );
  }
}

CreateGameForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateGameForm);
