module.exports = {

    name: 'suggestions',
    description: "Provides a suggestion box style message",

    async execute(message, args, Discord, client) {
        const channel = '823778210239086642';

        const suggestionDescrpt = `We are always improving our server! If you have any feedback, comments, or suggestions, drop them here!`;


        let suggestionsEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('Suggestions?')
            .setDescription(suggestionDescrpt);
    }
}