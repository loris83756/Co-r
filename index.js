const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("$")


var role = member.guild.roles.find(`name`, `corona`);


  if (message.content === prefix + "corona") {
     const embed = new RichEmbed()
      .setTitle('Vous avez était contaminé... ')
      .setColor(0x008000)
      .setTimestamp()
      .setFooter("Corona","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
     message.channel.send(embed)
    console.log(`Commade help (message MP) effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)   
    member.addRole(role)   
  }
      
bot.on('ready',function() {
      bot.user.setActivity(`vous contaminer`, { type: `PLAYING`})
    console.log("Connecter");
})
      
      
});
bot.login(process.env.TOKEN);
