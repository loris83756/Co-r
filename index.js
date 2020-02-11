const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("$")


var role = member.guild.roles.find(`name`, `corona`);




    member.addRole(role)   
      
bot.on('ready',function() {
      bot.user.setActivity(`vous contaminer`, { type: `PLAYING`})
    console.log("Connecter");
})
      
      
});
bot.login(process.env.TOKEN);
