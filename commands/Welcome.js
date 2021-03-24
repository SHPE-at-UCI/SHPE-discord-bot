module.exports = {

    name: 'welcome',
    description: "Provides a welcome message",

    async execute(message, args, Discord, client){

        const channel = '823761790634033163';
        ////////////////////////////////////////// ROLES ///////////////////////////////////////////
        // Accessing Created Roles from Discord Server

        const generalMember = message.guild.roles.cache.find(role => role.name === "General Member");
        const professional = message.guild.roles.cache.find(role => role.name === "Professional");
        const alumni = message.guild.roles.cache.find(role => role.name === "Alumni");

        //////////////////////////////////// CUSTOM EMOJI ID's /////////////////////////////////////
        // Assigns ID's to Custom Emoji ID's.Use /: emojiname: in Dicord to find ID

        const generalMemberEmoji = '<:generalmember:824147467117002752>';
        const alumniEmoji = '<:alumni:824147467159076894>';
        const professionalEmoji = '<:professionalrole:824147466953818153>';

        //////////////////////////////////// MESSAGE EMBEDS /////////////////////////////////////
        // Creates Message Embed with Embed Color, Title, and Description

        const announceDescrpt = `Keep up with <#762902109451583488> for important updates about upcoming events, 
                                 workshops, and application deadlines! We will seldom use the @everyone ping, so
                                 please do not mute us but the @everyone ping will be used right before an event
                                 starts or when a deadline is approaching.`;
        const recapDescrpt = `Missed a **workshop** or an **event**? We'll have the resources for you posted for you to
                              look through on your own time. Recordings may be released a bit later, but check
                              respective text-channels for updates as to when we post it :smile:`;
        
        let rolesMessage = new Discord.MessageEmbed()
        .setColor('#f0633d')
        .setTitle('Roles & Names')
        .setDescription(`**To access the SHPE Discord Channels we ask that you change your nickname to your __real name__ and choose a role from the following:** \n
            If you are a part of __MemberSHPE__ please let a @Board member know in order to get access to our exclusive MemberSHPE channel!\n
            ${generalMemberEmoji} for General Members\n
            ${alumniEmoji} for Alumni\n
            ${professionalEmoji} for Professional\n
            you can choose your committee and other fun roles in the #roles text channel `);

        /*
        let anouncementsEmbed = new Discord.MessageEmbed()
            .setColor('#74aabe')
            .setTitle('Announcements')
            .setDescription(announceDescrpt);

        let eventsEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('Recaps')
            .setDescription(recapDescrpt);
        */

        // Message Embedded with Custom Committee Reactions
        await message.channel.send(rolesMessage)
        .then(sentEmbed => {
            sentEmbed.react(generalMemberEmoji)
            sentEmbed.react(alumniEmoji)
            sentEmbed.react(professionalEmoji)
        }).catch(() => console.error('One of the emojis failed to react.'));
    

        // Assigns Role to user when Reaction clicked or unselected
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (reaction.partial) await reaction.fetch();

            if (user.bot) return;

            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel)
            {
                switch (reaction.emoji.name) {
                    case "generalmember":
                        await reaction.message.guild.members.cache.get(user.id).roles.add(generalMember);
                        break;
                    case "alumni":
                        await reaction.message.guild.members.cache.get(user.id).roles.add(alumni);
                        break;
                    case "professionalrole":
                        await reaction.message.guild.members.cache.get(user.id).roles.add(professional);
                        break;
                    default:
                        break;
                }
            }
        });


        // Remove role reaction
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (reaction.partial) await reaction.fetch();

            if (user.bot) return;

            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel)
            {
                switch (reaction.emoji.name) {
                    case "generalmember":
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(generalMember);
                        break;
                    case "alumni":
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(alumni);
                        break;
                    case "professionalrole":
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(professional);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}