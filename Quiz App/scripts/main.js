function submit() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;

    var correct = 0;

    if(q1 == 2){
        correct++;
    }
    if(q2 == 1){
        correct++;
    }
    if(q3 == 3) {
        correct++;
    }
    
    var pictures = ["images/win.gif", "images/meh.jpeg", "images/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You need to do better next time"];
	var score;

    if(correct ==0) {
        score = 2;
    }
    if(correct > 0 && correct < 3) {
        score = 1;
    }
    if (correct == 3) {
        score = 0;
    }
    document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}