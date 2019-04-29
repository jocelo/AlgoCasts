// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  var max = 0,
    newChar = '';
  for (let char in chars) {
    if (max < chars[char] ) {
      max = chars[char];
      newChar = char;
    }
  }
  return newChar;
}

module.exports = maxChar;