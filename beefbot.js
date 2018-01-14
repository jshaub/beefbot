/* --------------------- *
 * --------------------- *
 * VARIABLE DECLARATIONS *
 * --------------------- *
 * --------------------- */

const Discord = require("discord.js");
const bot = new Discord.Client();

baseCoordX = null;
baseCoordY = null;

/* ------------ *
 * ------------ *
 * MAIN PROGRAM *
 * ------------ *
 * ------------ */

startBot("NDAxNjE3MTA3MDcyMDU3MzQ1.DTsytw.oAixuGMjdArrLgoIBO-fqiEzoqk");

bot.on("ready", () => 
	{
		console.log("BeefBot is running...");
	}
);

bot.on("message", (message) => 
	{
		if(message.content === ("!base")) {
			getBase(message);
		} else if(message.content === ("!setBase")) {
			setBase(message);
		}
	}	
);

/* --------------------- *
 * --------------------- *
 * FUNCTION DECLARATIONS *
 * --------------------- *
 * --------------------- */

// Starts the bot
function startBot(token) {
	bot.login(token);
}

// Set base coordinates to given x and y
function setBase(x, y) {
	console.log("Setting new base coords");
	baseCoordX = x;
	baseCoordY = y;
	message.channel.send("Base coordinates updated");
}

// Prints out base coordinates, or an error if they've not yet been set
function getBase(message) {
	if(baseCoordX == null) {
		message.reply(" base coordinates are not set. Please contact an admin to set them");
	} else {
		message.reply(", 7D2D base is at X: " + baseCoordX + ", Y: " + baseCoordY);
	}
}
