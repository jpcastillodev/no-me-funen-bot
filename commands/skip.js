module.exports.run = async (bot, message, args) => {
    try{

        if (!message.member.voice.channel) return message.channel.send('No estas en un canal imbecil');
        
        let queue = await bot.distube.getQueue(message);
        
        if(queue) {
            bot.distube.skip(message)
            
        } else if (!queue) {
            return
        };
    }catch(err){
        console.log(err)
    }
}
    
module.exports.config = {
    name: "skip",
    aliases: ["s"]
}
