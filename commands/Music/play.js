module.exports = [{
  name: 'play',
  aliases: ['p'],
  description: 'Speelt het genoemde nummer in jouw voicechat.',
  usage: '_play <titel>',
  category: 'Music',
  code: 
  `$if[$message!=]
  $loop[1;prune]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$title[Added]
  $color[23eee2]
  $description[Ik heb $playSong[$message;5m;yes;no;{color:RED}{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{description:Er ging iets fout. Probeer het later opnieuw.}] toegevoegd aan de wachtrij! $customEmoji[bs_happy;861677703455703061]]
  $botTyping
  $else
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Error $customEmoji[bs_stunned;861677703455703061]]
  $description[Geef alsjeblieft aan wat je wil afspelen. $customEmoji[bs_annoyed;861677703455703061] Bijv: \`_play <titel>\`]
  $color[RED]
  $endif
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}, {
  type: 'awaitedCommand',
  name: 'prune',
  code: `$if[$isPrune==false]
  $replaceText[$replaceText[$pruneMusic;true;];false;]
  $endif`
}]