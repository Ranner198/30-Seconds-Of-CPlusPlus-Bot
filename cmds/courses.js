// Discord.js
const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
    var richText = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("30 Seconds of C++ Courses:")
    .setDescription(
        "[algorithm :card_box:](https://github.com/Bhupesh-V/30-seconds-of-cpp#algorithm)\n" +
        "[list :page_facing_up:](https://github.com/Bhupesh-V/30-seconds-of-cpp#list)\n" +
        "[map :map:](https://github.com/Bhupesh-V/30-seconds-of-cpp#map)\n" +
        "[queue :blue_circle:](https://github.com/Bhupesh-V/30-seconds-of-cpp#queue)\n" +
        "[set :zap:](https://github.com/Bhupesh-V/30-seconds-of-cpp#set)\n" +
        "[stack :books:](https://github.com/Bhupesh-V/30-seconds-of-cpp#stack)\n" +
        "[unordered_map :map:](https://github.com/Bhupesh-V/30-seconds-of-cpp#unordered_map)\n" +
        "[vector :arrow_upper_right:](https://github.com/Bhupesh-V/30-seconds-of-cpp#vector)"
    )
    .setTimestamp()
    .setThumbnail("https://github.com/Bhupesh-V/30-Seconds-of-cpp/raw/master/logo/new_logo_2.jpg")
    message.author.send(richText);

    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}
module.exports.help = {
    name: 'courses'
}