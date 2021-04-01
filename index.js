//libraries
const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

//global variables
const prefix = '!';
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

// //dotenv is used to set environment variable from your like your discord api key
dotenv.config();

//Discord.collection() works the same way array.map()
client.commands = new Discord.Collection();

//command files is an array with all the command file names
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//maps file names to actual commands
for (const file of commandFiles) {
    let command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('SHPE bot is online!')
    // client.channels.cache.get("824154346031284225").send(`!welcome`)
    client.channels.cache.get("824154346031284225").send(`!reactionrole`)     
>>>>>>> 62d34c0c7b5ae9f8bc5674e187fb88ce8a7aed9a
});

client.on('message', message => {
    //look for !
    if(!message.content.startsWith(prefix)) return;
    
    // if(message.channel.id === "824154346031284225"){
    //     message.channel.bulkDelete(1)
    //     .catch(console.error);
    // }

    if(message.channel.id === "824154346031284225"){
        message.channel.bulkDelete(4)
        .catch(console.error);
    }

    //parse message to get commands
    const args = message.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();

    // message.delete({ timeout: 1000 });

    switch (command) {
        case 'reactionrole':
            client.commands.get('reactionrole').execute(message, Discord, client);
            break;
        case 'welcome':
            client.commands.get('welcome').execute(message, args, Discord, client);
            break;
        case 'suggest':
            client.commands.get('suggestions').execute(message, args, Discord, client);
            break;
        case 'faq':
            client.commands.get('FAQ').execute(message, args, Discord, client);
            break;
        case 'rules':
            client.commands.get('rules').execute(message, args, Discord, client);
            break;
        case 'event':
            client.commands.get('events').execute(message, args, Discord, client);
            break;
        case 'about':
            client.commands.get('about').execute(message, args, Discord, client);
            break;
        case 'cac':
            client.commands.get('create-a-channel').execute(message, args, Discord, client);

        default:
            break;
    }
});


client.login(process.env.SHPE_KEY);