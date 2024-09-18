function mergeSort(array) {
  if (array.length > 2) {
    const leftArr = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    const rightArr = mergeSort(array.slice(Math.floor(array.length / 2)));

    let result = [];

    for (let iL = 0, iR = 0; ; ) {
      let numL = leftArr[iL];
      let numR = rightArr[iR];
      if (iL >= leftArr.length) {
        result.push(...rightArr.slice(iR));
        break;
      } else if (iR >= rightArr.length) {
        result.push(...leftArr.slice(iL));
        break;
      }
      if (numL < numR) {
        result.push(numL);
        iL++;
      } else if (numR < numL) {
        result.push(numR);
        iR++;
      } else {
        result.push(numL, numR);
        iR++;
        iL++;
      }
    }

    return result;
  } else {
    return array[1]
      ? array[0] > array[1]
        ? [array[1], array[0]]
        : [array[0], array[1]]
      : array;
  }
}
