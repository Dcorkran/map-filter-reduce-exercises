function onlyEven (array) {
  array = array.filter((even)=>{
    return even % 2 === 0;
  });
  return array;
};

function onlyOneWord (array) {
  let isSpace = /\s/;
  array = array.filter((string)=>{
    if (!isSpace.test(string)) {
      return string;
    }
  });
  return array;
};

function positiveRowsOnly (array) {
  function greaterThanZero(element){
    return element >= 0;
  }
  array = array.filter((innerArray)=>{
    if (innerArray.every(greaterThanZero)) {
      return innerArray;
    }
  });
  return array;
};

function allSameVowels (array) {
  function getVowels(string){
    let isVowel = /[aeiou]/ig;
    return string.match(isVowel);
  }
  function checkVowels(array){
    for (var i = 0; i < array.length; i++) {
      if (array[0] !== array[i]) {
        return false;
      }
    }
    return true;
  }
  array = array.filter((element)=>{
    let vowelOnlyElement = getVowels(element);
    if (checkVowels(vowelOnlyElement)) {
      return element;
    }
  });
  return array;
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
