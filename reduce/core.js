function sum (array) {
  return array.reduce((a,b)=>{
    return a+b;
  },0);
};

function productAll (array) {
  array = array.reduce((a,b)=>{
    return a.concat(b);
  });
  return array.reduce((a,b)=>{
    return a*b;
  });
};

function objectify (array) {
  return array.reduce((newObj,value)=>{
    newObj[value[0]] = value[1];
    return newObj;
  },{});
};

function luckyNumbers (array) {
  let reducedArr = array.reduce((a,b,index)=>{
    if (index === array.length - 1) {
      return `${a}, and ${+b}`;
    } else {
      return `${a}, ${+b}`;
    }
  });
  return `Your lucky numbers are: ${reducedArr}`;
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
