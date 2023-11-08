/*Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/

let States=["Delhi","Uttar-pradesh","Kerala","Karnataka","Tamil nadu","Telengana","Andhra pradesh","Gujrat"];
 
let IndianStates= States.filter(state=>{
let firstletter=state[0].toLowerCase();
return!['a','e','i','o','u'].includes(firstletter)
});

console.log(IndianStates);


/*Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/

let str="I love my India";
str="India my love I"
console.log(str);


/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/

let string="INDIA";
let strArray=string.split('');//convert string to array
strArray.splice(3,0,'N','E','S','O');
let output=strArray.join(''); 
console.log(output);


/*Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/

function correctWord(sentence, wrong, correct) {
    // Use a regular expression with the 'g' flag to replace all occurrences of the wrong word.
    const regex = new RegExp(wrong, 'g');
    
    // Use the `string.replace` method to replace the wrong word with the correct word.
    const correctedSentence = sentence.replace(regex, correct);
    
    return correctedSentence;
  }
  
  const inputSentence = "I had a appel for breakfast, but I prefer bananna.";
  const correctedSentence = correctWord(inputSentence, "appel", "apple");
  console.log(correctedSentence);

  
  /* inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5 */

const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

const answer = inputArr.filter(number => number > 5);

console.log(answer);

/* const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce. */

const studentes = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = studentes.map(student => {
  const sum = student.scores.reduce((total, score) => total + score, 0);
  const average = sum / student.scores.length;

  return { name: student.name, average: average };
});

console.log(result);

/* Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/

function findSingleDigitSum(number) {
  while (number >= 10) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    number = sum;
  }
  return number;
}

const inputNumber = 456;
const resul = findSingleDigitSum(inputNumber);
console.log(resul);

/* Write a function to count the number of words in a paragraph.*/

function countWords(paragraph) {
  // Use a regular expression to split the paragraph into words.
  const words = paragraph.split(/\s+/);

  // Filter out empty strings and count the remaining words.
  const wordCount = words.filter(word => word !== '').length;

  return wordCount;
}

const inputParagraph = "This is an example paragraph. It contains several words.";
const numberOfWords = countWords(inputParagraph);
console.log(`Number of words: ${numberOfWords}`);

//Write a function to reverse a string.
//Input - Hello
//Outpur - olleH

function reverseString(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
  }
  return reversed;
}

const inputString = "Hello";
const reversedString = reverseString(inputString);
console.log(reversedString); // Output: "olleH"

/*
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.*/

const students = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
];

const results = students.map((studentObject) => {
  const studentName = Object.keys(studentObject)[0];
  const scores = Object.values(studentObject[studentName]);
  const average =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return {
    [studentName]: {
      average,
    },
  };
});

console.log(results);


