const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const wordSelector = element => {
  const strings = element.split(' ');
  const letters = strings.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const capString = letters.join(" ");
  return capString;
}

const titleCased = () => tutorials.map(wordSelector);
