// Sum Zero O(n²) Space O(1)

// Write your solution below:
function addToZero(arr) {

   let result = false;

   arr.forEach((number, ind) => {

       for (let i = ind + 1; i < arr.length; i++) {
           
           if (number + arr[i] === 0) {
               result = true;
               break;
           }

       }

   });

   console.log(result)
}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True



//Unique Characters O(n) Space O(1)

let hasUniqueChars = (string) => {
   for (let i=0; i<string.length; i++) {
     if ( string.indexOf(string[i]) !== string.lastIndexOf(string[i]) ) {
       return false; // repeats
     }
   }
 return true;
}

let uniqueResult = hasUniqueChars('Monday')
console.log(uniqueResult)

//Pangram Sentence O(1) Space O(1)

function isPangram(str) {
   str = str.toLowerCase()
   //console.log(str.replace('the', 'slow'))

   str = str.replace(/([^a-z])+/g, '')

   // console.log(str)

   const tempArr = [];

   for (let i = 0; i < str.length; i ++) {
       if (!tempArr.includes(str[i])) {
           tempArr.push(str[i])
       }
   }

   console.log(tempArr.length === 26)
}

// For example:
isPangram("The quick brown fox jumps over the lazy dog!")
// -> True

isPangram("I like cats but not mice")
// -> False



//Longest Word O(n) Space O(1)

const findLongestWord = (array) => Math.max(...(array.map(el => el.length)));

console.log(findLongestWord(["hi", "hello"]))