
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
    },

];

//get elements from HTML
var startBtnEl= document.getElementById("startBtn");
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");
var timerEl=document.getElementById("timer");
var quizEl= document.getElementById("quiz");
var resultPageEl= document.getElementById("resultPage");
var scoreBoardEl= document.getElementById("scoreBoard");
var questionEl=document. getElementById("question")
var openPageEl=document.getElementById("openPage");
var initialEl=document.getElementById("initial");
var playerScoreEl=document.getElementById("playerScore");
var submitBtnEl=document.getElementById("submitBtn");
var userInitalEl=document.getElementById("userInitals");
var userScoreEl=document.getElementById("userScore");

//New elements needed 
var currentQuestionNo=0;                                         
var lastQuestionNo=quizQuestions.length;
var startingTime=31;                               
var timeInterval;
var score =0;
//get questions for the quiz
var getQuiz=function(){
    resultPageEl.style.display="none";
    scoreBoardEl.style.display="none";
    openPageEl.style.display="none";

    if (currentQuestionNo===lastQuestionNo){
        displayResult();
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

//Confirm Answer function

var confirmAns = function(picked){
    correct=quizQuestions[currentQuestionNo].correctAnswer;
    if(picked===correct && currentQuestionNo!==lastQuestionNo){
        currentQuestionNo++;
        score++;
        window.alert("CORRECT!YAY");
        getQuiz();
    }
    else if (picked!==correct && currentQuestionNo!==lastQuestionNo){
        currentQuestionNo++;
        startingTime=startingTime-5;
        window.alert("WRONG");
        getQuiz();
    }
    else{
        displayResult();
    }
};

//start game function 
var startGame=function(){
    resultPageEl.style.display="none";
    scoreBoardEl.style.display="none";
    openPageEl.style.display="none";
    timerEl.style.display="block";
    quizEl.style.display="grid";

    getQuiz();

    //timer
      timeInterval= setInterval(function(){
        startingTime--;
        timerEl.textContent="Timer: " + startingTime;

        if(startingTime===0){
            clearInterval(timeInterval);
            displayResult();
        }
    },1000)
};

//Show Result 
var displayResult =function(){
    openPageEl.style.display="none";
    quizEl.style.display="none";
    scoreBoardEl.style.display="none";
    timerEl.style.display="none";
    resultPageEl.style.display="grid";


    initialEl="";
    playerScoreEl.innerHTML="<p>" + "Here is your score:"+ score+"</p>";

};

//save information to local storage function 
 var saveToLocalStorage=function(){
    if(initialEl.value ===""){
        window.alert("Enter your inital to continue to see the Score Boar!")
        return false;
    }
    else{
        var recordScore=JSON.parse(localStorage.getItem("recordScore"))|| [];
        var currentPlayer=initialEl.value;
        var currentRecord ={
            name: currentPlayer,
            score:score
        };
        recordScore.push(currentRecord);
        localStorage.setItem("recordScore",JSON.stringify(recordScore));
    }
    displayScoreBoard();
 }
 submitBtnEl.addEventListener("click",saveToLocalStorage);

//Show Score Board
var displayScoreBoard=function(){
    openPageEl.style.display="none";
    quizEl.style.display="none";
    scoreBoardEl.style.display="grid";
    timerEl.style.display="none";
    resultPageEl.style.display="none";

    userInitalEl.innerHTML="";
    userScoreEl.innerHTML="";

    var highscore=JSON.parse(localStorage.getItem("recordScore")) || [];
    for (i=0;i<highscore.length;i++){
        var nameSpan=document.createElement("li");
        var scoreSpan=document.createElement("li");
        nameSpan.textContent=highscore[i].name;
        scoreSpan.textContent=highscore[i].score;

        userInitalEl.appendChild(nameSpan);
        userScoreEl.appendChild(scoreSpan);
    }
};




startBtnEl.addEventListener("click",startGame);