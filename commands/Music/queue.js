module.exports = {
  name: 'queue',
  description: 'Laat de wachtrij zien.',
  usage: '_queue',
  aliases: ['q'],
  category: 'Music',
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Queue $customEmoji[bs_smile;861677703455703061]]
  $addField[Huidig Nummer;[$songInfo[title]]($songInfo[url]) | <@!$songInfo[userID]>]
  $description[$queue[1;10;{number} - {title} | <@{userID}> $customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]]
  $color[23eee2]
  $footer[Wachtrij: $queueLength]
  $addTimestamp
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$queueLength!=0;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Er staan geen nummers in de wachtrij. $customEmoji[bs_shocked;861677703455703061]}]
  $onlyIf[$getUserVar[$commandName]==1;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je hebt geen permission voor deze command $customEmoji[bs_bothered;861677703455703061].}]`
}