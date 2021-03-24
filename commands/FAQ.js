module.exports = {

    name: 'FAQ',
    description: "Provides the FAQ's",

    async execute(message, args, Discord, client) {
        const channel = '816496903142637568';

        const generalFAQ = `**__How do I join SHPE UCI?__**
                            Simple. Just join any of our events! If you want to be an "exclusive" member with great perks, you can join MemberSHPE. For more information, contact @Board

                            **__How do I join MemberSHPE?__**
                            To join MemberSHPE contact our MemberSHPE chair, Alina Vizcaya`;

        const committees = `**__How much time do I need to put if I want to join a committee?__**
                            0 time! Committees are made for you and for your own time. Feel free to check out any committee as you please! There is no time commitment.

                            **__What does EPC do?__**
                            EPC stands for "Events Planning Committee."  EPC plans and organizes our socials and major events during the holidays. It is a way for you to tell us what you want us to do in our socials!

                            **__What does SHPE Jr do?__**
                            SHPE Jr is an outreach committee. We communicate with high school students to promote and encourage higher STEM education.

                            **__What does SHPEtinas do?__**
                            SHPEtinas committee accelerates and affirms Latina representation at all levels of STEM corporate and academic leadership.

                            **__What does tech committee do?__**
                            At Tech Committee, we build the software that we use for SHPE UCI and encourage everyone to professionally grow in technical mastery through workshops, mock interviews, and projects.

                            **__What does Professional Committee do?__**
                            Professional Committee is made to help you advance your professionalism, whether in your resume, networking, interviewing, and any other skills needed for your career development.`;


        let generalEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('General FAQ')
            .setDescription(generalFAQ);

        let committeesEmbed = new Discord.MessageEmbed()
            .setColor('#74aabe')
            .setTitle('Committees')
            .setDescription(committees);

        await message.channel.send(generalEmbed)
        await message.channel.send(committeesEmbed)

    }
}