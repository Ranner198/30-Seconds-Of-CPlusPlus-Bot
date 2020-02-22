// Discord.js
const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    var richText = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("30 Seconds of C++ Courses:")
    .setDescription(
        "Click [here](https://bhupesh.codes/30-Seconds-of-C++/) to visit our website"
    )
    .setTimestamp()
    .setImage("https://media.giphy.com/media/l3dj09hpsfuYkijDi/giphy.gif")
    message.author.send(richText);

    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}
module.exports.help = {
    name: 'webpage'
}