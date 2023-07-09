// function stray(numbers) {
//   let sorted = numbers.sort((a, b) => a - b);
//   return sorted[0] === sorted[1] ? sorted[sorted.length-1] : sorted[0];
// }

var number=function(array){
  return array.map((str) => {
    return `${(array.indexOf(str) + 1)}: ${str}`;
  })
}