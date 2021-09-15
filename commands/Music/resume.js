module.exports = {
  name: 'resume',
  description: 'Hervat het huidige nummer.',
  usage: '_resume',
  category: 'Music',
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Resume]
  $description[[$songInfo[title]]($songInfo[url]) is hervat. $customEmoji[bs_thanks;861677703455703061]]
  $color[23eee2]
  $resumeSong
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]
  $onlyIf[$getUserVar[$commandName]==1;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je hebt geen permission voor deze command $customEmoji[bs_bothered;861677703455703061].}]`
}