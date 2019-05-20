// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize_first_attempt(str) {
  const words = str.split(' ');
  function capiOneLetter(subStr) {
    return subStr[0].toUpperCase() + subStr.slice(1);
  }

  const wordArray = words.map(oneWord=>{
    return capiOneLetter(oneWord);
  });

  return wordArray.join(' ');
}

module.exports = capitalize;