function submit() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    var q11 = document.quiz.question11.value;
    var q12 = document.quiz.question12.value;
    var q13 = document.quiz.question13.value;
    var q14 = document.quiz.question14.value;
    var q15 = document.quiz.question15.value;

    var correct = 0;
    var total = 15;
    var answers = [1,2,1,3,1,2,1,2,3,1,3,2,3,3,2];

    for(var i = 1; i <= total; i++) {
        if(eval('q'+i) == answers[i - 1]) {
            correct++;
        }        
    }
    
    var pictures = ["images/excellent.gif","images/win.gif", "images/meh.jpeg", "images/lose.gif"];
	var messages = ["Excellent!!!","Great job!", "That's just okay", "You need to do better next time"];
	var score;

    if(correct == 0) {
        score = 3;
    }
    if(correct > 0 && correct < 7) {
        score = 2;
    }
    if (correct > 7 && correct <=10) {
        score = 1;
    }   
    if (correct > 10 && correct <=15) {
        score = 0;
    }
    document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}