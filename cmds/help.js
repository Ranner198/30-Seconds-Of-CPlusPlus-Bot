// Discord.js
const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {    
    var richText = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("Help:")
    .setDescription("Hi! I'm the 30 seconds of C++ bot. I can do many things such as commands, jokes, help, and more. Try !commands for more")
    .setTimestamp()
    .addField("Contact", "If you have any questions or comments please reach out to @Ranner#0198 or @Turned_On#8801")
    message.author.send(richText);

    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}

module.exports.help = {
    name: 'help'
}