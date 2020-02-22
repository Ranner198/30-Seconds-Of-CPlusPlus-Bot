// Discord.js
const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    var richText = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("30 Seconds of C++ Github:")
    .setDescription("Head on over to https://github.com/Bhupesh-V/30-seconds-of-cpp to check out the Github page")
    .setTimestamp()
    .setImage("https://github.com/Bhupesh-V/30-Seconds-of-cpp/raw/master/logo/new_logo_2.jpg")
    .addField("Author", "The Guy in charge: https://github.com/Bhupesh-V")
    message.channel.send(richText);

    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}
module.exports.help = {
    name: 'github'
}