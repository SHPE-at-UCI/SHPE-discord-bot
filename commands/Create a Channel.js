module.exports = {

    name: 'create-a-channel',
    description: "Provides an option for members to create a channel",

    async execute(message, args, Discord, client) {

        const channelDescrpt = `As per our rules, to create a channel in this category, you need a group of three people to achieve this. Send a channel suggestion here. If your message receives 3 reactions, not including your own, we will create this channel if it is within our community guidelines.`;


        let channelEmbed = new Discord.MessageEmbed()
            .setColor('#001f5b')
            .setTitle('Create A Channel!')
            .setDescription(channelDescrpt);

        await message.channel.send(channelEmbed)
    }
}