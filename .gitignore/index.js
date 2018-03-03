const  Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("abc")

bot.on('ready', function() {
	bot.user.setActivity("Commands: Test");
	console.log("Bot Connected On The Server !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

});
bot.on('guildMemberAdd', (visitor) =>
{
    let channel = visitor.guild.channels.find('name', 'commandes-bot')
    let nonMemberRole = visitor.guild.roles.find('name', 'PLAYERS')
 
    if (channel)
    {
        channel.send('Bienvenue ' + visitor + ' sur le serveur ' + visitor.guild.name + ' !')
    }
 
    if (nonMemberRole)
    {
         visitor.addRole(nonMemberRole)
    }
})
