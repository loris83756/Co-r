const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var prefix = ("$")

bot.on('ready',function() {
      bot.user.setActivity(`vous contaminer`, { type: `PLAYING`})
    console.log("Connecter");
})

  bot.on('message', message => {

bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","👋nouveaux-départs").send(`${member} est infecté`)
})
    
}); 
bot.login(process.env.TOKEN);

