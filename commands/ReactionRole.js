module.exports = {
    name: 'reactionrole',
    description: "Sets up roles and committees",

    async execute(message, args, Discord, client) {
        const channel = '806079231645057034';
        const shpetinas = message.guild.roles.cache.find(role => role.name === "shpetinas");
        const professional = message.guild.roles.cache.find(role => role.name === "professional");
        const shpejr = message.guild.roles.cache.find(role => role.name === "shpe jr. mentor");
        const techy = message.guild.roles.cache.find(role => role.name === "techy");
        const eventsPlanning = message.guild.roles.cache.find(role => role.name === "events planning committee");

        const shpetinasEmoji = '<:shpetinas:806086863244623883>';
        const professionalEmoji = '<:professional:806086863013412955>';
        const shpejrEmoji = '<:shpejr:806086863042641920>';
        const techEmoji = '<:tech:806086863025995778>';
        const eventsEmoji = '<:EPC:806300282492289095>';

        function emoji(id)
        {
            return client.emojis.get(id).toString();
        }

        let embed = new Discord.MessageEmbed()
            .setColor('#f0633d')
            .setTitle('Choose your committee!')
            .setDescription('Choosing your committee will alow you to interact with your fellow committee members! \n\n'
                + `${shpetinasEmoji} for Shpetinas Committee\n`
                + `${professionalEmoji} for Professional Committee\n`
                + `${shpejrEmoji} for Shpe Jr. Committee\n`
                + `${techEmoji} for Tech Committee\n`
                + `${eventsEmoji} for Events Planning Committee`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(shpetinasEmoji);
        messageEmbed.react(professionalEmoji);
        messageEmbed.react(shpejrEmoji);
        messageEmbed.react(techEmoji);
        messageEmbed.react(eventsEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === 'shpetinas') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(shpetinas);
                }
                if (reaction.emoji.name === 'professional') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(professional);
                }
                if (reaction.emoji.name === 'shpejr') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(shpejr);
                }
                if (reaction.emoji.name === 'tech') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(techy);
                }
                if (reaction.emoji.name === 'EPC') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventsPlanning);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === 'shpetinas') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(shpetinas);
                }
                if (reaction.emoji.name === 'professional') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(professional);
                }
                if (reaction.emoji.name === 'shpejr') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(shpejr);
                }
                if (reaction.emoji.name === 'tech') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(techy);
                }
                if (reaction.emoji.name === 'EPC') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventsPlanning);
                }
            } else {
                return;
            }
        });
    }
}