function populate() {

    if(quiz.isEnded()){
        //show score
        showScore();
    }
    else {
        //Add the title of the quiz.
        var element = document.getElementById("question");//Get the Question's HTML Container
        element.innerHTML = quiz.getQuestionIndex().text;//Add the question to the <p>

        //Add the choices to the buttons
        var choices = quiz.getQuestionIndex().choices;
        console.log(choices);
        console.log(quiz.score);
        //Get the buttons from the DOM and display the choices inside them
        for(var i=0; i<choices.length; i++){
            var choiceButton = document.getElementById("choice"+i);//Get the corresponding button element
            choiceButton.innerHTML = choices[i];//Add the choice's tetxt to the button
            guess("button"+i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess){
    var button = document.getElementById(id);
    console.log(guess);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    };

}

function showScore() {
    var resultHtml = "<h1>Thank You. Your result has been posted.</h1>";
    resultHtml += "<h3 id = 'score'>Your score: " + quiz.score + "</h3>";
    var element = document.getElementById("quiz");
    element.innerHTML = resultHtml; 
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex+1;
    var progress = document.getElementById("progress");
    progress.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}


function createQuestionList(questionList, subjectTitle, regNo){
    questions = questionList;
    titleOfSubject = subjectTitle;
    registerNo = regNo;
    quiz = new Quiz(questions);
    populate();
}

var questions, titleOfSubject, registerNo, quiz;

