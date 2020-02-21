// Discord.js
const Discord = require ("discord.js");
//File Reader/Writer
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let cmds = "";
    let messageRequester = message.member;

    fs.readdir("./cmds", (err, files) => {    
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        jsfiles.forEach((f, i) => {
            cmds += `!${f.split('.')[0]}`;// + (i%2==0? '      ': '\n');
        });
        let richText = new Discord.RichEmbed()
        .setColor("00FFFF")
        .setTitle("Commands")
        .setDescription(cmds)
        .setTimestamp()
        addField("Contact", "If you have any questions or comments please reach out to @Ranner#0198 or @Turned_On#8801")

        messageRequester.send(richText);
    });

    message.delete();
}
module.exports.help = {
    name: 'commands'
}