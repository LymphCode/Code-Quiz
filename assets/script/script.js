
// This is the list of questions and answers that are propmted to the web page
const quizData = [
    {
        question: 'Javascript is an _______ language?',
        a: 'Object-Oriented',
        b: 'Object-Based',
        c: 'Procedural',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        a: 'var',
        b: 'let',
        c: 'Both A and B',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        a: 'getElementById()',
        b: 'getElementByClassName()',
        c: 'Both A and B',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        a: 'Throws an error',
        b: 'Ignores the statements',
        c: 'Gives a warning',
        d: 'None of the above',
        correct: 'b',
    },
];


// This gives us our countdown timer displayed above the questionare
const countdown = 60;
var time = countdown * 60;

const countdownEl = document.getElementById('timer');

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const sec = Math.floor(time / 1);
    var seconds = time % 60;

    countdownEl.innerHTML = `${seconds}`;
    time--;
}


// The data below gives function to our quiz! Allowing the system to respond to wrong or right answers etc and display the data after the quiz
// This makes our world go 'round :)
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')


var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    var answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer 
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
}) 




