//info for spotify
require("dotenv").config();
// import the node-spotify-api NPM package
var Spotify = require("node-spotify-api");
//import the API keys
var keys = require("./keys.js");
//initializing the spotify API client with keys
var spotify = new Spotify(keys.spotify);
//info for request
var request = require("request");
//info for moment
var moment = require("moment");
//info for fs
var fs = require("fs");
//it takes command
var command = process.argv[2];


