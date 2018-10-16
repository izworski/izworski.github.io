const QUIZ_BLOCK = `
    <div id="quiz-block">
        <button id="quiz-start">Start Quiz</button>
    </div>
`;
const QUIZ_CONTENT = `
    <div id="quiz-container">
        <div id="quiz"></div>
    </div>
    <div id="quiz-buttons">
        <button id="quiz-previous">Previous</button>
        <button id="quiz-next">Next</button>
        <button id="quiz-submit">Submit Quiz</button>
    </div>
    <div id="quiz-results"></div>
`;
let currentSlide = 0;

function buildQuiz(quizQuestions) {
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter of Object.keys(currentQuestion.answers)) {
            answers.push(`
                <label class="${currentQuestion.correctAnswers.includes(letter) ? 'correct' : 'wrong' }">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${currentQuestion.answers[letter]}
                 </label>
            `);
        }
        shuffleArray(answers);
        output.push(`
            <div class="quiz-slide">
                <div class="quiz-question">${questionNumber + 1} / ${quizQuestions.length}&nbsp;&nbsp;&nbsp;${currentQuestion.question}</div>
                <div class="quiz-answers">${answers.join("")}</div>
            </div>`
        );
    });
    return output.join("");
}


function showAll() {
    let slides = document.querySelectorAll(".quiz-slide");
    for (let slide of slides) {
        slide.classList.remove("quiz-slide");
        slide.classList.remove("quiz-active-slide");
    }
    document.getElementById("quiz-container").style.height = "auto";
    document.getElementById("quiz-submit").innerHTML = "Resubmit";
    document.getElementById("quiz-previous").style.display = "none";
    document.getElementById("quiz-next").style.display = "none";
}

function showResults(quizQuestions) {
    const answerContainers = document.querySelectorAll(".quiz-answers");
    let numCorrect = 0;
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = answerContainer.querySelector(selector) || {};
        const userAnswerValue = userAnswer.value;

        let answerColor = "red";
        if (currentQuestion.correctAnswers.includes(userAnswerValue)) {
            numCorrect++;
            answerColor = "green";
        }

        answerContainer.previousElementSibling.style.color = answerColor;
        if (userAnswer.parentNode !== undefined) {
            userAnswer.parentNode.style.color = answerColor;
        }

    });
    if (numCorrect >= quizQuestions.length) {
        let correctAnswers = document.querySelectorAll(".quiz-answers label.correct");
        for (let correctAnswer of correctAnswers) {
            correctAnswer.style.color = "green";
        }
    }

    document.getElementById("quiz-results").innerHTML = `Result: ${numCorrect} correct answer${numCorrect > 1 ? "s" : ""} out of ${quizQuestions.length}`;

    showAll();
}


function showSlide(n) {
    let slides = document.querySelectorAll(".quiz-slide");
    slides[currentSlide].classList.remove("quiz-active-slide");
    slides[n].classList.add("quiz-active-slide");
    currentSlide = n;
    document.getElementById("quiz-previous").disabled = (currentSlide === 0);
    document.getElementById("quiz-next").disabled = (currentSlide === slides.length - 1);
    if (currentSlide === slides.length - 1) {
        document.getElementById("quiz-submit").disabled = false;
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function initQuiz() {
    document.getElementById("quiz-block").innerHTML = QUIZ_CONTENT;
    document.getElementById("quiz").innerHTML = buildQuiz(window.quizQuestions);
    document.getElementById("quiz-submit").addEventListener("click", function () {
        showResults(window.quizQuestions)
    });
    document.getElementById("quiz-previous").addEventListener("click", showPreviousSlide);
    document.getElementById("quiz-next").addEventListener("click", showNextSlide);
    document.getElementById("quiz-submit").disabled = true;
    showSlide(0);
}

function setStartButton() {
    document.getElementById("quiz-start").addEventListener("click", initQuiz);
}

function checkIfQuiz(html) {
    window.quizQuestions = (html.includes("window.quizQuestions")) ? [] : null;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function install(hook, vm) {
    hook.beforeEach(function (html) {
        checkIfQuiz(html);
        return html;
    });
    hook.afterEach(function (html) {
        return (window.quizQuestions !== null) ? html + QUIZ_BLOCK : html
    });
    hook.doneEach(function () {
        if (window.quizQuestions !== null) setStartButton();
    })
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [install].concat(window.$docsify.plugins || []);
