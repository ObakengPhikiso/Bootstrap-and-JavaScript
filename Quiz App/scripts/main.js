function submit() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question1.value;
    var q5 = document.quiz.question2.value;
    var q6 = document.quiz.question3.value;
    var q7 = document.quiz.question1.value;
    var q8 = document.quiz.question2.value;
    var q9 = document.quiz.question3.value;
    var q10 = document.quiz.question3.value;
    var q11 = document.quiz.question3.value;
    var q12 = document.quiz.question3.value;
    var q13 = document.quiz.question3.value;
    var q14 = document.quiz.question3.value;
    var q15 = document.quiz.question3.value;

    var correct = 0;
    var total = 15;
    var answers = [3,2,1,1,2,1,2,3,1,3,2,3,3,3,2];

    for(var i = 1; i <= total; i++) {
        if(eval('q'+i) == answers[i - 1]) {
            correct++;
        }
    }
    
    var pictures = ["images/win.gif", "images/meh.jpeg", "images/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You need to do better next time"];
	var score;

    if(correct == 0) {
        score = 2;
    }
    if(correct > 0 && correct < 6) {
        score = 1;
    }
    if (correct >= 6) {
        score = 0;
    }
    document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}