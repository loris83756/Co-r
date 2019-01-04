
const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")


bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","nouveau-départ").send(`**Bienvenue** ${member}`)
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
        message.author.send("**__Liste des commandes__::bee:** \n ```*informations: (nouveau)``` :small_orange_diamond: Donne des informations sur le bot.\n \n ```*ping: (nouveau)``` :small_orange_diamond: Donne le temps de réaction du bot en ms. \n \n ```*serveurs (nouveau)``` :small_orange_diamond: Donne la liste de tous les serveur ou se trouve Beeing#4440 \n \n ```*invitation (nouveau)``` :small_orange_diamond: Donne un lien permetant d'invité Beeing#4440 sur votre serveur \n \n ```*ban: (bientôt disponible)``` :tools: Permet de bannir des personnes. \n \n ```*kick: (bientôt disponible)``` :tools: Permet d´expulser des personnes. \n \n ```*mute: (bientôt disponible)``` :tools: Permet de mute des personnes. \n \n \n **__Autres fonctionnalités:__**:bee: \n ```salut``` :small_orange_diamond: Dites Salut et le Bot vous dira Bonjour. \n \n ```Bienvenue/a quitté le serveur``` :small_orange_diamond: Dès qu'une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:**Attention il faut posséder un salon nouveau/départ pour pouvoir avoir accès à cette fonctionnalité.**:exclamation: \n \n ```Auto role Membres``` :small_orange_diamond: Ajoute automatiquement le role **Membres** a tout les nouveaux de votre serveur \n :exclamation:**Attention il faut posséder le role _Membres_.**:exclamation:")
        message.channel.sendMessage("**Les commandes vous on était envoyé en MP   **")
    }
    
    if (message.content === prefix + "informations"){
        message.channel.sendMessage("Je suis programmé par **loris83756#0001** en **JavaScript** et je suis hébergé chez **Heroku**.\n Beeing#4440 est sous licence ISC .")
        console.log("Commande effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué");
    }
    
     if (message.content === prefix + "serveurs"){
        message.channel.sendMessage(bot.guilds.map(r => r.name + ` |**${r.memberCount}** membres`))
    }

     if (message.content === prefix + "ping"){
        message.channel.sendMessage(`:ping_pong:Pong: ${message.createdTimestamp - Date.now()} ms`)
    }
    
    if (message.content === prefix + "invitation"){
        message.channel.sendMessage("**Voici le lien pour m'inviter sur ton serveur:** https://discordapp.com/api/oauth2/authorize?client_id=515518385686183937&permissions=0&scope=bot")
    }
    
    if (message.content === prefix + "avatar"){
      message.channel.sendMessage(message.author.avatarURL)
    }
    
    if (message.content === prefix +"off"){
        message.channel.sendMessage(`**Seul loris83756#0001 peut utiliser cette commande.**`)
       if (message.author.id === '295211285405237248')
          message.channel.sendMessage(`**Arret en cours ...**`) 
      bot.user.setGame("Arret en cours ...");{
    }
        ccrashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    }
    
   if (message.content === prefix + "joinvocale"){ 
    voiceChannel.join()
  }
    
});
bot.login(process.env.TOKEN);
