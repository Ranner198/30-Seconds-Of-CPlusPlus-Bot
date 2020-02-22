module.exports.run = async (bot, message, args) => {
    message.channel.send('Pong! `' + Math.floor(Math.round(bot.ping)) + 'ms`');
    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete();
}
module.exports.help = {
    name: 'ping'
}