import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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
  menu: {
    width: 150,
  },
  textField: {
    width: 150,
  },
  cityField: {
    maxWidth: 175,
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
          <TextField
            select
            id="game-age-group"
            label="Age group"
            className={classes.textField}
            value={gameAgeGroup}
            onChange={this.handleGameAgeGroupChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            <MenuItem value="" />
            <MenuItem value="Any age">Any age</MenuItem>
            <MenuItem value="9 and under">9 and under</MenuItem>
            <MenuItem value="10 - 14">10 - 14</MenuItem>
            <MenuItem value="15 - 19">15 - 19</MenuItem>
            <MenuItem value="20 - 29">20 - 29</MenuItem>
            <MenuItem value="30 - 39">30 - 39</MenuItem>
            <MenuItem value="40 - 49">40 - 49</MenuItem>
            <MenuItem value="50 - 59">50 - 59</MenuItem>
            <MenuItem value="60 - 69">60 - 69</MenuItem>
            <MenuItem value="70 and older">70 and older</MenuItem>
          </TextField>
          <Typography component="p" className={classes.formError}>
            {gameAgeGroupError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            select
            id="game-gender"
            label="Gender"
            className={classes.textField}
            value={gameGender}
            onChange={this.handleGameGenderChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            <MenuItem value="" />
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Co-ed">Co-ed</MenuItem>
          </TextField>
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
          <Input id="game-city" value={gameCity} onChange={this.handleGameCityChange} className={classes.cityField} />
          <Typography component="p" className={classes.formError}>
            {gameCityError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            select
            label="State"
            className={classes.textField}
            value={gameState}
            onChange={this.handleGameStateChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
          >
            <MenuItem value="" />
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucy</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississppi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virginia</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
          </TextField>
          <Typography component="p" className={classes.formError}>
            {gameStateError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="game-zip">Zip code</InputLabel>
          <Input id="game-zip" value={gameZip} onChange={this.handleGameZipChange} className={classes.textField} />
          <Typography component="p" className={classes.formError}>
            {gameZipError}
          </Typography>
        </FormControl>
        <div>
          <Button variant="contained" className={classes.button} onClick={this.handleGameSubmit}>
            Create game
          </Button>
          <Button variant="contained" className={classes.clearButton} onClick={this.handleClearFields}>
            Clear fields
          </Button>
        </div>
      </Paper>
    );
  }
}

CreateGameForm.propTypes = {
  classes: PropTypes.isRequired,
};

export default withStyles(styles)(CreateGameForm);
