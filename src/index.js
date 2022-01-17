
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0 ) return [];
  let result = [];
  matrix.map((arr, index) => {
    if ((index + 1) % 2 === 0) {
      arr = arr.reverse();
    }
    arr.map(elem => {
      result.push(elem);
    });
  });
  return result;
}
