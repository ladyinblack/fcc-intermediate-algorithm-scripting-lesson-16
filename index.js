// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Steamroller</h1>`;

/**
 * Flatten a nested array.  You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
  let arrLength = arr[arr.length - 1].length;
  while (arrLength >= 0) {
    arr = arr.reduce((a, c) => a.concat(c), []);
    arrLength--;
  }
  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[['a']], [['b']]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
