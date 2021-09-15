module.exports = {
  name: 'remove',
  aliases: ['r'],
  description: 'Verwijdert een specifiek nummer uit de wachtrij.',
  usage: '_remove <nummer>',
  category: 'Music',
  code: ` $description[[$get[song]]($get[url]) is uit de wachtrij gehaald. $customEmoji[bs_laugh;861677703455703061]]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $movesong[$sum[$message[1];1];]
  $color[23eee2]
  $let[song;$songInfo[title;$message]]
  $let[url;$songInfo[url;$message]]
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$queueLength>$message;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Op dat nummer in de wachtrij is er niks. $customEmoji[bs_blank;861677703455703061]}{field:Usage:\`$commandInfo[$commandName;usage]\`}]
  $onlyIf[$isNumber[$message]==true;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Dat is niet een geldig nummer. $customEmoji[bs_bothered;861677703455703061]}{field:Usage:\`$commandInfo[$commandName;usage]\`}]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]
  $onlyIf[$getUserVar[$commandName]==1;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je hebt geen permission voor deze command $customEmoji[bs_bothered;861677703455703061].}]`
}

//  $movesong[$sum[$message[1];1];]
// $moveSong[$message;$sum[$queueLength;1]]
// $description[[$songInfo[title;$sum[$message[1];1]]]($songInfo[url;$sum[$message[1];1]]) is uit de wachtrij gehaald. $customEmoji[bs_laugh;861677703455703061]]