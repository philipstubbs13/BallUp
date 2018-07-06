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
  clearButton: {
    marginTop: 20,
    marginLeft: 20,
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
    const {
      gameDate, gameTime, gameAgeGroup, gameGender,
      gameLocation, gameAddress, gameCity, gameState, gameZip,
    } = this.state;

    if (gameDate === '') {
      this.setState({
        gameDateError: 'Date is required.',
      });
    }
    if (gameTime === '') {
      this.setState({
        gameTimeError: 'Time is required.',
      });
    }
    if (gameAgeGroup === '') {
      this.setState({
        gameAgeGroupError: 'Age group is required.',
      });
    }
    if (gameGender === '') {
      this.setState({
        gameGenderError: 'Gender is required.',
      });
    }
    if (gameLocation === '') {
      this.setState({
        gameLocationError: 'Location is required.',
      });
    }
    if (gameAddress === '') {
      this.setState({
        gameAddressError: 'Address is required.',
      });
    }
    if (gameCity === '') {
      this.setState({
        gameCityError: 'City is required.',
      });
    }
    if (gameState === '') {
      this.setState({
        gameStateError: 'State is required.',
      });
    }
    if (gameZip === '') {
      this.setState({
        gameZipError: 'Zip is required.',
      });
    }
  }

  handleClearFields = (event) => {
    event.preventDefault();
    this.setState({
      gameDate: '',
      gameTime: '',
      gameAgeGroup: '',
      gameGender: '',
      gameLocation: '',
      gameAddress: '',
      gameCity: '',
      gameState: '',
      gameZip: '',
    });
  }

  render() {
    const { classes } = this.props;
    const {
      gameDateError, gameDate, gameTimeError, gameTime,
      gameAgeGroupError, gameAgeGroup, gameGenderError,
      gameGender, gameLocationError, gameLocation,
      gameAddressError, gameAddress, gameCityError,
      gameCity, gameStateError, gameState,
      gameZipError, gameZip,
    } = this.state;

    return (
      <Paper className={classes.root}>
        <Typography component="p" className="instructionalText">
            Fill out the form to set up a game near you
        </Typography>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-date">Date</InputLabel>
          <Input id="game-date" value={gameDate} onChange={this.handleGameDateChange} />
          <Typography component="p" className={classes.formError}>
            {gameDateError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-time">Time</InputLabel>
          <Input id="game-time" value={gameTime} onChange={this.handleGameTimeChange} />
          <Typography component="p" className={classes.formError}>
            {gameTimeError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-age-group">Age group</InputLabel>
          <Input id="game-age-group" value={gameAgeGroup} onChange={this.handleGameAgeGroupChange} />
          <Typography component="p" className={classes.formError}>
            {gameAgeGroupError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-gender">Gender</InputLabel>
          <Input id="game-gender" value={gameGender} onChange={this.handleGameGenderChange} />
          <Typography component="p" className={classes.formError}>
            {gameGenderError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-location">Location</InputLabel>
          <Input id="game-location" value={gameLocation} onChange={this.handleGameLocationChange} />
          <Typography component="p" className={classes.formError}>
            {gameLocationError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="game-address">Address line 1</InputLabel>
          <Input id="game-address" value={gameAddress} onChange={this.handleGameAddressChange} />
          <Typography component="p" className={classes.formError}>
            {gameAddressError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-city">City</InputLabel>
          <Input id="game-city" value={gameCity} onChange={this.handleGameCityChange} />
          <Typography component="p" className={classes.formError}>
            {gameCityError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-state">State</InputLabel>
          <Input id="game-state" value={gameState} onChange={this.handleGameStateChange} />
          <Typography component="p" className={classes.formError}>
            {gameStateError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-zip">Zip</InputLabel>
          <Input id="game-zip" value={gameZip} onChange={this.handleGameZipChange} />
          <Typography component="p" className={classes.formError}>
            {gameZipError}
          </Typography>
        </FormControl>

        <Button variant="contained" className={classes.button} onClick={this.handleGameSubmit}>
          Create game
        </Button>

        <Button variant="contained" className={classes.clearButton} onClick={this.handleClearFields}>
          Clear fields
        </Button>
      </Paper>
    );
  }
}

CreateGameForm.propTypes = {
  classes: PropTypes.isRequired,
};

export default withStyles(styles)(CreateGameForm);
