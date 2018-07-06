import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
// Import material ui Typography component.
import Typography from '@material-ui/core/Typography';
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
  formError: {
    color: 'red',
  },
});

class CreateGameForm extends React.Component {
  state = {
    gameDate: '',
    gameDateError: '',
    gameTime: '',
    gameTimeError: '',
    gameAgeGroup: '',
    gameAgeGroupError: '',
    gameGender: '',
    gameGenderError: '',
    gameLocation: '',
    gameLocationError: '',
    gameAddress: '',
    gameAddressError: '',
    gameCity: '',
    gameCityError: '',
    gameState: '',
    gameStateError: '',
    gameZip: '',
    gameZipError: '',
  };

  handleGameDateChange = (event) => {
    this.setState({
      gameDate: event.target.value,
      gameDateError: '',
    });
  };

  handleGameTimeChange = (event) => {
    this.setState({
      gameTime: event.target.value,
      gameTimeError: '',
    });
  };

  handleGameAgeGroupChange = (event) => {
    this.setState({
      gameAgeGroup: event.target.value,
      gameAgeGroupError: '',
    });
  };

  handleGameGenderChange = (event) => {
    this.setState({
      gameGender: event.target.value,
      gameGenderError: '',
    });
  };

  handleGameLocationChange = (event) => {
    this.setState({
      gameLocation: event.target.value,
      gameLocationError: '',
    });
  };

  handleGameAddressChange = (event) => {
    this.setState({
      gameAddress: event.target.value,
      gameAddressError: '',
    });
  };

  handleGameCityChange = (event) => {
    this.setState({
      gameCity: event.target.value,
      gameCityError: '',
    });
  };

  handleGameStateChange = (event) => {
    this.setState({
      gameState: event.target.value,
      gameStateError: '',
    });
  };

  handleGameZipChange = (event) => {
    this.setState({
      gameZip: event.target.value,
      gameZipError: '',
    });
  };

  handleGameSubmit = (event) => {
    event.preventDefault();

    if (this.state.gameDate === '') {
      this.setState({
        gameDateError: 'Date is required.',
      });
    }
    if (this.state.gameTime === '') {
      this.setState({
        gameTimeError: 'Time is required.',
      });
    }
    if (this.state.gameAgeGroup === '') {
      this.setState({
        gameAgeGroupError: 'Age group is required.',
      });
    }
    if (this.state.gameGender === '') {
      this.setState({
        gameGenderError: 'Gender is required.',
      });
    }
    if (this.state.gameLocation === '') {
      this.setState({
        gameLocationError: 'Location is required.',
      });
    }
    if (this.state.gameAddress === '') {
      this.setState({
        gameAddressError: 'Address is required.',
      });
    }
    if (this.state.gameCity === '') {
      this.setState({
        gameCityError: 'City is required.',
      });
    }
    if (this.state.gameState === '') {
      this.setState({
        gameStateError: 'State is required.',
      });
    } 
    if (this.state.gameZip === '') {
      this.setState({
        gameZipError: 'Zip is required.',
      });
    }
  }

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
          <Typography component="p" className={classes.formError}>{this.state.gameDateError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-time">Time</InputLabel>
          <Input id="game-time" value={this.state.gameTime} onChange={this.handleGameTimeChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameTimeError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-age-group">Age group</InputLabel>
          <Input id="game-age-group" value={this.state.gameAgeGroup} onChange={this.handleGameAgeGroupChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameAgeGroupError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-gender">Gender</InputLabel>
          <Input id="game-gender" value={this.state.gameGender} onChange={this.handleGameGenderChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameGenderError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-location">Location</InputLabel>
          <Input id="game-location" value={this.state.gameLocation} onChange={this.handleGameLocationChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameLocationError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-address">Address line 1</InputLabel>
          <Input id="game-address" value={this.state.gameAddress} onChange={this.handleGameAddressChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameAddressError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-city">City</InputLabel>
          <Input id="game-city" value={this.state.gameCity} onChange={this.handleGameCityChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameCityError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-state">State</InputLabel>
          <Input id="game-state" value={this.state.gameState} onChange={this.handleGameStateChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameStateError}</Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-zip">Zip</InputLabel>
          <Input id="game-zip" value={this.state.gameZip} onChange={this.handleGameZipChange} />
          <Typography component="p" className={classes.formError}>{this.state.gameZipError}</Typography>
        </FormControl>

        <Button variant="contained" className={classes.button} onClick={this.handleGameSubmit}>
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
