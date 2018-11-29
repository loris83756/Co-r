const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")


bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","nouveau-départ").send(`Bienvenue ${member}`)
})

bot.on("guildMemberRemove" , member => {
    member.guild.channels.find("name","nouveau-départ").send(`**${member} a quitté le serveur **`)
})

bot.on(`guildMemberAdd`,member => {
    var role = member.guild.roles.find(`name`, `Membres`);
    member.addRole(role)
})

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});


bot.on('message', message => {
    if (message.content === prefix + "help"){ 
        message.author.send("**__:bee:Liste des commandes__**: \n ```*informations: (nouveau)``` :black_small_square:Donne des informations sur le bot.\n \n ```*ping: (nouveau)``` :black_small_square:Donne le temps de réaction du bot en ms. \n \n ```*serveur (nouveau)``` :black_small_square:Donne la liste de tous les serveur ou se trouve @Beeing#4440 \n \n ```*ban: (bientôt disponible)``` :black_small_square:Permet de bannir des personnes. \n \n ```*kick: (bientôt disponible)``` :black_small_square:Permet d´expulser des personnes. \n \n ```*mute: (bientôt disponible)``` :black_small_square:Permet de mute des personnes. \n \n \n **__:bee:Autres fonctionnalités:__** \n ```salut``` :black_small_square:Dites Salut et le Bot vous dira Bonjour. \n \n ```Bienvenue/a quitté le serveur``` :black_small_square:Dès qu'une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:**Attention il faut posséder un salon nouveau/départ pour pouvoir avoir accès à cette fonctionnalité.**:exclamation: \n \n ```Auto role Membres``` :black_small_square:Ajoute automatiquement le role **Membres** a tout les nouveaux de votre serveur \n :exclamation:**Attention il faut posséder le role _Membres_.**:exclamation:")
        message.channel.sendMessage("**Les commandes vous on était envoyé en MP :bee: **")
    }
    
    if (message.content === prefix + "informations"){
        message.channel.sendMessage("_ ```Je suis développer par **loris83756#3705** en **node.js** et je suis hébergé chez **Heroku**. \n Beeing#4440 est sous licence .```
        console.log("Commande effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
    
     if (message.content === prefix + "serveurs"){
        message.channel.sendMessage(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    }


    if (message.content === prefix + "ping"){
        message.channel.sendMessage(`**Pong:** ${message.createdTimestamp - Date.now()} ms`);
    }
    
});
bot.login(process.env.TOKEN);


