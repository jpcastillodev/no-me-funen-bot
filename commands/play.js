module.exports.run = async (bot, message, args) => {
    try {
        if (!message.member.voice.channel) return message.channel.send('No estas en un canal imbecil');

        const music = args.join(" ");
        console.log("music", music)
        bot.distube.play(message.member.voice.channel, music, { message })
    } catch (err) {
        console.log(err)
    }
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
