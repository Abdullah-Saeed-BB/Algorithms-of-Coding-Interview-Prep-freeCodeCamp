function binarySearch(searchList, value) {
  const searchPath = [];
  let low = 0;
  let high = searchList.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let midValue = searchList[mid];

    searchPath.push(midValue);

    if (midValue === value) {
      return searchPath;
    } else if (value < midValue) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return "Value Not Found";
}
