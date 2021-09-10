module.exports = [{
  name: 'loop',
  description: 'Herhaalt het huidige nummer of de wachtrij',
  usage: '_loop song | _loop queue',
  category: 'Music',
  code: `$if[$toLowercase[$message[1]]==song]
  $loop[1;loopsong]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$description[\"Loop Song\" staat nu **$replaceText[$replaceText[$loopSong;true;aan]**;false;uit] $customEmoji[bs_smile;861677703455703061]]
  $color[23eee2]
  $elseIf[$toLowercase[$message[1]]==queue]
  $loop[1;loopqueue]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$description[\"Loop Queue\" staat nu **$replaceText[$replaceText[$loopQueue;true;aan]**;false;uit] $customEmoji[bs_smile;861677703455703061]]
  $color[23eee2]
  $endelseif
  $else
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[Error $customEmoji[bs_stunned;861677703455703061]]
  $description[Geef alsjeblieft aan wat je wil loopen. $customEmoji[bs_annoyed;861677703455703061] Bijv: \`_loop queue\` of \`_loop song\`]
  $color[RED]
  $endif
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$voiceID!=;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je zit niet in een voicechat. $customEmoji[bs_sad;861677703455703061]}]`
}, {
  type: 'awaitedCommand',
  name: 'loopsong',
  code: `$if[$loopStatus==queue]
  $replaceText[$replaceText[$loopQueue;true;];false;]
  $endif`
}, {
  type: 'awaitedCommand',
  name: 'loopqueue',
  code: `$if[$loopStatus==song]
  $replaceText[$replaceText[$loopSong;true;];false;]
  $endif`
}]