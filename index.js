const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');7

var prefix = ("/")

bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","👋nouveaux-départs").send(`**Bienvenue ${member} tu es maintenant infecté**`)
})

bot.on(`guildMemberAdd`,member => {
    var role = member.guild.roles.find(`name`, `corona`);
    member.addRole(role)
})

bot.on('ready',function() {
bot.user.setActivity(`vous cotaminé`, { type: `PLAYING`})
    console.log("Connecter");
});

bot.on('message', message => {
  if (message.content === prefix + "ping") {
    const embed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(0x008000)
                .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
                .setTimestamp()
     message.channel.send(embed);
     console.log(`Commade ping effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
    }
  
  if (message.content === "Bonjour"){
        message.reply("J'espére pour toi que t'as un masque :)");
        console.log(`Commade bonjour effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
    
  let messagemusique = message.content.split(" ");
let musique = messagemusique[0];
let musiqueargs = messagemusique.slice(1); 

if (musique === prefix + "play") {

if (message.member.voiceChannel)
}
if(!message.guild.voiceConnection)
}
if (!servers[message.guild.id])
}
servers[message.guild.id] = {queue: []}
}
message.member.voiceChannel.join()
.them(connection =>{
  var server = servers[message.guild.id]
  message.chennel.send("**Connecter**")
  server.queue.push(args)
  Play(connection,message);
})
}
}
else
{ 
message.reply ("**:x: Connecte toi dans le channel avant de faire la commande**")
}

}); 
bot.login(process.env.TOKEN);

