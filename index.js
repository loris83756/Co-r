const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');


var prefix = ("*")
//BIENVENUE / A QUTTER LE SERVEUR-----------------------------------------------------------------------------------------------

bot.on("guildMemberAdd" , member => {
        const boembed = new RichEmbed() 
                .addField(`:bee:....................................................`,`\n Bienvenue **${member}** \n sur **${member.guild.name}** \n  **....................................................**:bee:`)
                .setImage("https://cdn.discordapp.com/attachments/511129543768145930/544509143566909453/4565662.png")
                .setTimestamp()
                .setThumbnail(member.avatarURL)
                .setColor(0xffa500);
                member.guild.channels.find("name","nouveau-départ").send(boembed);
            })

bot.on("guildMemberRemove" , member => {
    const aqembed = new RichEmbed() 
            .addField(`:bee:....................................................`,`${member} a quitté le serveur. \n **....................................................**:bee:`)
            .setImage("https://cdn.discordapp.com/attachments/546798816012009483/546805791395676180/312211545684532865024865468.png")
            .setTimestamp()
            .setThumbnail(member.avatarURL)
            .setColor(0xffa500);
            member.guild.channels.find("name","nouveau-départ").send(aqembed);
        })

// AUTO ROLE---------------------------------------------------------------------------------------------------------------------
bot.on("guildMemberAdd" , member => {
    var role = member.guild.roles.find(role => role.name === 'Membres');
    member.addRole(role)
})

