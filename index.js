const Discord = require('node index.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
   }); 


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n *information");
    }

    if (message.content === prefix + "information"){
        message.reply("_Ce Bot a été développer par loris83756#3705.Le Bot est hébergé chez Heroku._")
        console.log("Commande effectué");
    }   

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
        
        bot.login(process.env.TOKEN);
    }   
});          
