console.log("The Bot is Starting");
console.log("GentooBot is initiated");
var Twit = require('twit'); //importing Twit API for bot.js use
var config = require('./config'); //importing config.js for bot.js use
var twitObject = new Twit(config);//creation of new Twit API object
var fs = require('fs'); //file system module allows you to read and write
//setting up user stream
var stream = twitObject.stream('user');
var my_screen_name = null;

stream.on('tweet', mentioned);

twitObject.get('account/verify_credentials', { skip_status: true }, function(err, data, response) {
 	my_screen_name = data.screen_name;
	console.log('Using account ' + my_screen_name);
});

function mentioned(eventMsg) {
	//var json = JSON.stringify(eventMsg,null,2); //write tweet metadata to JSON file (used for debugging)
	//fs.writeFile("tweet.json", json);
 	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	if (screenName !== my_screen_name) {
		tweetMentioned('.@' + screenName + ' thank you for tweeting me! If you wish to know more about Linux follow @CompSciDropout');
	}
}

function tweetMentioned(text) {
	var tweet = {
		status: text
	}

	twitObject.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
	  		console.log("Something went wrong!");
	  	} 
	  	else {
	    	console.log("It worked!");
	  	}
	}
}