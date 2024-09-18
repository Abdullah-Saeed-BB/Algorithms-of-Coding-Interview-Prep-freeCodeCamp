function bubbleSort(array) {
  let result = array;

  let sortLength = result.length;

  while (sortLength > 2) {
    for (let i1 = 0, i2 = 1; i2 < sortLength; i1++, i2++) {
      if (result[i1] > result[i2]) {
        [result[i1], result[i2]] = [result[i2], result[i1]];
      }
    }

    sortLength--;
  }

  return result;
}
