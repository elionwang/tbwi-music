module.exports = {
  name: 'lyrics',
  description: 'Geeft de lyrics van het huidige nummer.',
  usage: '_lyrics',
  aliases: ['l'],
  category: 'Music',
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $addField[Artiest(en);$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];author;]]
  $addField[Titel;$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];title;]]
  $title[Lyrics $customEmoji[bs_happy;861677703455703061]] 
  $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]} {description:Geen lyrics gevonden. $customEmoji[bs_sad;861677703455703061]}]]
  $footer[Opgevraagd door: $username;$authorAvatar]
  $addTimestamp
  $color[23eee2]
  $botTyping
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}