function isPalindrome(string) {
  let reverse = string.split("").reverse().join("")

    if (string === reverse) {
      return true;
    } else {
      return false;
    }
}

console.log(isPalindrome("racecar"))

/* 
  Add your pseudocode here

  Initialize empty function 'isPalindrome' and pass a string into it
  Create variable 'reverse' to store value of the string in reverse
  Use .split() , .reverse() and .join() to come up with return value of string
  Use if function to compare string with its reverse value
  Return true if their values are equal, and else, if not equal.

*/

/*
  Add written explanation of your solution here

  If string passed into isPalindrome function returns true when its value is compared with its reverse using an equality operator, then retun true. Else, false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
