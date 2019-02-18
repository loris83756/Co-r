const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("-")

if(message.content === prefix + "test") {
  message.send("Test ok")
}
    
}); 
bot.login(process.env.TOKEN);

