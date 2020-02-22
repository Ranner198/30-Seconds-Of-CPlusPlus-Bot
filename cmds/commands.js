// Discord.js
const Discord = require ("discord.js");
//File Reader/Writer
const fs = require('fs');

function WaitForFiles(bot, message, args, cmds)
{
    var richText = new Discord.RichEmbed()
    .setColor("00FFFF")
    .setTitle("Commands:")
    .setDescription(cmds)
    .setTimestamp()
    .addField("Contact", "If you have any questions or comments please reach out to @Ranner#0198 or @Turned_On#8801")
    message.author.send(richText);

    // If not a DM delete the message
    if(message.channel.type != "dm")
        message.delete(); 
}

module.exports.run = async (bot, message, args) => {    
    let cmds = "";
    fs.readdir("./cmds", (err, files) => {    
        
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        jsfiles.forEach((f, i) => {
            cmds += `!${f.split('.')[0]}` + (i%2==0? ' ': '\n');
            // Fixes the async issue, I'm a scrub at promises so this is the only way I know to do it
            if (i+1 == jsfiles.length)
                WaitForFiles(bot, message, args, cmds)
        });        
    });
}
module.exports.help = {
    name: 'commands'
}