
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
if (message.content === prefix + "help") {
    const embed = new RichEmbed()
      .setTitle('**__Liste des commandes__::bee:** \n ')
      .addField(`*informations`,`:small_orange_diamond:Donne des informations sur le bot.`)
      .addField(`*ping`,`:small_orange_diamond: Donne le temps de réaction du bot en ms.`)
      .addField(`*serveurs`,`:small_orange_diamond: Donne la liste de tous les serveurs et du nombre de membres ou se trouve Beeing#4440.`)
      .addField(`*avatar`,`:small_orange_diamond:Donne ton avatar Discord. `)
      .addField(`**__Liste des commandes de modérations__::bee:**`,)
      .addField(`*ban (Bientot disponible)`,`:tools:Permet de bannir des utilisateurs.`)
      .addField(`*kick (Bientot disponible)`,`:tools: Permet d´expulser des utilisateurs.`)
      .addField(`*mute (Bientot disponible)`,`:tools: Permet de rendre muet des utilisateurs.`)
      .addField(`**__Autres fonctionalitées:__**:bee:`)
      .addField(`Salut`,`:small_orange_diamond:Dites Salut et le Bot vous dira Bonjour.`)
      .addField(`Bienvenue/a quitté le serveur`,`:small_orange_diamond: Dès qu une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:Attention il faut posséder un salon nouveau-départ pour pouvoir avoir accès à cette fonctionnalité.:exclamation:`)
      .addField(`Auto rôle Membres `,`:small_orange_diamond:Ajoute automatiquement le rôle Membres a tout les nouveaux de votre serveur. \n :exclamation: Attention il faut posséder le rôle Membres.:exclamation:`)
      .setColor(0xffa500)
      .setFooter("Beeing")
    message.author.send(embed);
  }
    
    if (message.content === prefix + "help") {
     const embed = new RichEmbed()
      .setTitle('Les commandes vous ont été envoyés en MP :mailbox_with_mail:')
      .setColor(0xffa500)
      .setFooter("Beeing")
     message.channel.send(embed)
    }
    
    if (message.content === prefix + "informations") {
  const embed = new RichEmbed()
                .setTitle(':information_source: **Informations:**')
                .addField(`:satellite: Serveurs:`, `${bot.guilds.size}`)
                .addField(`:grinning: Users`, `${bot.users.size}`)
                .addField(`:vs: Version:`, `0.0.1 alpha`)
                .addField(`:computer: Developpeur`, `loris83756#0001`)
                .addField(`:pencil: Codage utilisé:`, `Node JS 11.4.2`)
                .addField(`:regional_indicator_h: Hébergeur:`, `Heroku`, true)
                .addField(`:ok_hand: Server Support:`, `[Cliquer ici](https://discord.gg/fERCmfe)`) 
                .setColor(0xffa500);
            message.channel.send(embed);
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué");
    }
    
     if (message.content === prefix + "serveurs"){
        message.channel.sendMessage(bot.guilds.map(r => r.name + ` |**${r.memberCount}** membres`))
    }

  if (message.content === prefix + "ping") {
    const embed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(0xffa500)
                .setFooter("Beeing")
     message.channel.send(embed);
    }
    
    if (message.content === prefix + "avatar"){
      message.channel.sendMessage(message.author.avatarURL)
    }
    
}); 
bot.login(process.env.TOKEN);
