
//I'm only here because the directions told me too
require("dotenv").config();

///Makin' some Variable for future stuff
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");


///THE MEAT - where the sausage is made

// using switches to direct specific actions from node, originally based on 10.1 calculator logic

var action = process.argv[2];
switch (action) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        spotifycall();
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

// Making some functions to make the axios calls / spotify queries / absurd read function for the Fs file, what an absurd ask
//

function concert() {
    var performer = process.argv[3];

    axios.get("https://rest.bandsintown.com/artists/" + performer + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log(response.data);

        })
}

function spotifycall() {
    var performer = process.argv[3];

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: performer }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].album);
        //   console.log("album:" + data.tracks.items[0].album.name)
    });
}

function movie() {
    var show = process.argv[3];

    axios.get("http://www.omdbapi.com/?t=" + show + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log(response.data);
        })
}


function doWhat() {
    fs.readFile("random.txt", "utf-8", function (error, data) {
        console.log(data);

    })
}
