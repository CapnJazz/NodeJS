console.log("The Bot is Starting");

var Twit = require('twit'); //importing Twit API for bot.js use
var config = require('./config'); //importing config.js for bot.js use
var twitObject = new Twit(config)//creation of new Twit API object
var fs = require('fs')
var exec = require('child_process').exec;

/*
tweetFunc();

function tweetFunc() {
	var term = 'processing-java --sketch=`pwd`/imageGen -- run';
	exec(term, processing);

	function processing() {	
		var filename = 'imageGen/output.png';
		var params = {
			encoding: 'base64'
		}	
		var b64 = fs.readFileSync(filename, params);
		twitObject.post('media/upload', { media_data: b64}, uploaded);
		function uploaded(err, data, response) {
			 var id = data.media_id_string;
			 var tweet = {
			 	status: 'image created using #processing-java && $NodeJS',
			 	media_ids: [id]
			 }
			 twitObject.post('statuses/update', tweet, tweeted );

			 function tweeted(err, data, response) { // confirmation that the tweet has been posted viewed in Node (callback)
				if(err) {
					console.log("Something went wrong");
				}
				else {
					console.log("It Worked!");
				}
			}
		}			
	}
}
//GET TWEETS (not used as of now)
/*var params = { 
	q: 'rainbow',
	count:2
};

twitObject.get('search/tweets', params, gotData); // CALLING twitObject with already defined params

function gotData(err, data, response) { // Call back
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) { //using pre test selecting out only the text queried not the irrelevent info e.g location or retweet count
		console.log(tweets[i].text)
	}
} */

/*
//setting up user stream (continuous event)
var stream = twitObject.stream('user');
//anyone who follows me auto respond
stream.on('follow', followed);

function followed(eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetFunc('@' + screenName + ' cheers for the follow mate');
}
*/


/*
//setInterval(tweetFunc, 1000*20);
//tweetFunc(); // call tweet function

//POST TWEETS
function tweetFunc(text) { //everytime i call this send a tweet

	//var rand = Math.floor(Math.random()*100); //generate a random num if needed

	var tweet = {
		status: text //status to be tweeted
	}

	twitObject.post('statuses/update',tweet,tweeted); //calling twitObject with already defined params

	function tweeted(err, data, response) { // confirmation that the tweet has been posted viewed in Node (callback)
		if(err) {
			console.log("Something went wrong");
		}
		else {
			console.log("It Worked!");
		}
		console.log(data)
	}
}


function tweetFunc(image) { //everytime i call this send a tweet

	//var rand = Math.floor(Math.random()*100); //generate a random num if needed

	var tweet = {
		status: image //status to be tweeted
	}

	twitObject.post('statuses/update',tweet,tweeted); //calling twitObject with already defined params

	function tweeted(err, data, response) { // confirmation that the tweet has been posted viewed in Node (callback)
		if(err) {
			console.log("Something went wrong");
		}
		else {
			console.log("It Worked!");
		}
		console.log(data)
	}
}

*/