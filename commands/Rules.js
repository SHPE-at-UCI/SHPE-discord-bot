module.exports = {

    name: 'rules',
    description: "Provides the rules",

    async execute(message, args, Discord, client) {
        const channel = '823778587571388456';

        const rulesDescrpt = `Insert rules here`;


        let suggestionsEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('Rules')
            .setDescription(rulesDescrpt);

        await message.channel.send(rulesEmbed)
    }
}