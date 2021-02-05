const { execute } = require("./ReactionRole");

module.exports = {
    name: 'welcome',
    description: "Provides a welcome message",
    //test comment
    async execute(message, args, Discord, client){
        let welcome = "Welcome to the **SHPE Tech Comittee** Server";
        const shpetinasEmoji = '<:shpetinas:806086863244623883>';
        const professionalEmoji = '<:professional:806086863013412955>';
        const shpejrEmoji = '<:shpejr:806086863042641920>';
        const techEmoji = '<:tech:806086863025995778>';
        const eventsEmoji = '<:EPC:806300282492289095>';
        const rolesDescrpt = `To access the SHPE Discord Channels we ask that you choose a role from the following: <#806079231645057034> text-channel!`;
        const announceDescrpt = `Keep up with <#762902109451583488> for important updates about upcoming events, workshops, and application deadlines! 
                                 We will seldom use the @everyone ping, so please do not mute us But the @everyone ping will be used right before an event
                                 starts or when a deadline is approaching.`;
        const recapDescrpt = `Missed a workshop or an event? We'll have the resources for you posted for you to look through on your own time. Recordings 
                              may be released a bit later, but look in that text-channel for updates as to when we post it :smile:`;
        
        let rolesEmbed = new Discord.MessageEmbed()
        .setColor('#f0633d')
        .setTitle('Roles & Names')
        .setDescription('**To access the SHPE Discord Channels we ask that you change your nickname to your real name and choose a role from the following:** \n\n'
            + `${shpetinasEmoji} for General Members\n`
            + `${professionalEmoji} for Alumni\n`
            + `${shpejrEmoji} for Proffesional\n`
            + `${techEmoji} for Just Vibing\n`
            + `you can choose your committee and other fun roles in the <#806079231645057034> text channel` );

        let anouncementsEmbed = new Discord.MessageEmbed()
            .setColor('#74aabe')
            .setTitle('Announcements')
            .setDescription(announceDescrpt);

        let eventsEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('Recaps')
            .setDescription(recapDescrpt);

        message.channel.send(rolesEmbed).then(msg => { message.channel.send(anouncementsEmbed) }).then(msg => { message.channel.send(eventsEmbed) });
    }
}