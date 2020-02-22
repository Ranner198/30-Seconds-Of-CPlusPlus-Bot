module.exports.run = async (bot, message, args) => {
    message.channel.send('https://youtu.be/XqZsoesa55w?t=22');
    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}
module.exports.help = {
    name: 'babyshark'
}