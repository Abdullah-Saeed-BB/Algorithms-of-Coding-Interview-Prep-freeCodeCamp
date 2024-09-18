function selectionSort(array) {
  let result = array;

  for (let holdIndex = 0; holdIndex < result.length - 1; holdIndex++) {
    let minValueIndex =
      result.slice(holdIndex).indexOf(Math.min(...result.slice(holdIndex))) +
      holdIndex;

    [result[holdIndex], result[minValueIndex]] = [
      result[minValueIndex],
      result[holdIndex],
    ]; // Swap between the minium value index with holdIndex
  }

  return result;
}
