const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("**Liste des commandes**: \n ```*informations:``` Donne des informations sur le bot. \n \n ```*ban (bientôt disponible)``` \n Permet de banir des personnes")
    }
    
    if (message.content === prefix + "informations"){
        message.channel.sendMessage("_Je suis développer par loris83756#3705 et je suis hébergé chez Heroku._" )
        console.log("Commande effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
bot.login(process.env.TOKEN);


