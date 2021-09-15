module.exports = [{
  name: 'help',
  description: 'Laat alle commands zien.',
  usage: '_help | _help <command>',
  aliases: ['h'],
  category: 'Miscellaneous',
  code: `$if[$message==]
  $reactionCollector[$splitText[1];everyone;1m;🔄,🎵,🎶,$customEmoji[bs_grin;861677703455703061];awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
  $textSplit[$sendMessage[{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{description:\`Help Command Pages:\`
  🎵 \`- Music(1)\`
  🎶 \`- Music(2)\`
  $customEmoji[bs_grin;861677703455703061] \`- Miscellaneous\`} {color:23eee2};yes]; ]
  $elseIf[$commandInfo[$message;name]==]
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $color[RED]
  $title[Error $customEmoji[bs_stunned;861677703455703061]]
  $description[Dat is geen command. $customEmoji[bs_sad;861677703455703061]\nGebruik \`$commandInfo[help;usage]\`]
  $endelseif
  $else
  $author[$userTag[$clientID];https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif]
  $title[**Help:** \`$commandInfo[$message;name]\`]
  $color[23eee2]
  $addField[Category;\`\`\`$commandInfo[$message;category]\`\`\`]
  $addField[Aliases;\`\`\`$commandInfo[$message;aliases] \`\`\`]
  $addField[Usage;\`\`\`$commandInfo[$message;usage]\`\`\`]
  $addField[Description;\`\`\`$commandInfo[$message;description]\`\`\`]
  $endif
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]`
}, {
  name: 'awaitReaction1',
  type: 'awaitedCommand',
  code: `$editMessage[$message[1];{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif} {description:\`Help Command Pages:\`
  🎵 \`- Music(1)\`
  🎶 \`- Music(2)\`
  $customEmoji[bs_grin;861677703455703061] \`- Miscellaneous & Development\`} {color:23eee2}]`
}, {
  name: 'awaitReaction2',
  type: 'awaitedCommand',
  code: `$editMessage[$message[1];{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif} {title: 🎵 \`- Music(1)\`} {description:\`_play: $commandInfo[play;description]\n_pause: $commandInfo[pause;description]\n_resume: $commandInfo[resume;description]\n_skip: $commandInfo[skip;description]\n_queue: $commandInfo[queue;description]\n_volume: $commandInfo[volume;description]\`} {color:23eee2} {footer: 🔄 - Home}]`
}, {
  name: 'awaitReaction3',
  type: 'awaitedCommand',
  code: `$editMessage[$message[1];{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif} {title: 🎶 \`- Music(2)\`} {description:\`_lyrics: $commandInfo[lyrics;description]\n_remove: $commandInfo[remove;description]\n_clear: $commandInfo[clear;description]\n_loop: $commandInfo[loop;description]\n_jump: $commandInfo[jump;description]\`} {color:23eee2} {footer: 🔄 - Home}]`
}, {
  name: 'awaitReaction4',
  type: 'awaitedCommand',
  code: `$editMessage[$message[1];{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif} {title: $customEmoji[bs_grin;861677703455703061] \`- Miscellaneous & Development\`} {description:\`_ping: $commandInfo[ping;description]\n_help: $commandInfo[help;description]\n_update: $commandInfo[update;description]\n_eval: $commandInfo[eval;description]\`} {color:23eee2} {footer: 🔄 - Home}]`
}, {
  name: 'aliases',
  type: 'awaitedCommand',
  code: `$if[$commandInfo[$message;aliases]==]
  $let[aliases;None]
  $elseIf[$commandInfo[$message;aliases]!=]
  $let[aliases;$commandInfo[$message;aliases]]
  $endelseif
  $endif`
}]