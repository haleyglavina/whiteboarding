// Haley Glavina
// Questions by LeetCode, solutions by me

//================================================//
// Longest Substring Without Repeating Characters //
//================================================//

const longestSubstring = (str) => {
  // convert str to array of chars
  let arr = str.split('');
  let substrSize = [];

  // Go thru each letter
  arr.forEach((letter, i) => {
    // For each letter, determine how many consecutive no repeats it has moving forward
    let lettersSeen = [];
    for (let j=i; j<arr.length; j++) {
      if (!lettersSeen.includes(arr[j])){
        substrSize[i] = substrSize[i] ? substrSize[i]+1 : 1;
        lettersSeen.push(arr[j]);
      } else 
        break;
    }
  })
  console.log(substrSize);

  // Find max value in substrSize
  let max=0;
  for (let j=0; j<arr.length; j++) 
    if (substrSize[j] > max) max = substrSize[j];
  console.log("Max substring length:", max);
  return max;
}

let longestSubstringString = 'pwwkew';
//longestSubstring(longestSubstringString);

//================================//
// Find Median of 2 Sorted Arrays //
//================================//

const medianOfSorted = (arr1, arr2) => {
  // Combine into 1 sorted array
  // merge the arrays using merge step of merge sort
  let arr3 = [];
  let size1 = arr1.length;
  let size2 = arr2.length;

  // find array with smaller initial value, add its values to final array until reaching value greater than other array's current value
  // until we've exhausted an array
  let m = 0;
  let n = 0;
  while (m < size1 && n < size2) {
    // arr1 on a smaller value streak, add it to arr3
    while (arr1[m] < arr2[n])
      arr3.push(arr1[m++]);
    
    // arr2 on a smaller value streak, add it to arr3
    while (arr2[n] <= arr1[m])
      arr3.push(arr2[n++]);
  }

  // One array is fully added to arr3, add remaining entries from the other other
  if (m === size1) {
    for (let i=n; i<size2; i++)
      arr3.push(arr2[i]);
  }

  if (n === size2) {
    for (let i=m; i<size1; i++)
      arr3.push(arr1[i]);
  }
  console.log(arr3)
  // Find median
  // if odd median else even median
  let halfIndex = Math.ceil((size1 + size2) / 2);
  if ((size1 + size2) % 2 !== 0)
    console.log("Median is:", arr3[halfIndex - 1]);
  else
  console.log("Median is:", (arr3[halfIndex - 1] + arr3[halfIndex]) / 2.0);
}

//medianOfSorted([1,2,3],[2,5,6]);

//====================================//
// Find Longest Palindromic Substring //
//====================================//

// "ihaveakayakanditscool"
const longestPalindromicSubstr = (str) => {
  // for each letter, find all instance(s) of that letter 
  // start with instance that is furthest away
  // and see if between them is a palindrome, if not go to slightly closer instance and check if bw is palindrome

  // if no palindrome, fo to next letter and repeat

  // if palindrome, go to letter right after the palindrome ends and repeat

  for (let i=0; i<str.length; i++) {
    let otherInstances = [];
    for (let j=i+1; j<str.length; j++) {
      // Identify indices of other i'th letter instances 
      if (str[j] == str[i])
        otherInstances.push(j);

      // If no other instances, move on
      if (otherInstances.length === 0)
        break;
      
      // Check if palindrome exists between instances (starting from furthest instance)
      while(otherInstances.length) {
        let lastInstance = otherInstances.pop();

      }

    }
  }
}

// Checks if str contains a palindrome from start to end index
const isPalindrome = (str, start, end) => {
  for (let i=0; i<(end-start); i++) {
    // At or past center of palindrome without finding an issue, it's palindrome
    if ((start + i) >= (end - i))
      return true;
    // Found letters that don't match
    if (str[start + i] != str[end - i])
      return false;
  }
  // Made it through without issue, it's palindrome
  return true;
}

console.log(isPalindrome('akayaka', 0, 6));