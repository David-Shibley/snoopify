function snoopify(string) {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 4) {
      words[i] = words[i].slice(0, words[i].length - 3).concat('izzle');
    }
  }

  return words.join(' ');
}

module.exports = snoopify;
