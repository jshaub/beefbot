const Discord = require("discord.js");
const bot = new Discord.Client();

// Log bot into server
bot.login("NDAxNjE3MTA3MDcyMDU3MzQ1.DTsytw.oAixuGMjdArrLgoIBO-fqiEzoqk");


bot.on("ready", () => { console.log("BeefBot is running..."); } );

bot.on("message", (message) => {
		if(message.content.startsWith("!ping")) {
			console.log("Received !ping");
			message.channel.send("pong!");
		}
		} );
