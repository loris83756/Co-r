const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("**Liste des commandes**: \n *information");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
bot.login(process.env.TOKEN);

