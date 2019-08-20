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

    switch(args[0].toLowerCase()) {
        case "botinvite":
            message.channel.send("", {
                embed: {
                    color: 0xFF0000,
                    author: message.author.username,
                    title: '',
                    fields: [{
                        name: "Lien pour inviter le Bot sur votre Serveur",
                        value: "https://discordapp.com/api/oauth2/authorize?client_id=613369869504872449&scope=bot&permissions=267910339",
                        inline: false
                    }],
                    footer:{
                        footer: "Faites en bon usage ^^",
                    },
                }
            });
    }

    switch(args[0].toLowerCase()) {
        case "ookami":
            message.channel.send("", {
                embed: {
                    color: 0x26c6,
                    author: message.author.username,
                    title: '',
                    fields: [{
                        name: "Qui est Ookami ?",
                        value: "C'est le Dieu des Loups ! \nNon ... plus précisément c'est un Ado qui adore les animes Japonais, les Jeux-Vidéo et l'Informatique.\nIl est aussi à fonds sur les Loups et la Lune, et a plus tendance à aimer les couleurs sombrent comme le Rouge et le Noir.",
                        inline: false
                    }],
                    footer:{
                        footer: "Le Créateur",
                    },
                }
            });
    }

});

bot.login(process.env.TOKEN);
