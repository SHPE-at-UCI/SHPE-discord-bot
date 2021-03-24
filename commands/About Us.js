module.exports = {

    name: 'about',
    description: "Provides an about us message",

    async execute(message, args, Discord, client) {
        const channel = '824164856793923584';

        const missionDescrpt = `**__Welcome to SHPE UCI!__**

                                Here, our mission is simple: Change lives by empowering the Hispanic community to realize its fullest potential. We do this through STEM awareness, access, support, and development. With this mission we are able to assist you in your professional and academic goals, while at the same time giving you a safe place to grow and thrive. 

                                SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers.`;
        const coreDescrpt = `**Familia**
                                We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best.

                             **Service**
                                We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding.

                             **Education**
                                We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other.

                            **Resilience**
                                We embrace our diverse cultures and communities, which enable us to adapt, thrive, and persist with optimism.

                             **SHPE UCI**
                                We host a vast amount of programs and events with these values in mind, ranging from exciting socials to empowering mock interviews. These events are carefully crafted and executed by each of our 5 committees: Professional Committee, Events Planning Committee, Tech Committee, SHPEtinas, and SHPE Jr. Feel free to stop by at any committee! 

                             **__Welcome to our Familia!__**`;


        let missionEmbed = new Discord.MessageEmbed()
            .setColor('#001f5b')
            .setTitle('Our Mission')
            .setDescription(missionDescrpt);

        let coreEmbed = new Discord.MessageEmbed()
            .setColor('#f0633d')
            .setTitle('Our 4 Core Values')
            .setDescription(coreDescrpt);

        await message.channel.send(missionEmbed)
        await message.channel.send(coreEmbed)
    }
}