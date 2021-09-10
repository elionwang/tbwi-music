module.exports = {
  name: 'jump',
  description: 'Slaat het huidige nummer over en gaat naar een specifiek nummer.',
  usage: '_jump <nummer>',
  aliases: ['j', 'skipto'],
  category: 'Music',
  code: `$skipTo[$message]
  $title[Jump]
  $color[23eee2]
  $description[[$songInfo[title]]($songInfo[url]) is geskipt. \nVolgende nummer: [$songInfo[title;$message]]($songInfo[url;$message]) $customEmoji[bs_laugh;861677703455703061]]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $footer[Wachtrij: $queueLength]
  $addTimestamp
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$queueLength>$message;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Op dat nummer in de wachtrij is er niks. $customEmoji[bs_blank;861677703455703061] Gebruik bijv. \`_jump 3\`}]
  $onlyIf[$isNumber[$message]==true;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Dat is niet een geldig nummer. $customEmoji[bs_bothered;861677703455703061] Gebruik bijv. \`_jump 3\`}]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}