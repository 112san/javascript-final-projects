// Define quiz questions and choices
var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 0
    },
    {
        question: "Who is the President of Nigeria?",
        choices: ["Leonardo da Vinci", "Tinibu", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who is former president of Nigeria?",
        choices: ["Leonardo da Vinci", "Mohammed buhari", "lionel Messi", "Ben Ayade"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 2
    },
    // Add more questions here
];

var currentQuestion = 0;
var score = 0;

// Function to display the current question
function displayQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = questions[currentQuestion].choices[i];
        var button = document.createElement("button");
        button.textContent = choice;
        button.value = i;
        button.onclick = function() {
            checkAnswer(this.value);
        };
        choicesElement.appendChild(button);
    }
}

// Function to check the user's answer
function checkAnswer(choice) {
    if (choice == questions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = "Wrong!";
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("choices").style.pointerEvents = "none";
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById("result").style.display = "none";
        document.getElementById("choices").style.pointerEvents = "auto";
    } else {
        // Display final score
        document.getElementById("question").textContent = "Quiz completed. Your score: " + score + "/" + questions.length;
        document.getElementById("choices").innerHTML = "";
        document.getElementById("result").style.display = "none";
        document.getElementById("choices").style.pointerEvents = "none";
    }
}

// Start the quiz
displayQuestion();