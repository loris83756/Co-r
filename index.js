const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});

bot.login("NTE1NTE4Mzg1Njg2MTgzOTM3.Dtmvew.cGD4MkjqSvMWrI4ZOzEBSLkgK7c");


bot.on ('message',message => {
    if (message.content === prefix + "help"){
        message.channel.senMessage5"Liste des commandes: \n -*help");
    }

    if (message.content,=== "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    });
