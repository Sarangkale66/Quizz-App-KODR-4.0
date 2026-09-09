export type MCQOption = {
  text: string;
  isCorrect: boolean;
};

export type MCQ = {
  id: string;
  question: string;
  options: MCQOption[]; 
};


export const mcqs: MCQ[] = [
  {
    id: "1",
    question: "What is a Generator Function in JavaScript?",
    options: [
      { text: "A function that can pause and resume its execution", isCorrect: true },
      { text: "A function that can only execute once", isCorrect: false },
      { text: "A function that automatically runs in the background", isCorrect: false },
      { text: "A function that can only return strings", isCorrect: false },
    ]
  },
  {
    id: "2",
    question: "Which keyword is used to define a Generator Function?",
    options: [
      { text: "async", isCorrect: false },
      { text: "generate", isCorrect: false },
      { text: "function*", isCorrect: true },
      { text: "yield", isCorrect: false },
    ]
  },
  {
    id: "3",
    question: "Which keyword is used to pause execution inside a Generator Function?",
    options: [
      { text: "pause", isCorrect: false },
      { text: "yield", isCorrect: true },
      { text: "await", isCorrect: false },
      { text: "stop", isCorrect: false },
    ]
  },
  {
    id: "4",
    question: "What does calling a Generator Function return?",
    options: [
      { text: "A Promise", isCorrect: false },
      { text: "A Generator object (iterator)", isCorrect: true },
      { text: "The final return value immediately", isCorrect: false },
      { text: "An array", isCorrect: false },
    ]
  },
  {
    id: "5",
    question: "What does the next() method of a Generator return?",
    options: [
      { text: "Only the generated value", isCorrect: false },
      { text: "Only a boolean", isCorrect: false },
      { text: "An object containing value and done", isCorrect: true },
      { text: "A Promise containing value and done", isCorrect: false },
    ]
  }
];