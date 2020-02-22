module.exports.run = async (bot, message, args) => {
    message.channel.send(`Puts a flower on ${message.author}'s grave :wilted_rose::skull:`);
}

module.exports.help = {
    name: 'rip'
}