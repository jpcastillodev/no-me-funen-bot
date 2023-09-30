const { Client, GatewayIntentBits, Collection, Partials } = require('discord.js');
const { generateDependencyReport } = require('@discordjs/voice');
const { loadCommands } = require('./utils/loadCommands');
const { YtDlpPlugin } = require("@distube/yt-dlp")
const config = require('./settings.json');
const { DisTube } = require('distube')

console.log(generateDependencyReport());

const bot = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});

const distube = new DisTube(bot, { plugins: [new YtDlpPlugin({ update: false })] })

distube.on("playSong", (message, queue, song) => {
    // message.channel.send(
    //     `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
    // )
})

bot.distube = distube
bot.aliases = new Collection();
bot.commands = new Collection();


require('./utils/loadEvents')(bot);
require('./utils/loadCommands')(bot);

bot.login(config.token);