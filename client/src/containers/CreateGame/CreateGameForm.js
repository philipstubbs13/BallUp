// import React
import React from 'react';
// import material ui property types
import PropTypes from 'prop-types';
// import material ui styling
import { withStyles } from '@material-ui/core/styles';
// import material ui form control component
import FormControl from '@material-ui/core/FormControl';
// import material ui paper component
import Paper from '@material-ui/core/Paper';
// import material ui menu component for drop down menus.
import MenuItem from '@material-ui/core/MenuItem';
// import material ui text field component.
import TextField from '@material-ui/core/TextField';
// Import material ui Typography component.
import Typography from '@material-ui/core/Typography';
// import css file.
import './CreateGame.css';
// import material ui button component.
import Button from '@material-ui/core/Button';

// styling of create game form
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
  dateTimePickers: {
    width: 250,
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
    gameInfo: '',
    gameInfoError: '',
  };

  // Keeping track of what user enters for date field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameDateChange = (event) => {
    this.setState({
      gameDate: event.target.value,
      gameDateError: '',
    });
  };

  // Keeping track of what user enters for time field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameTimeChange = (event) => {
    this.setState({
      gameTime: event.target.value,
      gameTimeError: '',
    });
  };

  // Keeping track of what user selects for age group field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameAgeGroupChange = (event) => {
    this.setState({
      gameAgeGroup: event.target.value,
      gameAgeGroupError: '',
    });
  };

  // Keeping track of what user selects for gender field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameGenderChange = (event) => {
    this.setState({
      gameGender: event.target.value,
      gameGenderError: '',
    });
  };

  // Keeping track of what user enters for location field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameLocationChange = (event) => {
    this.setState({
      gameLocation: event.target.value,
      gameLocationError: '',
    });
  };

  // Keeping track of what user enters for address field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameAddressChange = (event) => {
    this.setState({
      gameAddress: event.target.value,
      gameAddressError: '',
    });
  };

  // Keeping track of what user selects for city field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameCityChange = (event) => {
    this.setState({
      gameCity: event.target.value,
      gameCityError: '',
    });
  };

  // Keeping track of what user selects for state field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameStateChange = (event) => {
    this.setState({
      gameState: event.target.value,
      gameStateError: '',
    });
  };

  // Keeping track of what user enters for zip code field so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameZipChange = (event) => {
    this.setState({
      gameZip: event.target.value,
      gameZipError: '',
    });
  };

  // Keeping track of what user enters for additional information field
  // so that input can be grabbed later.
  // If form validation error is showing on the page,
  // remove the error when the user starts typing in the field.
  handleGameInfoChange = (event) => {
    this.setState({
      gameInfo: event.target.value,
      gameInfoError: '',
    });
  };

  // On click handler for when user trys to submit form to create a game.
  handleGameSubmit = (event) => {
    // Prevent the form from submitting itself.
    event.preventDefault();
    // ES6 Destructuring
    const {
      gameDate, gameTime, gameAgeGroup, gameGender,
      gameLocation, gameAddress, gameCity, gameState, gameZip, gameInfo,
    } = this.state;

    // if date field is blank or equal to mm/dd/yyyy, show validation error that date is required.
    if (gameDate === '' || gameDate === 'mm/dd/yyyy') {
      this.setState({
        gameDateError: 'Date is required.',
      });
    }
    // if time field is blank, show validation error that time is required.
    if (gameTime === '') {
      this.setState({
        gameTimeError: 'Time is required.',
      });
    }
    // if age group field is blank, show validation error that age group field is required.
    if (gameAgeGroup === '') {
      this.setState({
        gameAgeGroupError: 'Age group is required.',
      });
    }
    // if gender field is blank, show validation error that gender field is required.
    if (gameGender === '') {
      this.setState({
        gameGenderError: 'Gender is required.',
      });
    }
    // if location field is blank, show validation error that location is required.
    if (gameLocation === '') {
      this.setState({
        gameLocationError: 'Location is required.',
      });
    }
    // If address field is blank, show validation error that address is required.
    if (gameAddress === '') {
      this.setState({
        gameAddressError: 'Address is required.',
      });
    }
    // if city field is blank, show validation error that city is required.
    if (gameCity === '') {
      this.setState({
        gameCityError: 'City is required.',
      });
    }
    // if state field is blank, show validation error that state is required.
    if (gameState === '') {
      this.setState({
        gameStateError: 'State is required.',
      });
    }
    // if zip code field is blank, show validation error that zip code field is required.
    if (gameZip === '') {
      this.setState({
        gameZipError: 'Zip code is required.',
      });
    }
    // if the additional info field is blank,
    // show validation error that additional info field is required.
    if (gameInfo === '') {
      this.setState({
        gameInfoError: 'Enter any additional information about the game or type N/A in this field.',
      });
    }
  }

  // on click handler to clear values from all fields when user clicks clear fields button.
  handleClearFields = (event) => {
    // prevent form from submitting itself.
    event.preventDefault();
    // Set form fields and form field errors back to their default states (empty string).
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
      gameInfo: '',
      gameInfoError: '',
    });
  }

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const {
      gameDateError, gameDate, gameTimeError, gameTime,
      gameAgeGroupError, gameAgeGroup, gameGenderError,
      gameGender, gameLocationError, gameLocation,
      gameAddressError, gameAddress, gameCityError,
      gameCity, gameStateError, gameState,
      gameZipError, gameZip, gameInfo,
      gameInfoError,
    } = this.state;

    return (
      <Paper className={classes.root}>
        <Typography component="p" className="instructionalText">
            Fill out the form to set up a game near you
        </Typography>
        <FormControl className={classes.formControl}>
          <TextField
            id="game-date"
            label="Date"
            type="date"
            defaultValue="2018-07-04"
            value={gameDate}
            onChange={this.handleGameDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.dateTimePickers}
          />
          <Typography component="p" className={classes.formError}>
            {gameDateError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="game-time"
            label="Time"
            type="time"
            defaultValue="07:30"
            className={classes.dateTimePickers}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={gameTime}
            onChange={this.handleGameTimeChange}
          />
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
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
            }}
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
          <TextField
            label="Location (for example, Vista View Park)"
            id="game-location"
            value={gameLocation}
            onChange={this.handleGameLocationChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography component="p" className={classes.formError}>
            {gameLocationError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
            id="game-address"
            value={gameAddress}
            onChange={this.handleGameAddressChange}
            label="Address line 1"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography component="p" className={classes.formError}>
            {gameAddressError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="game-city"
            value={gameCity}
            onChange={this.handleGameCityChange}
            className={classes.cityField}
            label="City"
            InputLabelProps={{
              shrink: true,
            }}
          />
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
            InputLabelProps={{
              shrink: true,
            }}
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
          <TextField
            id="game-zip"
            value={gameZip}
            onChange={this.handleGameZipChange}
            className={classes.textField}
            label="Zip code"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography component="p" className={classes.formError}>
            {gameZipError}
          </Typography>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <TextField
            id="game-info"
            value={gameInfo}
            onChange={this.handleGameInfoChange}
            label="Additional information"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography component="p" className={classes.formError}>
            {gameInfoError}
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

// export CreateGameForm component and style.
export default withStyles(styles)(CreateGameForm);
