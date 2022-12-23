const questions = [
    "What's your favorite color?",
    "What's a fun fact about you?",
    "What's your favorite video game?",
    "What fictional place would you most like to go to?",
    "If you were a vegetable, what vegetable would you be?",
    "Do you have any nicknames?"
];
// create a function that will shuffle the order of the questions and return a question from either the front or the back of t
// also we need to make sure a question isn't repeated
function shuffleQuestions() {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random())
    return shuffledQuestions
    }
const startButton = document.querySelector(".start_button");
startButton.addEventListener("click", function(){
    console.log("click")
    timer()
});
function draw() {
    // will remove a question and return a new question
    let shuffledQuestions = shuffleQuestions()
    let removedQuestion = shuffledQuestions.shift()
    return removedQuestion
    }
function timer() {
    const intervalId = setInterval(() => {
        const counter = document.querySelector(".counter");
        let value = counter.innerText;
        if (value === "0"){
            displayQuestion()
            // we need to end this timer at 0
            clearInterval(intervalId)
            console.log(intervalId)
        }
        else {
            console.log("Delayed for 1 second.");
            value--;
            counter.innerText = value;
        }
        }, "1000")
}
function displayQuestion() {
    const question = document.querySelector(".question");
    question.innerText = `${draw()}`;
    // call a function such as retrieveNewQuestion that will display another question with a new timer
    // this function will keep calling itself (loop?) until the game is over
    createQuestion()
}
function createQuestion () {
    const body = document.querySelector("body");
    const retrieveNewQuestion = document.createElement("button")
    retrieveNewQuestion.classList.add("new_question_button")
    body.appendChild(retrieveNewQuestion)
    retrieveNewQuestion.innerText = "New Question"
    console.log("retrieve", retrieveNewQuestion)
    retrieveNewQuestion.addEventListener("click", function() {
    console.log("hey")
    const question = document.querySelector(".question");
    question.innerText = `${draw()}`;
    })
}
// function displayQuestion() {
//     //for (let i = 120; i > 0; i--){
//     setTimeout(() => {
//     const question = document.querySelector(".question");
//     question.innerText = "question";
//     // console.log("setTimeout")
//     clearInterval()
//     }, "120000")
//     //}
// }

