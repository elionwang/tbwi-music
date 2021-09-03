module.exports = {
  name: 'clear',
  aliases: ['clearqueue', 'cq'],
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $color[23eee2]
  $clearSongQueue
  $title[Queue clear $customEmoji[bs_rage;861677703455703061]]
  $description[\`$queueLength\` nummer(s) zijn uit de wachtrij gehaald. $customEmoji[bs_laugh;861677703455703061]]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}