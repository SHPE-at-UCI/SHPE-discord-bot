module.exports = {
    name: 'reactionrole',
    description: "Sets up roles and committees",

    async execute(message, args, Discord, client)
    {
        ////////////////////////////////////////// ROLES ///////////////////////////////////////////
        // Accessing Created Roles from Discord Server

        const channel = '806079231645057034'; // "Roles" Channel ID
        const shpetinas = message.guild.roles.cache.find(role => role.name === "shpetinas");
        const professional = message.guild.roles.cache.find(role => role.name === "professional");
        const shpejr = message.guild.roles.cache.find(role => role.name === "shpe jr. mentor");
        const techy = message.guild.roles.cache.find(role => role.name === "techy");
        const eventsPlanning = message.guild.roles.cache.find(role => role.name === "events planning committee");

        const freshman = message.guild.roles.cache.find(role => role.name === "freshman");
        const sophomore = message.guild.roles.cache.find(role => role.name === "sophopmore");
        const junior = message.guild.roles.cache.find(role => role.name === "junior");
        const senior = message.guild.roles.cache.find(role => role.name === "senior");
        const transfer = message.guild.roles.cache.find(role => role.name === "transfer");

        //////////////////////////////////// CUSTOM EMOJI ID's /////////////////////////////////////
        // Assigns ID's to Custom Emoji ID's.Use /: emojiname: in Dicord to find ID

        // COMMITTEES
        const shpetinasEmoji = '<:shpetinas:806086863244623883>';
        const professionalEmoji = '<:professional:806086863013412955>';
        const shpejrEmoji = '<:shpejr:806086863042641920>';
        const techEmoji = '<:tech:806086863025995778>';
        const eventsEmoji = '<:EPC:806300282492289095>';

        // YEAR
        const oneEmoji = '<:1_:806090740559773706>';
        const twoEmoji = '<:2_:806090740211646485>';
        const threeEmoji = '<:3_:806090740421492746>';
        const fourEmoji = '<:4_:807035515646902303>';
        const transferEmoji = '<:transfer:806090740030898197>';

        // MEMBER STATUS


        //////////////////////////////////// MESSAGE EMBEDS /////////////////////////////////////
        // Creates Message Embed with Embed Color, Title, and Description

        // COMMITTEE
        let embed1 = new Discord.MessageEmbed()
            .setColor('#f0633d')
            .setTitle('JOIN YOUR COMMITTEES')
            .setDescription('Choosing your committee will alow you to interact with your fellow committee members! \n\n'
                + `${shpetinasEmoji} for Shpetinas Committee\n`
                + `${professionalEmoji} for Professional Committee\n`
                + `${shpejrEmoji} for Shpe Jr. Committee\n`
                + `${techEmoji} for Tech Committee\n`
                + `${eventsEmoji} for Events Planning Committee`);

        // Message Embedded with Custom Committee Reactions
        let committeeEmbed = await message.channel.send(embed1);
        committeeEmbed.react(shpetinasEmoji);
        committeeEmbed.react(professionalEmoji);
        committeeEmbed.react(shpejrEmoji);
        committeeEmbed.react(techEmoji);
        committeeEmbed.react(eventsEmoji);

        // YEAR
        let embed2 = new Discord.MessageEmbed()
            .setColor('#74aabe')
            .setTitle('YOUR YEAR')
            .setDescription('What year are you in? Get to know fellow SHPEsters of your class! \n\n'
                + `${oneEmoji} for Freshman\n`
                + `${twoEmoji} for Sophomore\n`
                + `${threeEmoji} for Junior\n`
                + `${fourEmoji} for Senior\n`
                + `${transferEmoji} I'm also a Transfer Student!`);

        // Message Embedded with Custom Year Reactions
        let yearEmbed = await message.channel.send(embed2);
        yearEmbed.react(oneEmoji);
        yearEmbed.react(twoEmoji);
        yearEmbed.react(threeEmoji);
        yearEmbed.react(fourEmoji);
        yearEmbed.react(transferEmoji);

        // Assigns Committee Role to user when Reaction Clicked
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();

            if (reaction.partial) await reaction.fetch();

            if (user.bot) return;

            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel)
            {
                // ADD COMMITTEE REACTION
                if (reaction.emoji.name === 'shpetinas')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(shpetinas);
                }
                if (reaction.emoji.name === 'professional')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(professional);
                }
                if (reaction.emoji.name === 'shpejr')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(shpejr);
                }
                if (reaction.emoji.name === 'tech')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(techy);
                }
                if (reaction.emoji.name === 'EPC')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventsPlanning);
                }
                // ADD YEAR REACTION
                if (reaction.emoji.name === '1_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(freshman);
                }
                if (reaction.emoji.name === '2_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sophomore);
                }
                if (reaction.emoji.name === '3_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(junior);
                }
                if (reaction.emoji.name === '4_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(senior);
                }
                if (reaction.emoji.name === 'transfer') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(transfer);
                }
            }

            else
            {
                return;
            }

        });

        // Removes Committee Role from user when Reaction Unselected
        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();

            if (reaction.partial) await reaction.fetch();

            if (user.bot) return;

            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel)
            {
                // ADD COMMITTEE REACTION
                if (reaction.emoji.name === 'shpetinas')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(shpetinas);
                }
                if (reaction.emoji.name === 'professional')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(professional);
                }
                if (reaction.emoji.name === 'shpejr')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(shpejr);
                }
                if (reaction.emoji.name === 'tech')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(techy);
                }
                if (reaction.emoji.name === 'EPC')
                {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventsPlanning);
                }

                // ADD YEAR REACTION
                if (reaction.emoji.name === '1_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(freshman);
                }                                                               
                if (reaction.emoji.name === '2_') {                             
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sophomore);
                }                                                                 
                if (reaction.emoji.name === '3_') {                               
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(junior);
                }                                                             
                if (reaction.emoji.name === '4_') {                           
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(senior);
                }                                                                 
                if (reaction.emoji.name === 'transfer') {                         
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(transfer);
                }
            }

            else
            {
                return;
            }
        });
    }
}