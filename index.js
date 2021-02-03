const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

dotenv.config();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('SHPE bot is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === "welcome"){
        let welcome = "Welcome to the **SHPE Tech Comittee** Server";
        message.channel.send(welcome,{files:["./2021Tech.png"]});
    }

    const rolesDescrpt = `Choose your roles & committees in the <#806079231645057034> text-channel!`;
    const announceDescrpt = `Keep up with <#762902109451583488> for important updates about upcoming events, workshops, and application deadlines! We will seldom use the @everyone ping, so please do not mute us But the @everyone ping will be used right before an event starts or when a deadline is approaching.`;
    const recapDescrpt = `Missed a workshop or an event? We'll have the resources for you posted for you to look through on your own time. Recordings may be released a bit later, but look in that text-channel for updates as to when we post it :smile:`
    if (command === "s") {
        let rolesEmbed = new Discord.MessageEmbed()
            .setColor('#f0633d')
            .setTitle('Roles')
            .setDescription(rolesDescrpt);

        let anouncementsEmbed = new Discord.MessageEmbed()
            .setColor('#74aabe')
            .setTitle('Announcements')
            .setDescription(announceDescrpt);

        let eventsEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('Recaps')
            .setDescription(announceDescrpt);

        message.channel.send(rolesEmbed).then(msg => { message.channel.send(anouncementsEmbed) }).then(msg => { message.channel.send(eventsEmbed) });
    }
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }


    
});


client.login(process.env.DISCORD_KEY);