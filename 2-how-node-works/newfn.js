// Input: chars = ["a","a","b","b","c","c","c"];
// output : "a2b2c3"

function getCountOfRepeating(arr) {
  let result = "";

  let currentLetter = arr[0];
  let counter = 1;
  for (let i = 1; i < arr.length; i++) {
    if (currentLetter === arr[i]) {
      counter++;
    } else {
      result += `${currentLetter}${counter}`;
      currentLetter = arr[i];
      counter = 1;
    }
  }

  if (counter > 1) {
    result += `${currentLetter}${counter}`;
  }

  return result;
}

console.log(getCountOfRepeating(["a", "a", "b", "b", "c", "c", "c"]));
