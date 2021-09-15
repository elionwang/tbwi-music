module.exports = {
  name: 'perms',
  description: 'Verandert de permissies voor een bepaalde member voor een specifieke command.',
  category: 'Admin',
  usage: '_perms <member> | _perms <member> allow/deny <command>',
  code: `$if[$message[2]==deny]
  $setUserVar[$message[3];2;$findMember[$message[1];no]]
  $elseIf[$message[2]==allow]
  $setUserVar[$message[3];1;$findMember[$message[1];no]]
  $endelseif
  $endif
  $addCmdReactions[$customEmoji[bs_$randomText[smile;bothered;laugh;sad;shocked;stunned;frenzied;angry;rage;annoyed;ecstatic;happy;speechless];861677703455703061]]
  $onlyIf[$findMember[$message[1];no]!=undefined;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{field:Usage:\`$commandInfo[$commandName;usage]\`}{description:Mention een member. $customEmoji[bs_bothered;861677703455703061]}]
  $onlyIf[$hasPerms[$authorID;admin]==true;{author:$userTag[$clientID]:https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif}{color:RED}{title:Error $customEmoji[bs_stunned;861677703455703061]}{description:Je hebt geen permission voor deze command $customEmoji[bs_bothered;861677703455703061].}]`
}