// require the discord.js module
const Discord = require('discord.js');
const auth = require('./auth.json');

//rainbow text module
const chalkAnimation = require('chalk-animation');
console.log('Connecting...')

//Dank Memes Webscraper
var request = require('request');       

//Webscrape Framework
var cheerio = require('cheerio');

//URL
const ReditURL = 'https://www.reddit.com/r/';

//File Reader/Writer
var fs = require('fs');

// create a new Discord client
const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands found to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
});

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {	
	//Clear the console
	//console.log('\033[2J');
	//console.log('\033[H');

	//On connection display this bot's name
	console.log(`Logged in as ${client.user.tag}!`);

	//Start a connected symbol
	const rainbow = chalkAnimation.rainbow('Connected' + 
		'\n\nWelcome to The 30 Seconds of C++ Bot created by: Ran Crump'); // Animation starts

	//Set status
	client.user.setActivity("Type !help for help"); 
});

// login to Discord with your app's token
client.login(auth.Security.token);

// Client Message 
client.on('message', async message => {

	if(message.author.bot) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith("!")) return;

    let cmd = client.commands.get(command.slice(1));
    if(cmd) cmd.run(client, message, args);
    
});

function Padding (num) {
	let tempPadding = [];
	for (var i = 0; i < num; i++)
	{
		tempPadding.push(" ");
	}
	return tempPadding;	
}