const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("$")
      
      
bot.on('ready',function() {
bot.user.setActivity(`Prefix: $ | ${bot.users.size} users | ${bot.guilds.size} serveurs |`, { type: `STREAMING`, url: 'https://www.twitch.tv/ewenasse'})
    console.log("Connecter");
})
      
      
});
bot.login(process.env.TOKEN);
