const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const n = []
  if(matrix.length == 1) return 0
  for(let i = 0; i <= matrix.length - 1; i++) {
    for(let k = 0; k <= matrix[i].length - 1; k++) {
      if(matrix[i + 1] && matrix[i + 1][k] !== 0){
        n.push(matrix[i][k])
      }

  }
}
  return n.reduce((acc, n) => acc + n, matrix[matrix.length - 1].reduce((acc, n) => acc + n, 0))
}

module.exports = {
  getMatrixElementsSum
};
