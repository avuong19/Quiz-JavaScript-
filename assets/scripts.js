
//quiz component
var quizQuestions =[
    {
        question:"Which built-in method removes the last element from an array and returns that element?",
        choiceA:"last()",
        choiceB:"get()",
        choiceC:"pop()",
        choiceD:"None of the above",
        correctAnswer:"c",
    },
    {
        question:"Which of the following is true about the alert() function",
        choiceA:"anchor()",
        choiceB:"big()",
        choiceC:"blink()",
        choiceD:"bold",
        correctAnswer:"d",
    },
    {
        question:"Which built-in method removes the last element from an array and returns that element?",
        choiceA:"The alert() function makes the browser show a pop-up to the user",
        choiceB:"The alert() function obscures the underlying webpage",
        choiceC:"The user has to click OK before any other actions can be taken",
        choiceD:"All of the above",
        correctAnswer:"d",
    },
    {
        question:"Which of the following is the correct comparison operator for equals",
        choiceA:"=",
        choiceB:"==",
        choiceC:"!==",
        choiceD:"!=",
        correctAnswer:"b",
    },
    {
        question:"If A is true and B is false, which of the following results is returned for these the Boolean operators based on the truth tables?",
        choiceA:"A || B is true",
        choiceB:"A || B is false",
        choiceC:"A ! B is false",
        choiceD:"A && B is true",
        correctAnswer:"a",
    }

];

//get elements from HTML
var startBtnEl= document.getElementsByClassName("startBtn");
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");
var timerEl=document.getElementsByClassName("timer");
var quizEl= document.getElementsByClassName("quiz");
var resultPageEl= document.getElementsByClassName("resultPage");
var scoreBoardEl= document.getElementsByClassName("scoreBoard");
var questionEl=document. getElementById("question")

//New elements needed 
var currentQuestionNo=0;
var lastQuestionNo=quizQuestions.length;

//get questions for the quiz
var getQuiz=function(){
    resultPageEl.style.display="none";
    scoreBoardEl.style.display="none";

    if (currentQuestionNo===lastQuestionNo){
        //todo:get fuction in 
    }
    else{
        var currentQuestion=quizQuestions[currentQuestionNo];
        questionEl.innerHTML="<p>" + currentQuestion.question+"</p>";
        btnA.innerHTML=currentQuestion.choiceA;
        btnB.innerHTML=currentQuestion.choiceB;
        btnC.innerHTML=currentQuestion.choiceC;
        btnD.innerHTML=currentQuestion.choiceD;
    }

};