//SET GAME-----------------------------------------------------------------------------------------------------------------------
bot.on('ready',function() {
bot.user.setActivity(`Prefix: * | ${bot.users.size} users | ${bot.guilds.size} serveurs |`, { type: `STREAMING`, url: 'https://www.twitch.tv/loris83756'})
    console.log("Connecter");
});
//HELP---------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
if (message.content === prefix + "help") {
    const hembed = new RichEmbed()
      .setTitle('**......................................................... \n :bee:__Commandes utiles__::bee:** \n **........................................................**')
      .addField(`*info-bot`,`:small_orange_diamond:Donne des informations sur le bot.`)
      .addField(`*info-user + [user]`,`:small_orange_diamond:Donne des informations sur l'utilisateur mentioner. `)
      .addField(`*info-serveur`,`:small_orange_diamond:Donne des informations sur le serveur ou est effectué cette commande. `)
      .addField(`*serveurs`,`:small_orange_diamond:Donne la liste de tous les serveurs et du nombre de membres ou se trouve Beeing#4440.`)
      .addField(`*clear + [nombre]`,`:small_orange_diamond:Permet de supprimer le nombre de message indiquer (max 100). `)
      .addField(`*ping`,`:small_orange_diamond:Donne le temps de réaction du bot en ms.`)
      .addField(`**......................................................... \n :hammer:__Commandes modérations__::hammer:**`,` \n **.........................................................** `)
      .addField(`*ban + [utilisateur] + [raison de la sanction]`,`:small_orange_diamond:Permet de bannir des utilisateurs.`)
      .addField(`*kick + [utilisateur] + [raison de la sanction]`,`:small_orange_diamond:Permet d´expulser des utilisateurs.`)
      .addField(`*mute (Bientot disponible)`,`:tools: Permet de rendre muet des utilisateurs.`)
      .addField(`**......................................................... \n :video_game:__Commandes jeu:__:video_game:**`,` \n **.........................................................**`)
      .addField(`*dé`,`:small_orange_diamond:Tire un nombre de 1 a 6.`)
      .addField(`*pile/face`,`:small_orange_diamond:Tire pile ou face.`)
      .addField(`*miroir + [question] (debug en cours)`,`:small_orange_diamond:Répond a la question que vous posez.`)
      .addField(`*démineur (alpha test 1 niveau)`,`Ne tomber pas sur l'une des bombes!`)
      .addField(`**......................................................... \n :tv:__Autres fonctionalitées:__:tv:**`,` \n **.........................................................**`)
      .addField(`Bonjour`,`:small_orange_diamond:Dites Bonjour et le Bot vous répondra.`)
      .addField(`Bienvenue/a quitté le serveur`,`:small_orange_diamond: Dès qu une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:Attention il faut posséder un salon nouveau-départ pour pouvoir avoir accès à cette fonctionnalité.:exclamation:`)
      .addField(`Auto rôle Membres `,`:small_orange_diamond:Ajoute automatiquement le rôle Membres a tout les nouveaux de votre serveur. \n :exclamation: Attention il faut posséder le rôle Membres.:exclamation:`)
      .setColor(0xffa500)
      .setTimestamp()
      .setFooter("Beeing","https://cdn.discordapp.com/atta`chments/511129543768145930/531464974548205568/Beeing.jpg")
    message.author.send(hembed);
    console.log(`Commade help effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
  }
     
    if (message.content === prefix + "help") {
     const hmembed = new RichEmbed()
      .setTitle('Les commandes vous ont été envoyés en MP :mailbox_with_mail:')
      .setColor(0xffa500)
      .setTimestamp()
      .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
     message.channel.send(hmembed)
    console.log(`Commade help (message MP) effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)   
    }
    //INFO BOT-----------------------------------------------------------------------------------------------------------------------
    if (message.content === prefix + "info-bot") {
  const ibembed = new RichEmbed()
                .setTitle(':information_source: **Informations:**')
                .addField(`:satellite: Serveurs:`, `${bot.guilds.size}`)
                .addField(`:grinning: Users`, `${bot.users.size}`)
                .addField(`:vs: Version:`, `Bêta 1.0.0`)
                .addField(`:computer: Developpeur`, `loris83756#0001`)
                .addField(`:pencil: Codage utilisé:`, `Node JS 11.4.2`)
                .addField(`:regional_indicator_h: Héberger sur:`, `Rasberry Pi 3B+ ou sur Heroku (si probléme avec le rasberry)`)
                .addField(`:ok_hand: Server Support:`, `[Cliquer ici](https://discord.gg/JXz8YTR)`) 
                .addField(`:bee: Inviter Beeing:`, `[Cliquer ici](https://discordapp.com/oauth2/authorize?client_id=515518385686183937&permissions=8&scope=bot)`) 
                .setTimestamp()
                .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
                .setColor(0xffa500);
            message.channel.send(ibembed);
         console.log(`Commade info bot effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
//INFO USER---------------------------------------------------------------------------------------------------------------------------
var messageuser = message.content.split(" ");
var infouser = messageuser[0];
var userargs = messageuser.slice(1); 
    
   if (infouser === prefix + "info-user") {
     var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(userargs[0]));
    if (!user) 
    return message.channel.send("**:information_source: Vous devez mentionné un utilisateur.**"); 
        const iuembed = new RichEmbed()
        .setTitle(`**__:information_source: User info__**`) 
        .addField(" :grinning: Nom:",`${user}`)
        .addField(" :id: ID:",`${user.id}`)
        .addField(":vertical_traffic_light:Statu:",`  ${user.presence.status} `)
        .addField(":video_game: Joue a:",`  ${user.presence.game ? user.presence.game.name : "Rien"}`)
        .setColor(0xffa500)
        .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
        .setThumbnail(message.mentions.users.first().avatarURL)
        .setTimestamp()
        message.guild.member(user)
        message.channel.send(iuembed);
        console.log(`Commade info user effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
    //INFO SERVEUR--------------------------------------------------------------------------------------------------------------------
    if (message.content === prefix + "info-serveur") {
    const isembed = new RichEmbed()
    .setTitle("**:information_source: Information du Serveur**") 
    .addField(":satellite: Nom du serveur", message.guild.name)
    .addField("**:pencil: Crée le:**", message.guild.createdAt)
    .addField("**:grinning: Membres sur le discord:**", message.guild.memberCount)
    .addField("**:door: Tu as rejoin le:**", message.member.joinedAt)
    .addField("**:bookmark_tabs: Roles que tu posséde sur ce serveur:**",message.member.roles.map(roles =>`${roles.name}`).join(', '))
    .setColor(0xffa500)
    .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    .setTimestamp()
message.channel.sendEmbed(isembed)
console.log(`Commade info serveur effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}
//SERVEURS-------------------------------------------------------------------------------------------------------------------------    
     if (message.content === prefix + "serveurs") {
         const sembed = new RichEmbed()
        .setTitle(bot.guilds.map(r => r.name + ` |**${r.memberCount}** membres \n -------------`))
        .setTimestamp()
        .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
        .setColor(0xffa500);
         message.channel.send(sembed)
         console.log(`Commade serveurs effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
//PING-----------------------------------------------------------------------------------------------------------------------------
  if (message.content === prefix + "ping") {
    const pembed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(0xffa500)
                .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
                .setTimestamp()
     message.channel.send(pembed);
     console.log(`Commade ping effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
    }
//BONJOUR----------------------------------------------------------------------------------------------------------------------------    
    if (message.content === "Bonjour"){
        message.reply("Bonjour.");
        console.log(`Commade bonjour effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
 //Dé------------------------------------------------------------------------------------------------------------------------------   
    if (message.content === prefix + "dé") {
    var reponse = [":one:",":two:",":three:",":four:",":five:",":six:"]
    var resultat = Math.floor((Math.random() * reponse.length));
    const dembed =new RichEmbed()
    .setTitle('**__:game_die: Dé__**')
    .addField("Tu es tombé sur le :",reponse[resultat])
    .setColor(0xffa500)
    message.channel.send(dembed)
    console.log(`Commade dé effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
}
//PILE/FACE------------------------------------------------------------------------------------------------------------------------  
   if (message.content === prefix + "pile/face") {
    var reponse = [":regional_indicator_f: :regional_indicator_a: :regional_indicator_c: :regional_indicator_e:",":regional_indicator_p: :regional_indicator_i: :regional_indicator_l: :regional_indicator_e: ")
    var resultat = Math.floor((Math.random() * reponse.length));
    const pfembed =new RichEmbed()
    .setTitle('**__:moneybag: Pile ou Face ??__**')
    .addField("Tu es tombé sur:",reponse[resultat])
    .setThumbnail("https://www.gifimage.net/wp-content/uploads/2018/11/pile-ou-face-gif-1.gif")
    .setColor(0xffa500)
    message.channel.send(pfembed)
    console.log(`Commade pile/face effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
} 
//MIROIR---------------------------------------------------------------------------------------------------------------------------    
var messagemiroir = message.content.split(" ");
var miroir = messagemiroir[0];
var miroirargs = messagemiroir.slice(0); 
    
  if (miroir === prefix + "miroir") {
    var reponse = ["**Oui**","**Non**","**Peut-etre**","**Je ne sais pas**"]
    var resultat = Math.floor((Math.random() * reponse.length));
    const membed =new RichEmbed()
    .setTitle("**__:crystal_ball: Miroir Magique__**")
    .addField("Question", `${miroirargs}`)
    .addField("Réponse:",reponse[resultat])
    .setColor(0xffa500)
    .setThumbnail("http://ekladata.com/JftiL-mR0hOfxXe8OFrYHdu9vPk.gif")
    message.channel.send(membed)
    console.log(`Commade miroir effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }
//BAN----------------------------------------------------------------------------------------------------------------------     
var messageban = message.content.split(" ");
var ban = messageban[0];
var banargs = messageban.slice(1); 
  
if (ban === prefix + "ban") {
    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(banargs[0]));
    if (!banUser) 
    return message.channel.send("**:information_source: Vous devez mentionné l'utilisateur a bannir et la raison de la sanction.**");
    var banRaison = banargs.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
    if(banUser.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**:information_source: Je ne peut pas bannir cet utilisateur ou vous n'avez pas mit la raison de la sanction**");
    const bembed = new RichEmbed()
    .setTitle("**:hammer: Ban effectué avec succé.**")
    .addField(":wave: Utilisateur banni:",`${banUser}`)
    .addField(":cop: Utilisateur banni par:",`${message.author}`)
    .addField(":scroll: Raison de la sanction:",banRaison)
    .addField(":alarm_clock: Sanction effectué le:",message.createdAt)
    .setColor(0xffa500)
    .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    message.guild.member(banUser).ban(banRaison);
message.channel.send(bembed);
console.log(`Commade ban effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)    
}
 //KICK---------------------------------------------------------------------------------------------------------------------   
var messagekick = message.content.split(" ");
var kick = messagekick[0];
var kickargs = messagekick.slice(1); 
  
if (kick === prefix + "kick") {
    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(kickargs[0]));
    if (!kickUser) 
    return message.channel.send("**:information_source: Vous devez mentionné l'utilisateur a expulser et la raison de la sanction.**");
    var kickRaison = kickargs.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
    if(kickUser.hasPermission("KICK_MEMBERS")) 
    return message.channel.send("**:information_source: Je ne peut pas expulser cet utilisateur ou vous n'avez pas mit la raison de la sanction**");
    const kembed = new RichEmbed()
    .setTitle("**:door: Kick effectué avec succé.**")
    .addField(":wave: Utilisateur expulser:",`${kickUser}`)
    .addField(":cop: Utilisateur expulser par:",`${message.author}`)
    .addField(":scroll: Raison de la sanction:",kickRaison)
    .addField(":alarm_clock: Sanction effectué le:",message.createdAt)
    .setColor(0xffa500)
    .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    message.guild.member(kickUser).ban(kickRaison);
message.channel.send(kembed);
console.log(`Commade kick effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)   
}
//CLEAR----------------------------------------------------------------------------------------------------------------------------
var messageclear = message.content.split(" ");
var clear = messageclear[0];
var clearargs = messageclear.slice(1); 
  
if (clear === prefix + "clear") {
    if (!clearargs[0]) 
return message.channel.send("**:information_source: Vous devez indiquer le nombre de message a supprimer.**");
  if(!message.member.hasPermission("MANAGE_MESSAGE")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
     if(isNaN(clearargs[0]))
return message.channel.send("**:information_source: Tu doit indiquer le nombre de message a supprimer**")
message.channel.bulkDelete(clearargs[0]).then(() => {
    message.channel.send(`${clearargs[0]} messages ont était suprimer.`).then(msg => msg.delete(2000));
     console.log(`Commade clear effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
})
}

//HEBERGEUR---------------------------------------------------------------------------------------------------------------------------------
if (message.content === prefix + "hébergeur h") {
    var id = message.author.id === '295211285405237248';{
    if(!id) 
    return message.channel.send("**:x: Seul loris83756 peut utiliser cette commande.**")
    console.log(`Commade hebergeur h /!\ effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}
    
     const hembed = new RichEmbed() 
            .setTitle("Hébergeur: Heroku")
            .setTimestamp()
            .setColor(0xffa500);
             message.channel.send(hembed);
}
        
              if (message.content === prefix + "hébergeur pi") {
    var id = message.author.id === '295211285405237248';{
    if(!id) 
    return message.channel.send("**:x: Seul loris83756 peut utiliser cette commande.**")
    console.log(`Commade hebergeur pi /!\ effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}
    
     const piembed = new RichEmbed() 
            .setTitle("Hébergeur: Rasberry Pi ")
            .setTimestamp()
            .setColor(0xffa500);
message.channel.send(piembed);
              }
//D.E.S-------------------------------------------------------------------------------------------------------------------------------------  
    
//COMMANDE EN TEST--------------------------------------------------------------------------------------------------------------------------
 var messagesondage = message.content.split(" ");
var sondage = messagesondage[0];
var sondageargs = messagesondage.slice(1); 
  
if (sondage === prefix + "sondage") {
    if (!sondageargs[1]) 
    return message.channel.send("**:information_source: Vous devez posez une question.**");
    let sondagequestion = sondageargs.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
    const soembed = new RichEmbed()
    .setTitle("**Sondage.**")
    .addField(":wave: Question poser par:",`${message.author}`)
    .addField("Question:",`${sondagequestion}`)
    .addField("Question poser le:",message.createdAt)
    .setColor(0xffa500)
    .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
    message.guild.member(sondagequestion);
message.channel.send(soembed);
console.log(`Commade sondage effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)   
}
 //COMMANDE TEST ----------------------------------------------------------------------------------------------------------------------------   
    
    if (message.content === prefix + "démineur") {
    const dembed =new RichEmbed()
    .setTitle('**Démineur**')
    .addField("||:bomb:|| ||:one:|| ||:two:|| ||:one:|| ||:bomb:|| \n||:one:|| ||:one:|| ||:one:|| ||:bomb:|| ||:one:|| \n||:two:|| ||:two:|| ||:one:|| ||:bomb:|| ||:one:|| \n||:three:|| ||:two:|| ||:one:|| ||:one:|| ||:one:||", "Ne tombez pas sur l'une des bombes (4 :bomb:)")
    .setColor(0xffa500)
    message.channel.send(dembed)
    console.log(`Commade démineur effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
}

//OFF---------------------------------------------------------------------------------------------------------------------------------------
    
if (message.content === prefix + "off") {
     id = message.author.id === '295211285405237248';{
    if(!id) 
    return message.channel.send("**:x: Seul loris83756 peut utiliser cette commande.**")
    console.log(`Commade off /!\ effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}
    
    bot.user.setActivity(`Arrêt en cours ... `, { type: `PLAYING`})
      BOTOOOOOOOF
}

//TOKEN-------------------------------------------------------------------------------------------------------------------------
}); 
bot.login(process.env.TOKEN);

