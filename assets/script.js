var questionArr = ["What does an image tag look like", "Which are langueges for code", "What is an event listener"]
var answerArr = ["D","A","C"]
var timerEl = document.getElementById('countdown');
var timeLeft = 20;
var score = 0
var questionEl = queryselector.allClass(questionCard)
var current = 0 


function countdown() {


 
  var timeInterval = setInterval(function () {

    if (timeLeft > -1) {

      timerEl.textContent = timeLeft + 'seconds remaining';

      timeLeft--;
    } 
    
    },1000)
  }
  function wrongAnswer(){
     timeLeft -= 5
  }

var question1 = document.getElementById("answer1");
var question2 = document.getElementById("answer2");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedAnswer = document.getElementById("saved-question");


function saveAnswers() {

  var questionAnswers = {
    question1: question1.value,
    question2: question2.value,
    comment: comment.value.trim()
  };

  localStorage.setItem("questionsAnswers", JSON.stringify(questionAnswers));
}


function renderAnswers() {
 
  var questionsAnswers = JSON.parse(localStorage.getItem(questionsAnswers));

  if (questionsAnswers !== null) {
  document.getElementById("saved-question").innerHTML = questionsAnswers.question;
  document.getElementById("saved-questions").innerHTML = questionsAnswers.questions;
  document.getElementById("saved-questionss").innerHTML = questionsAnswers.questionss;

  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
  var userAnswer = document.getElementById("answers1").value 
  console.log(userAnswer)
  event.preventDefault();
  if (userAnswer != answerArr){
wrongAnswer();
  } else {
    score++;
  }
});

  
function init() {

  renderAnswers();
}

countdown();
init();