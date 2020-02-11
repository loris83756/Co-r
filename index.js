const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var prefix = ("$")

bot.on('ready',function() {
      bot.user.setActivity(`vous contaminer`, { type: `PLAYING`})
    console.log("Connecter");
})
  
bot.on('message', message => {
  if (message.content === prefix + "corona") {
     var role = member.guild.roles.find(`name`, `corona`);
      member.addRole(role)   
  }
      

    
}); 
bot.login(process.env.TOKEN);

