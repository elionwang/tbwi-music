module.exports = {
  channel: `$channelID`,
  type: 'musicStartCommand',
  code: `$author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $description[[$songInfo[title]]($songInfo[url]) $customEmoji[bs_grin;861677703455703061]]
  $color[23eee2]
  $title[Now Playing]
  $addTimestamp
  $footer[Wachtrij: $queueLength]`
}