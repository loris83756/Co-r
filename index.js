
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

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
    bot.user.setGame("Commande:*help");
    console.log ("Connected");
});

bot.on('message', message => {
if (message.content === prefix + "help") {
    const embed = new RichEmbed()
      .setTitle('**......................................................... \n :bee:__Commandes utiles__::bee:** \n **........................................................**')
      .addField(`*info-bot`,`:small_orange_diamond:Donne des informations sur le bot.`)
      .addField(`*info-serveur`,`:small_orange_diamond:Donne des informations sur le serveur ou est effectué cette commande. `)
      .addField(`*serveurs`,`:small_orange_diamond: Donne la liste de tous les serveurs et du nombre de membres ou se trouve Beeing#4440.`)
      .addField(`*ping`,`:small_orange_diamond: Donne le temps de réaction du bot en ms.`)
      .addField(`*avatar`,`:small_orange_diamond:Donne ton avatar Discord. `)
      .addField(`**......................................................... \n :hammer:__Commandes modérations__::hammer:**`,` \n **.........................................................** `)
      .addField(`*ban + utilisateur + raison de la sanction`,`:small_orange_diamond: Permet de bannir des utilisateurs.`)
      .addField(`*kick (Bientot disponible)`,`:tools: Permet d´expulser des utilisateurs.`)
      .addField(`*mute (Bientot disponible)`,`:tools: Permet de rendre muet des utilisateurs.`)
      .addField(`**......................................................... \n :tv:__Autres fonctionalitées:__:tv:**`,` \n **.........................................................**`)
      .addField(`Salut`,`:small_orange_diamond:Dites Salut et le Bot vous dira Bonjour.`)
      .addField(`Bienvenue/a quitté le serveur`,`:small_orange_diamond: Dès qu une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:Attention il faut posséder un salon nouveau-départ pour pouvoir avoir accès à cette fonctionnalité.:exclamation:`)
      .addField(`Auto rôle Membres `,`:small_orange_diamond:Ajoute automatiquement le rôle Membres a tout les nouveaux de votre serveur. \n :exclamation: Attention il faut posséder le rôle Membres.:exclamation:`)
      .setColor(0xffa500)
      .setTimestamp()
      .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    message.author.send(embed);
  }
    
    if (message.content === prefix + "help") {
     const embed = new RichEmbed()
      .setTitle('Les commandes vous ont été envoyés en MP :mailbox_with_mail:')
      .setColor(0xffa500)
      .setTimestamp()
      .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
     message.channel.send(embed)
    }
    
    if (message.content === prefix + "info-bot") {
  const embed = new RichEmbed()
                .setTitle(':information_source: **Informations:**')
                .addField(`:satellite: Serveurs:`, `${bot.guilds.size}`)
                .addField(`:grinning: Users`, `${bot.users.size}`)
                .addField(`:vs: Version:`, `0.0.1 alpha`)
                .addField(`:computer: Developpeur`, `loris83756#0001`)
                .addField(`:pencil: Codage utilisé:`, `Node JS 11.4.2`)
                .addField(`:regional_indicator_h: Hébergeur:`, `Heroku`, true)
                .addField(`:ok_hand: Server Support:`, `[Cliquer ici](https://discord.gg/fERCmfe)`) 
                .addField(`:bee: Inviter Beeing:`, `[Cliquer ici](https://discordapp.com/oauth2/authorize?client_id=515518385686183937&permissions=8&scope=bot)`) 
                .setTimestamp()
                .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
                .setColor(0xffa500);
            message.channel.send(embed);
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué");
    }
    
     if (message.content === prefix + "serveurs") {
         const embed = new RichEmbed()
        .setTitle(bot.guilds.map(r => r.name + ` |**${r.memberCount}** membres`))
        .setTimestamp()
        .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
        .setColor(0xffa500);
         message.channel.send(embed)
    }

  if (message.content === prefix + "ping") {
    const embed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(0xffa500)
                .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
                .setTimestamp()
     message.channel.send(embed);
    }
    
    if (message.content === prefix + "avatar") {
        const embed = new RichEmbed()
        .setTitle(`**Voici ton avatar:**`)
        .setColor(0xffa500)
        .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        message.channel.send(embed);
    }
    
    if (message.content === prefix + "info-serveur") {
    const embed = new RichEmbed()
    .setTitle("**:information_source: Information du Serveur**") 
    .addField(":satellite: Nom du serveur", message.guild.name)
    .addField("**:pencil: Crée le:**", message.guild.createdAt)
    .addField("**:grinning: Membres sur le discord:**", message.guild.memberCount)
    .addField("**:door: Tu as rejoin le:**", message.member.joinedAt)
    .setColor(0xffa500)
    .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    .setTimestamp()
message.channel.sendEmbed(embed)
}
     
let messageban = message.content.split(" ");
let ban = messageban[0];
let banargs = messageban.slice(1); 
  
if (ban === prefix + "ban") {
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(banargs[0]));
    if (!banUser) 
    return message.channel.send("**Vous devez mentionné l'utilisateur a bannir et la raison de la sanction.**");
    let banRaison = banargs.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
    if(banUser.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**Je ne peut pas bannir cet utilisateur ou vous n'avez pas mit la raison de la sanction**");
    const embed = new RichEmbed()
    .setTitle("**:hammer: Ban effectué avec succé.**")
    .addField(":wave: Utilisateur banni:",`${banUser}`)
    .addField(":cop: Utilisateur banni par:",`${message.author}`)
    .addField(":scroll: Raison de la sanction:",banRaison)
    .addField(":alarm_clock: Sanction effectué le:",message.createdAt)
    .setColor(0xffa500)
    .setFooter("Beeing")
    message.guild.member(banUser).ban(banRaison);
message.channel.send(embed);
}
            
}); 
bot.login(process.env.TOKEN);
