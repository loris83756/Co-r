const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});

bot.login("process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.senMessage("Liste des commandes: \n -*help");
    }

    if (message.content,=== "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    });
