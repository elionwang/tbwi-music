module.exports = {
  channel: `$channelID`,
  type: 'musicStartCommand',
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $description[[$songInfo[title]]($songInfo[url])]
  $color[23eee2]
  $title[Now Playing]
  $replaceText[$replaceText[$pruneMusic;true;];false;]
  $deleteIn[$songInfo[duration]]`
}