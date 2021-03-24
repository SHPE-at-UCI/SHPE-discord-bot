module.exports = {
    name: 'reactionrole',
    description: "Sets up roles and committees",

    async execute(message, args, Discord, client)
    {
        ////////////////////////////////////////// ROLES ///////////////////////////////////////////
        // Accessing Created Roles from Discord Server

        const channel = '806079231645057034'; // "Roles" Channel ID
        const shpetinas = message.guild.roles.cache.find(role => role.name === "Shpetinas");
        const professional = message.guild.roles.cache.find(role => role.name === "Professional");
        const shpejr = message.guild.roles.cache.find(role => role.name === "SHPE Jr.");
        const techy = message.guild.roles.cache.find(role => role.name === "Tech");
        const eventsPlanning = message.guild.roles.cache.find(role => role.name === "Events Planning Committee");

        const first = message.guild.roles.cache.find(role => role.name === "First Year");
        const second = message.guild.roles.cache.find(role => role.name === "Second Year");
        const third = message.guild.roles.cache.find(role => role.name === "Third Year");
        const fourth = message.guild.roles.cache.find(role => role.name === "Fourth Year");
        const fifth = message.guild.roles.cache.find(role => role.name === "Fifth Year");
        const transfer = message.guild.roles.cache.find(role => role.name === "Transfer");

        const aerospaceE = message.guild.roles.cache.find(role => role.name === "Aerospace Engineering");
        const chemicalE = message.guild.roles.cache.find(role => role.name === "Chemical Engineering");
        const civilE = message.guild.roles.cache.find(role => role.name === "Civil Engineering");
        const computerE = message.guild.roles.cache.find(role => role.name === "Computer Engineering");
        const computerSciE = message.guild.roles.cache.find(role => role.name === "Computer Science and Engineering");
        const electricalE = message.guild.roles.cache.find(role => role.name === "Electrical Engineering");
        const environmentalE = message.guild.roles.cache.find(role => role.name === "Environmental Engineering");
        const mechanicalE = message.guild.roles.cache.find(role => role.name === "Mechanical Engineering");
        const biologicalSci = message.guild.roles.cache.find(role => role.name === "Biological Sciences");
        const computerSci = message.guild.roles.cache.find(role => role.name === "Computer Science");


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
        const fourEmoji = '<:4_:823787269193990155>';
        const fifthEmoji = '<:5_:823787269264637952>';
        const transferEmoji = '<:transfer:807045116904472587>';

        // MAJOR
        // MUST USE EMOJIS, FOR EXAMPLE DON'T USE 'rocket' INSTEAD OF OF 🚀
        const aero = '🚀';
        const chem = '🔋';
        const civil = '🛠';
        const comp = '💻';
        const cse = '🖥';
        const elec = '🔌';
        const env = '🌴';
        const meche = '⚙️';
        const biosci = '🦖';
        const compsci = '🖨';
        const notHere = '😭';



        //////////////////////////////////// MESSAGE EMBEDS /////////////////////////////////////
        // Creates Message Embed with Embed Color, Title, and Description

        // COMMITTEE
        let embed1 = new Discord.MessageEmbed()
            .setColor('#f0633d')
            .setTitle('YOUR SHPE COMMITTEES')
            .setDescription('Choosing your committee will allow you to interact with your fellow committee members! \n\n'
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
                + `${transferEmoji} I'm a Transfer Student!\n`
                + `${oneEmoji} for 1st Year\n`
                + `${twoEmoji} for 2nd Year\n`
                + `${threeEmoji} for 3rd Year / 1st Year Transfer\n`
                + `${fourEmoji} for 4th Year / 2nd Year Transfer\n`
                + `${fifthEmoji} for 5th Year / 3rd Year Transfer`);

        // Message Embedded with Custom Year Reactions
        let yearEmbed = await message.channel.send(embed2);
        yearEmbed.react(transferEmoji);
        yearEmbed.react(oneEmoji);
        yearEmbed.react(twoEmoji);
        yearEmbed.react(threeEmoji);
        yearEmbed.react(fourEmoji);
        yearEmbed.react(fifthEmoji);

        // MAJOR
        let embed3 = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('YOUR MAJOR')
            .setDescription('What is your major? \n\n'
                + `${aero} Aerospace Engineering\n`
                + `${chem} Chemical Engineering\n`
                + `${civil} Civil Engineering\n`
                + `${comp} Computer Engineering\n`
                + `${cse} Computer Science and Engineering\n`
                + `${elec} Electrical Engineering\n`
                + `${env} Environmental Engineering\n`
                + `${meche} Mechanical Engineering\n`
                + `${biosci} Biological Sciences\n`
                + `${compsci} Computer Science\n`
                + `${notHere} My Major isn't Here!`);


        // Message Embedded with Custom Year Reactions
        let majorEmbed  = await message.channel.send(embed3);
        majorEmbed.react(aero);
        majorEmbed.react(chem);
        majorEmbed.react(civil);
        majorEmbed.react(comp);
        majorEmbed.react(cse);
        majorEmbed.react(elec);
        majorEmbed.react(env);
        majorEmbed.react(meche);
        majorEmbed.react(biosci);
        majorEmbed.react(compsci);
        majorEmbed.react(notHere);

        ///////////////////////////////////// ASSIGN ROLES //////////////////////////////////////
        // Assigns Role to user when Reaction clicked or unselected

        // ADD
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
                    await reaction.message.guild.members.cache.get(user.id).roles.add(first);
                }
                if (reaction.emoji.name === '2_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(second);
                }
                if (reaction.emoji.name === '3_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(third);
                }
                if (reaction.emoji.name === '4_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fourth);
                }
                if (reaction.emoji.name === '5_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(fifth);
                }
                if (reaction.emoji.name === 'transfer') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(transfer);
                }

                // ADD MAJOR REACTION
                        // MUST USE EMOJIS, FOR EXAMPLE DON'T USE 'rocket' INSTEAD OF OF 🚀
                if (reaction.emoji.name === '🚀') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(aerospaceE);
                }
                if (reaction.emoji.name === '🔋') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(chemicalE);
                }
                if (reaction.emoji.name === '🛠') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(civilE);
                }
                if (reaction.emoji.name === '💻') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(computerE);
                }
                if (reaction.emoji.name === '🖥') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(computerSciE);
                }
                if (reaction.emoji.name === '🔌') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(electricalE);
                }
                if (reaction.emoji.name === '🌴') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(environmentalE);
                }
                if (reaction.emoji.name === '⚙️') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mechanicalE);
                }
                if (reaction.emoji.name === '🦖') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(biologicalSci);
                }
                if (reaction.emoji.name === '🖨') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(computerSci);
                }
            }

            else
            {
                return;
            }

        });

        // REMOVE
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
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(first);
                }                                                               
                if (reaction.emoji.name === '2_') {                             
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(second);
                }                                                                 
                if (reaction.emoji.name === '3_') {                               
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(third);
                }                                                             
                if (reaction.emoji.name === '4_') {                           
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(fourth);
                }
                if (reaction.emoji.name === '5_') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(fifth);
                }
                if (reaction.emoji.name === 'transfer') {                         
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(transfer);
                }

                // ADD MAJOR REACTION
                        // MUST USE EMOJIS, FOR EXAMPLE DON'T USE 'rocket' INSTEAD OF OF 🚀
                if (reaction.emoji.name === '🚀') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(aerospaceE);
                }                                                               
                if (reaction.emoji.name === '🔋') {                        
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(chemicalE);
                }                                                                
                if (reaction.emoji.name === '🛠') {                           
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(civilE);
                }                                                               
                if (reaction.emoji.name === '💻') {                       
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(computerE);
                }                                                                
                if (reaction.emoji.name === '🖥') {                         
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(computerSciE);
                }                                                                 
                if (reaction.emoji.name === '🔌') {                    
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(electricalE);
                }                                                                 
                if (reaction.emoji.name === '🌴') {                        
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(environmentalE);
                }                                                               
                if (reaction.emoji.name === '⚙️') {                           
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mechanicalE);
                }                                                                
                if (reaction.emoji.name === '🦖') {                           
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(biologicalSci);
                }                                                                 
                if (reaction.emoji.name === '🖨') {                          
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(computerSci);
                }
            }

            else
            {
                return;
            }
        });
    }
}