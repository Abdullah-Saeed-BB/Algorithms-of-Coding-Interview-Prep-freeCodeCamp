/*
Create a function that takes two or more arrays and returns an array of their symmetric difference.
The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {
  let result = [...args[0]];

  for (let i = 1; i < args.length; i++) {
    let arr = args[i];

    for (let num of result) {
      if (arr.includes(num)) {
        arr = arr.filter((n) => n !== num);
        result = result.filter((n) => n !== num);
      }
    }

    // To remove any duplicate numbers
    result = Array.from(new Set([...result, ...arr]));
  }

  return result.sort((a, b) => a - b);
}
