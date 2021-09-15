const aoijs = require("aoi.js")
const TOKEN = process.env['TOKEN'];
const PREFIX = process.env['PREFIX']
const keepAlive = require('./server.js');


const bot = new aoijs.Bot({
token: TOKEN, //Discord Bot Token
prefix: PREFIX, //Discord Bot Prefix
revertReading: true
})

bot.variables({
    clear: "1",
    lyrics: "1",
    remove: "1",
    volume: "1",
    skip: "1",
    queue: "1",
    loop: "1",
    resume: "1",
    play: "1",
    pause: "1",
    jump: "1",
})

bot.status({
  text: "Music | https://docs.tbwimusic.ml",
  type: "LISTENING",
  time: 30,
  text: "Lars Prijzen 🛐",
  type: "PLAYING",
  time: 30
})

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.onMessage() //Allows to execute Commands

bot.loadCommands(`./commands/`)

keepAlive();