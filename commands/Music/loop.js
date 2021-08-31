module.exports = {
  name: 'loop',
  code: `$if[$toLowercase[$message[1]]==song]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$description[\"Loop Song\" staat nu **$replaceText[$replaceText[$loopSong;true;aan]**;false;uit]]
  $color[23eee2]
  $elseIf[$toLowercase[$message[1]]==queue]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]$description[\"Loop Queue\" staat nu **$replaceText[$replaceText[$loopQueue;true;aan]**;false;uit]]
  $color[23eee2]
  $endelseif
  $else
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $description[Geef alsjeblieft aan wat je wil loopen. Bijv: \`_loop queue\` of \`_loop song\`]
  $color[RED]
  $endif`
}