const numbers = [1, 2, 3, 4, 5];

const filter = function(n, f) {
  const lon = [];
  for (const i of n) {
    if(f(i)){
      lon.push(i);
    }
  }
  return lon;
};
const odds = filter(numbers, x => x%2 > 0);
console.log(odds)

const numbers1 = [4, 2, 5, 1, 3];
numbers1.sort((a, b) =>)
