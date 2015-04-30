/**
 * Created by Kate Jefferson on 4/30/2015.
 */

/* Insertion Sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.*/

// GET REQUIREMENTS
// Function that takes an array of numbers and returns the array sorted
// Empty array should return an empty array

// LAY OUT PARTS OF THE PROBLEM
// Sort array by moving elements up if criteria is met
// Once element is placed, return to where left off

// DECLARE INTENT
// 1) Iterate through array, 2) compare elements, 3) move element

// EDGE CASES
// This problem is atomic

// LAY OUT PARTS OF SOLUTION
// Outer loop through array forwards
// Inner loop through array backwards
// Move element until comparison requirements met

// PSEUDO CODE
// loop over array
// if element is less than prev element
//   move element until element less than
// otherwise continue
// return array

// JAVASCRIPT

function insertionSort(array) {
  var e1, e2, hole;

  for (var i=1; i<array.length-1; i++) {
    e1 = array[i-1];
    e2 = array[i];
    while (e2 < e1) {
      hole = e1;
      e2 = e1;
      e1 = hole;

    }

  }

}