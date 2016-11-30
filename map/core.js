function multiplyBy10 (array) {
  let timesTen = array.map((num)=>{
    return num *= 10;
  });
  return timesTen;
};

function shiftRight (array) {
  let shiftedArray = array.map((value,index)=>{
    return array[(index + array.length - 1) % array.length];
  });
  return shiftedArray;
};

function onlyVowels (array) {
  let vowelArray = array.map((val)=>{
    let vowels = /[^aeiou]/gi;
    return val.replace(vowels,'');
  });
  return vowelArray;
};

function doubleMatrix (array) {
  let doubleArray = array.map((num)=>{
    let innerDoubleArray = num.map((element) =>{
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
