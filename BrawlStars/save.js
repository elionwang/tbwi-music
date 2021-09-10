module.exports = {
  name: 'save',
  code: `$setUserVar[tag;$splitText[2]]
  $textSplit[$message;#]`
}