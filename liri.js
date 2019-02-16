
require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var axios = require("axios");
/////



// OMDB ALIEN Representative Example


///

///THE MEAT - where the sausage i made
// Get the spotify stuff
var spotify = new Spotify(keys.spotify);

// (referenced in class activity 15-BankJS):

// store user input (or action requested) in variable
var action = process.argv[2];

// use switch case to direct which function will run with command line code
switch (action) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        doWhat();
        break;

    default:
        console.log("Please check your command!");
}

// =====================FUNCTIONS=============================
// (adapted from in class activities)

function concert() {
    var performer = process.argv[3];

    axios.get("https://rest.bandsintown.com/artists/" + performer + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log(response.data);

        }
    }
function spotify() {
                var performer = process.argv[4];

                axios.get()
                    .then(function (response) {
                        console.log(response.data);
                    }
                }

function movie() {
                            var show = process.argv[5];

                            axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
                                .then(function (response) {
                                    console.log(response.data);
                                }
    }
                // loop through response.data.legnth to display:
                // 1. name of venue
                // console.log("Venue " + response.data.venue.nameorsomething);
                // 2. venue location
                // console.log("Venue Location: " + response.data.venue.locationorsomething);
                // 3. date of the event 
                // (use moment to format at MM/DD/YYYY)
                // store response.data.dateorwhater in variable
                // var date = moment(response.data.dateorwhatever).format("MM/DD/YYYY");
                // console.log("Date: " + date);
            })
}