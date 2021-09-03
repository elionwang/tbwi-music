module.exports = {
  name: 'queue',
  aliases: ['q'],
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Queue $customEmoji[bs_smile;861677703455703061]]
  $addField[Huidig Nummer;[$songInfo[title]]($songInfo[url]) | <@!$songInfo[userID]>]
  $description[$queue[1;10;{number} - {title} | <@{userID}>]]
  $color[23eee2]
  $footer[Wachtrij: $queueLength]
  $addTimestamp
  $onlyIf[$queueLength!=0;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Er staan geen nummers in de wachtrij. $customEmoji[bs_shocked;861677703455703061]}]`
}