const aoijs = require("aoi.js")
const TOKEN = process.env['TOKEN'];
const PREFIX = process.env['PREFIX']
const keepAlive = require('./server.js');


const bot = new aoijs.Bot({
token: TOKEN, //Discord Bot Token
prefix: PREFIX, //Discord Bot Prefix
revertReading: true
})
bot.onMessage() //Allows to execute Commands

bot.variables({
Name: "Value",
Name2: "Value2"
})

bot.status({
  text: "Music",
  type: "LISTENING",
  time: 12
})

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.loadCommands(`./commands/`)

keepAlive();