function multiplyBy10 (array) {
  var timesTen = array.map((num)=>{
    return num *= 10;
  });
  return timesTen;
};

function shiftRight (array) {
  var shiftedArray = array.map((value,index)=>{
    return array[(index + array.length - 1) % array.length];
  });
  return shiftedArray;
};

function onlyVowels (array) {
  var vowelArray = array.map((val)=>{
    let vowels = /[^aeiou]/gi;
    return val.replace(vowels,'');
  });
  return vowelArray;
};

function doubleMatrix (array) {
  var doubleArray = array.map((num)=>{
    var innerDoubleArray = num.map((element) =>{
      return element *= 2;
    });
    return innerDoubleArray;
  });
  return doubleArray;
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
