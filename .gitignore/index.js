const Discord = require("discord.js");

var PREFIX = "o!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Surveiller.");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    //SWITCH
    //CASE = commence notre commande
    //BREAK = termine notre commande
    //DEFAULT

    switch(args[0].toLowerCase()) {
        case "invite":
            message.channel.send("", {
                embed: {
                    color: 0xFF0000,
                    author: message.author.username,
                    title: '',
                    fields: [{
                        name: "Lien d'invitation discord",
                        value: "https://discord.gg/XYrKqzp",
                        inline: false
                    }],
                    footer: {
                        footer: "Partagez ce lien à tous vos amis !",
                    },
                }
            });
            break;
    }
});

bot.login(process.env.TOKEN);
