const questions = [
  { question: "How to write an IF statement in JavaScript?", answers: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if i = 5"], correct: 2 },
  { question: "How does a FOR loop start?", answers: ["for( i<=5; i++)","for(i=0; i<=5; i++)", "for(i=0; i++)", "for i =1 to 5"], correct: 1 },
  { question: "What is the correct way to write a JavaScript array?", answers: ["var colors = (1:'red',2:'green',3:'blue')","var colors = 'red','green','blue'", "var colors = ('red','green','blue')", "var colors = ['red','green','blue']"], correct: 3 },
  { question: "How do you round the number 7.25, to the nearest integer?", answers: ["rnd(7.25)","round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"], correct: 2 },
  { question: "How do you find the number with the highest value of x and y?", answers: ["Math.ceil(x,y)", "Math.max(x,y)", "top(x,y)", "ceil(x,y)"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const finalScore = document.getElementById("final-score");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedback = document.getElementById("feedback");
const timerDisplay = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("reset-btn").addEventListener("click", resetQuiz);
nextButton.addEventListener("click", loadNextQuestion);

function startQuiz() {
  startScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  feedback.textContent = "";
  nextButton.classList.add("hidden");

  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.className = "btn btn-outline-primary m-2";
    btn.addEventListener("click", () => checkAnswer(index));
    answersContainer.appendChild(btn);
  });

  startTimer(10);
}

function startTimer(seconds) {
  let timeLeft = seconds;
  timerDisplay.textContent = timeLeft;
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedback.textContent = "Time's up! Click 'Next' to continue.";
      feedback.className = "text-warning";
      nextButton.classList.remove("hidden");
    }
  }, 1000);
}

function checkAnswer(selectedIndex) {
  clearInterval(timerInterval);

  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correct) {
    feedback.textContent = "Correct!";
    feedback.className = "text-success";
    score++;
  } else {
    feedback.textContent = `Wrong! The correct answer was "${currentQuestion.answers[currentQuestion.correct]}".`;
    feedback.className = "text-danger";
  }

  nextButton.classList.remove("hidden");
}

function loadNextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

function endQuiz() {
  quizContainer.classList.add("hidden");
  finalScore.classList.remove("hidden");
  scoreDisplay.textContent = `${score} / ${questions.length}`;
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  finalScore.classList.add("hidden");
  startScreen.classList.remove("hidden");
}















































// const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "London", "Berlin", "Madrid"],
//       answer: "Paris",
//     },
//     {
//       question: "Which planet is known as the Red Planet?",
//       options: ["Earth", "Mars", "Jupiter", "Saturn"],
//       answer: "Mars",
//     },
//     {
//       question: "Who wrote 'Hamlet'?",
//       options: ["Shakespeare", "Chaucer", "Homer", "Dickens"],
//       answer: "Shakespeare",
//     },
//   ];
  
//   let currentQuestionIndex = 0;
//   let score = 0;
  
//   // DOM Elements
//   const homeScreen = document.getElementById("home-screen");
//   const quizScreen = document.getElementById("quiz-screen");
//   const resultScreen = document.getElementById("result-screen");
  
//   const questionEl = document.getElementById("question");
//   const optionsContainer = document.getElementById("options-container");
//   const nextBtn = document.getElementById("next-btn");
//   const scoreEl = document.getElementById("score");
//   const resetBtn = document.getElementById("reset-btn");
//   const startBtn = document.getElementById("start-btn");
  
//   // Start Quiz
//   startBtn.addEventListener("click", () => {
//     homeScreen.classList.add("d-none");
//     quizScreen.classList.remove("d-none");
//     loadQuestion();
//   });
  
//   // Load Question
//   function loadQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionEl.textContent = currentQuestion.question;
//     optionsContainer.innerHTML = "";
  
//     currentQuestion.options.forEach((option) => {
//       const button = document.createElement("button");
//       button.classList.add("btn", "btn-outline-primary", "btn-block", "mt-2");
//       button.textContent = option;
//       button.addEventListener("click", () => handleAnswer(option));
//       optionsContainer.appendChild(button);
//     });
//   }
  
//   // Handle Answer
//   function handleAnswer(selectedOption) {
//     const currentQuestion = questions[currentQuestionIndex];
//     const buttons = optionsContainer.querySelectorAll("button");
  
//     buttons.forEach((button) => {
//       button.disabled = true;
//       if (button.textContent === currentQuestion.answer) {
//         button.classList.add("btn-success");
//       } else if (button.textContent === selectedOption) {
//         button.classList.add("btn-danger");
//       }
//     });
  
//     if (selectedOption === currentQuestion.answer) {
//       score++;
//     }
  
//     nextBtn.classList.remove("d-none");
//   }
  
//   // Next Question
//   nextBtn.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       loadQuestion();
//     } else {
//       showResult();
//     }
//     nextBtn.classList.add("d-none");
//   });
  
//   // Show Result
//   function showResult() {
//     quizScreen.classList.add("d-none");
//     resultScreen.classList.remove("d-none");
//     scoreEl.textContent = `${score} / ${questions.length}`;
//   }
  
//   // Reset Quiz
//   resetBtn.addEventListener("click", () => {
//     currentQuestionIndex = 0;
//     score = 0;
//     resultScreen.classList.add("d-none");
//     homeScreen.classList.remove("d-none");
//   });
  