const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client();

dotenv.config();

const prefix = '!';

client.once('ready', () => {
    console.log('SHPE bot is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === "welcome"){
        let welcome = "Welome to the **SHPE Tech Comittee** Server";
        message.channel.send(welcome,{files:["./shpelogo.jpg"]});
    }
    
});

client.login(process.env.DISCORD_KEY);