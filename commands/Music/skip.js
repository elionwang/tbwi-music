module.exports = {
  name: 'skip',
  aliases: ['s'],
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Skip]
  $description[[$songInfo[title]]($songInfo[url]) is geskipt. $customEmoji[bs_laugh;861677703455703061]]
  $color[23eee2]
  $skipSong
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}