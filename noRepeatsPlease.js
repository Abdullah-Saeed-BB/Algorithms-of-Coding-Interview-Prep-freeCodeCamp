/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.
*/

function allPermutations(str) {
  if (str.length <= 1) {
    return str;
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    const restLetters = str.slice(0, i) + str.slice(i + 1);

    const subPerms = allPermutations(restLetters);

    for (let perm of subPerms) {
      result.push(currentLetter + perm);
    }
  }

  return result;
}

function permAlone(str) {
  const permutations = allPermutations(str);

  // The permutation number that don't have repeated consecutive letters
  let permNum = 0;

  mainLoop: for (let perm of permutations) {
    let currentLetter = "";
    for (let letter of perm) {
      if (letter === currentLetter) {
        continue mainLoop;
      }
      currentLetter = letter;
    }
    permNum++;
  }

  return permNum;
}
