function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivotI = array.length - 1;
  let right = [];
  let left = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[pivotI]) {
      left.push(array[i]);
    } else if (array[i] > array[pivotI]) {
      right.push(array[i]);
    } else if (array[i] === array[pivotI] && i !== pivotI) {
      left.push(array[i]);
    }
  }
  // the 'quickSort(left)' conatin the numbers that less than pivot and the other numbers is in the quickSort(right)
  return [...quickSort(left), array[pivotI], ...quickSort(right)];
}
