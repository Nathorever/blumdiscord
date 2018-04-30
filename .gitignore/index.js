const Discord = require('Discord.js');

const bot = new Discord.Client();

var prefix = "!";

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "!aide pour plus d'info"}});
    console.log("Bot ready !");
});

bot.login(process.emv.TOKEN);

bot.on('message', message => {
        if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FFFF00")
        .setTitle("Commande:")
        .addField("!aide", "Affiche les commandes")
        .addField("!clear", "Clear tout les messages (seulement les admins)")
        .addField("!trade", "Avertie un vendeur")
        .addField("!assault", "montre les fusils d'assaults en vente")
        .addField("!pompe", "montre les fusils a pompe en vente")
        .addField("!mitrailleuse", "montre les mitrailleuses en vente")
        .addField("!épée", "montre les épées en vente")
        message.channel.send(help_embed);
        console.log("aide, effectuer")
    };

    if(message.content === prefix + "clear"){
        (message.member.hasPermission("MANAGE_MESSAGES"));{
         message.channel.fetchMessages()
            .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("Erreur")})}
            console.log("clear, effectuer")
    };

    if(message.content === prefix + "trade"){
        var member = message.author;
        message.guild.channels.find("name", "information-du-bot").send(`${member} veut acheter`);
        message.guild.channels.find("name", "demandes-armes").send(`${member} va dans le vocal "Attente de trade" quelqu'un viendra dès que possible`);
        console.log(`quelqu'un veut acheter`)
    };

    if (message.content === prefix + "assault"){
        var scar_embed = new Discord.RichEmbed()
        .setColor("#7701FE")
        .setTitle("Scar:")
        .addField("NV 30/30", "82:zap:")
        .addField("14 malachites", "minerais")
        .addField("40 pièces mécaniques solide", "pièces mécaniques")
        .addField("2 batteries chargée ", "batterie")
        .addField("15 poudres cendrées", "poudre")
        message.channel.send(scar_embed);
        var nocturno_embed = new Discord.RichEmbed()
        .setColor("#7701FE")
        .setTitle("Nocturno:")
        .addField("NV 20/20 ", "58:zap:")
        .addField("50 minerais d'argent / 18 malachites", "minerais")
        .addField("150 pièces mécaniques simple", "pièces mécaniques")
        .addField("10 batteries chargée / 25 charbons", "autres")
        message.channel.send(nocturno_embed);
        console.log("assault demander")
    };

    if (message.content === prefix + "pompe"){
        var défragmentateur_embed = new Discord.RichEmbed()
        .setColor("#7701FE")
        .setTitle("Défragmentateur:")
        .addField("NV 25/30", "74:zap:")
        .addField("18 malachites", "minerais")
        .addField("50 pièces mécaniques solide", "pièces mécaniques")
        .addField("3 batteries chargée ", "batterie")
        .addField("25 poudres cendrées", "poudre")
        message.channel.send(défragmentateur_embed);
        console.log("pompe demander")
    };

    if (message.content === prefix + "mitrailleuse"){
        var mitrailleuse_embed = new Discord.RichEmbed()
        .setColor("#7701FE")
        .setTitle("Mitrailleuse légère au mercure:")
        .addField("NV 25/30", "74:zap:")
        .addField("12 malachites", "minerais")
        .addField("12 quartzs", "minerais")
        .addField("30 pièces mécaniques solide", "pièces mécaniques")
        .addField("2 batteries chargée ", "batterie")
        .addField("20 baterie", "batterie")
        message.channel.send(mitrailleuse_embed);
        console.log("mitrailleuse demander")
    };

    if (message.content === prefix + "épée"){
        var etripeuse_embed = new Discord.RichEmbed()
        .setColor("#7701FE")
        .setTitle("Etripeuse:")
        .addField("NV 26/30", "76:zap:")
        .addField("15 malachites", "minerais")
        .addField("30 minerais brute", "minerais")
        .addField("4 batteries chargée ", "batterie")
        .addField("50 poudres minérale fine", "poudre")
        message.channel.send(etripeuse_embed);
        console.log("epee demander")
    };
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "demandes-armes").send(`Bienvenue ${member}, si tu veux plus d'infos fait un [!aide]`)
    console.log(`quelqu'un a rejoin le serveur`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "demandes-armes").send(`${member} vien de quitter`)
    console.log(`quelqu'un a quitter le serveur`)
});

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Client');
    member.addRole(role)
    console.log(`la personne est bien client`)
});
