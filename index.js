const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var prefix = ("$")

 bot.on('message', message => {
bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","👋nouveaux-départs").send(`** Bienvenue ${member} tu est maintenant infecté.**`)
})
    
bot.on('ready',function() {
      bot.user.setActivity(`vous contaminer`, { type: `PLAYING`})
    console.log("Connecter");
})

bot.on(`guildMemberAdd`,member => {
    var role = member.guild.roles.find(`name`, `corona`);
    member.addRole(role)
})

 if (message.content === "Bonjour"){
        message.send("gegfjegfjfejkfejkfjke");
        console.log(`Commade bonjour effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
        
}); 
bot.login(process.env.TOKEN);

