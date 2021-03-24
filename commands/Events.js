module.exports = {

    name: 'events',
    description: "Event Interface",

    //OUR PLAN FOR THIS COMMAND IS TO EVENTUALLY HAVE A CREATEEVENT FUNCTION, WHERE BOARD MEMBERS WOULD GET A DM AND THEY WOULD FILL OUT "generalInfo" AND "zoomLink" VARIABLE INFORMATION

    async execute(message, args, Discord, client) {
        const channel = '804571979259576334';

        const generalInfo = `**__What__**
                            Join our board for a scribbl.io social!

                            **__When__**
                            5 pm on Wednesday`;

        const zoomLink = `somezoomlink.com`;


        let generalEmbed = new Discord.MessageEmbed()
            .setColor('#f0633d')
            .setTitle('Board Social') // insert event title
            .setDescription(generalInfo);

        let zoomEmbed = new Discord.MessageEmbed()
            .setColor('#74aabe')
            .setTitle('Zoom Link')
            .setDescription(zoomLink);

        let reactEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('Will you be there?')
            .setDescription('React to this message if you will be attending!');

        await message.channel.send(generalEmbed)
        await message.channel.send(zoomEmbed)
        await message.channel.send(reactEmbed)


    }
}