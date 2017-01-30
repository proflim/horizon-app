var program = require('commander');
var args = process.argv;
var flagsPresent = [];

program
  .option('-s, --sum', 'sum')
  .option('-p, --product', 'product')
  .parse(process.argv);


if(!program.sum && !program.product){
  //TO DO: remove after replacing with commander version
  throw 'error: incorrect number of flags';
}

var isNumber = function(x){
  return !isNaN(parseFloat(x));
}

var numbers = args.filter(isNumber).map(parseFloat);
var result;

if(program.sum){
  result = numbers.reduce(function(a,b){ return a + b});
}

else if(program.product){
  result = numbers.reduce(function(a,b){ return a * b});
}

console.log("result is %d",result);
