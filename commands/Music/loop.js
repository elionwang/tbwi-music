module.exports = {
  name: 'loop',
  code: `$if[$toLowercase[$message[1]]==song]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$description[\"Loop Song\" staat nu **$replaceText[$replaceText[$loopSong;true;aan]**;false;uit] $customEmoji[bs_smile;861677703455703061]]
  $color[23eee2]
  $elseIf[$toLowercase[$message[1]]==queue]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$description[\"Loop Queue\" staat nu **$replaceText[$replaceText[$loopQueue;true;aan]**;false;uit] $customEmoji[bs_smile;861677703455703061]]
  $color[23eee2]
  $endelseif
  $else
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Error $customEmoji[bs_stunned;861677703455703061]]
  $description[Geef alsjeblieft aan wat je wil loopen. $customEmoji[bs_annoyed;861677703455703061] Bijv: \`_loop queue\` of \`_loop song\`]
  $color[RED]
  $endif
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}