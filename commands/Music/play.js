module.exports = {
  name: 'play',
  aliases: ['p'],
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$title[Added]
  $color[23eee2]
  $description[Ik heb $playSong[$message;5m;yes;no;{color:RED}{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{description:Er ging iets fout. Probeer het later opnieuw.}] toegevoegd aan de wachtrij!]
    $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}