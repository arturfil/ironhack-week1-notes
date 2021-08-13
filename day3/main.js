console.log("THi is connnected")
// alert("THis is connected")

// is palindrome algorithm
let i = 0;
let j = isPhrasePalindrome.length-1;
while (i < j) {
  if (isPhrasePalindrome[i] !== isPhrasePalindrome[j]) {
    return `Not Palindrome`
  }
  i++;
  j--;
}

console.log("armor a roma is a palindrome")
