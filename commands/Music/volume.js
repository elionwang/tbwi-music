module.exports = [{
  name: 'volume',
  aliases: ['v', 'vol'],
  code: `$reactionCollector[$splitText[1];everyone;1m;🔈,🔉,🔊;awaitReaction5,awaitReaction6,awaitReaction7;yes]
  $textSplit[$sendMessage[{title:Volume 🔊} {author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif} {description:Klik hier op de volume van jouw keuze $customEmoji[bs_ecstatic;861677703455703061]:
  1 - 🔈 50%
  2 - 🔉 100%
  3 - 🔊 150%}{color:23eee2}{footer:Volume instelligen opgevraagd door $username[$authorID].};yes]; ]
  $onlyIf[$voiceID!=;{color:RED} {title:Error $customEmoji[bs_stunned;861677703455703061]} {description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}, {
  type: 'awaitedCommand',
  name: 'awaitReaction5',
  code: `$volume[50]`
}, {
  type: 'awaitedCommand',
  name: 'awaitReaction6',
  code: `$volume[100]`
}, {
  type: 'awaitedCommand',
  name: 'awaitReaction7',
  code: `$volume[150]`
}]