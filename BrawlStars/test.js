module.exports = {
  name: 'profile',
  aliases: ['stats', 'prowfile'],
  code: `$botTyping
  $title[Profile van $httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;name;;authorization:Bearer $get[key];Accept:application/json]]
  $addField[3v3 Victories;\`$httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;['3vs3Victories'];;authorization:Bearer $get[key];Accept:application/json]\`]
  $addField[Club;\`$httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;club.name;;authorization:Bearer $get[key];Accept:application/json] ($httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;club.tag;;authorization:Bearer $get[key];Accept:application/json])\`]
  $addField[Tag;\`$httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;tag;;authorization:Bearer $get[key];Accept:application/json]\`]
  $color[$splitText[2]]
  $textSplit[$httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;nameColor;;authorization:Bearer $get[key];Accept:application/json];0xff]
  $let[key;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJiMjU1Njk3LTdiNjEtNGZlOC1hMDExLTE5ZTVlZmJjOTI1OSIsImlhdCI6MTYzMTEwNjM2MSwic3ViIjoiZGV2ZWxvcGVyL2ZhYjVhMzFlLWMzNzYtYzlhOS0xMWFkLTFlYjNhMDQ3MDEwNyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMzQuNzAuNDcuMTY0IiwiMzQuNzAuNDcuMTY1Il0sInR5cGUiOiJjbGllbnQifV19.JfLNbWeIOxutSK1HehXwbOTdaT3Ryti2uuPKc1L4UXBELEX5DNg_jLjoUWaUIqY696f1BfgekSBLNh-uzUKC1w]`
}

// $addField[Club;\`$httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;club.name;;authorization:Bearer $get[key];Accept:application/json] ($httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;club.tag;;authorization:Bearer $get[key];Accept:application/json)\`]
// $addField[3v3 Victories;\`$httpRequest[https://api.brawlstars.com/v1/players/%23$getUserVar[tag];GET;;3vs3Victories;;authorization:Bearer $get[key];Accept:application/json]\`]
