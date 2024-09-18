/*
  Given an array 'arr', find element pairs whose sum equal the second argument 'target' and return the sum of their indices.
*/
function pairwise(arr, target) {
  // To do not use the same number index
  let usedIndices = [];

  let result = 0;

  mainLoop: for (let i = 0; i < arr.length; i++) {
    // Skip if the index already used
    if (usedIndices.includes(i)) continue;
    for (let j = i + 1; j < arr.length; j++) {
      // Skip if the index already used
      if (usedIndices.includes(j)) continue;

      if (arr[i] + arr[j] === target) {
        usedIndices.push(i, j);
        result += i + j;
        continue mainLoop;
      }
    }
  }

  return result;
}
