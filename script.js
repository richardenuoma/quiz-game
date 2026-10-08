    const questions = [
      {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        answer: "Paris"
      },
      {
        category: "Science",
        question: "What planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter"],
        answer: "Mars"
      },
      {
        category: "Math",
        question: "What is 5 + 7?",
        choices: ["10", "12", "14"],
        answer: "12"
      },
      {
        category: "History",
        question: "Who was the first president of the USA?",
        choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
        answer: "George Washington"
      },
      {
        category: "Technology",
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink and Text Markup Language"],
        answer: "Hyper Text Markup Language"
      }
    ];

    function getRandomQuestion(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    function getRandomComputerChoice(choices) {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

    function getResults(questionObj, computerChoice) {
      if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
      } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
      }
    }

    // UI Logic
    const categoryEl = document.getElementById("category");
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    const resultEl = document.getElementById("result");
    const computerLabelEl = document.getElementById("computer-label");
    const nextBtn = document.getElementById("next-btn");

    let currentQuestion = null;

    nextBtn.addEventListener("click", () => {
      currentQuestion = getRandomQuestion(questions);
      const computerChoice = getRandomComputerChoice(currentQuestion.choices);
      const resultText = getResults(currentQuestion, computerChoice);

      categoryEl.textContent = currentQuestion.category;
      questionEl.textContent = currentQuestion.question;

      choicesEl.innerHTML = "";
      currentQuestion.choices.forEach(choice => {
        const div = document.createElement("div");
        div.className = "choice";
        div.textContent = choice;
        if (choice === computerChoice) {
          div.classList.add("computer-pick");
          div.textContent += " ← Computer";
        }
        // highlight correct answer after
        if (choice === currentQuestion.answer) {
          setTimeout(() => div.classList.add("correct"), 500);
        }
        choicesEl.appendChild(div);
      });

      resultEl.textContent = resultText;
      resultEl.className = "result show " + (resultText.includes("correct!")? "correct" : "wrong");
      computerLabelEl.classList.add("show");
      nextBtn.textContent = "Next Question";
    });
