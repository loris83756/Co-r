const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var prefix = ("$")


bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","👋nouveaux-départs").send(`${member} est infecté`)
})
    

bot.on('ready',function() {
      bot.user.setActivity(`vous contaminer`, { type: `PLAYING`})
    console.log("Connecter");
})

  bot.on('message', message => {
 if (message.content === "Bonjour"){
        message.reply("Bonjour.");
        console.log(`Commade bonjour effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }

        
}); 
bot.login(process.env.TOKEN);

