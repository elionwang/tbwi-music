module.exports = {
  name: 'pause',
  description: 'Pauzeert het huidige nummer.',
  usage: '_pause',
  category: 'Music',
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Pause]
  $description[[$songInfo[title]]($songInfo[url]) is gepauzeerd. $customEmoji[bs_blank;861677703455703061]]
  $color[23eee2]
  $pauseSong
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}