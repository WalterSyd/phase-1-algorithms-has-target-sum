function hasTargetSum(array, target) {
  // Write your algorithm here
}function hasTargetSum(array, target) {
  const numSet = new Set();

  for (let num of array) {
      if (numSet.has(target - num)) {
    
        return true;
      }
      numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
The Big O time complexity of the hasTargetSum function is O(n), where n is the number of elements in the input array. This is because the function iterates through each element of the array once and performs constant-time operations for each element.

*/
/* 
  Add your pseudocode here
Create an empty Set called numSet.
Iterate through each number num in the input array.
For each num, check if target - num is already in the numSet.
If so, return true as there is a pair that adds up to the target.
If not, add the current num to the numSet.
If the loop finishes without finding a pair, return false as there is no pair that adds up to the target.



*/

/*
  Add written explanation of your solution here
The hasTargetSum function aims to determine if there exists a pair of numbers in the given array that adds up to the specified target number.

To achieve this, the function uses a Set called numSet to keep track of the numbers encountered while iterating through the input array. For each number in the array, it checks if the difference between the target and the current number is already present in the numSet. If it is, then it means there exists a pair of numbers that add up to the target, and the function returns true. If no such pair is found after iterating through the entire array, the function returns false.

This approach efficiently solves the problem in linear time complexity O(n), where n is the number of elements in the input array, as it requires only a single pass through the array to determine the existence of a target sum pair.




*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
