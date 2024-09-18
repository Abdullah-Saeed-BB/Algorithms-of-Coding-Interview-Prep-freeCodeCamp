function insertionSort(array) {
    let result = array
  
    mainLoop: for (let i1 = 1; i1 < array.length; i1++) {
      if (result[i1] < result [i1 - 1]) {
        for (let i2 = i1 - 1; i2 >= 0; i2--) {
          if (result[i1] > result[i2]) {
            result = [...result.slice(0, i2 + 1), array[i1], ...result.filter((_, i) => i !== i1).slice(i2 + 1)]
            continue mainLoop
          } else if (i2 === 0) {
            result = [array[i1], ...result.filter((_, i) => i !== i1)]
          }
        }
      }
    }
    
    return result;
}
