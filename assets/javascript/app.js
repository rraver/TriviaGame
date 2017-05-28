var questions = [
  {
    question: "Which of the following options are used in standard access lists?",
    answerOne: "Destination address and subnet mask",
    answerTwo: "Source address and subnet mask",
    answerThree: "Destination address and wildcard mask",
    answerFour: "Source address and wildcard mask",
    correctAnswer: "Source address and wildcard mask"
  },
  {
    question: "Identify which of the services below use both TCP and UDP ports?",
    answerOne: "FTP",
    answerTwo: "TFTP",
    answerThree: "DNS",
    answerFour: "SSH",
    correctAnswer: "DNS"
  },
  {
    question: "Host A receives a frame and discards it after determining that it is corrupt. At which OSI layer are frames checked for errors?",
    answerOne: "Application",
    answerTwo: "Network",
    answerThree: "Physical",
    answerFour: "Data-link",
    correctAnswer: "Data-link"
  },
  {
    question: "Which command would prevent TFTP from address 172.16.16.16 to go through the Ethernet 0 interface 192.32.16.7?",
    answerOne: "access-list 1 deny 172.16.16.16",
    answerTwo: "access-list 101 deny host 172.16.16.16 1 host 192.32.16.7 eq 69",
    answerThree: "access-list 1 deny 192.32.16.7",
    answerFour: "access-list 1 deny ip host 172.16.16.16 1 host 192.32.16.7 eq 69",
    correctAnswer: "access-list 1 deny 172.16.16.16"
  },
  {
    question: "As a frame travels through a routed network the Mac address will always:",
    answerOne: " change to reflect the current source and destination",
    answerTwo: "remain the same",
    answerThree: "the source address will remain the same but the destination address will change",
    answerFour: "the source address will change and the destination address will change",
    correctAnswer: "DNS"
  },
  {
    question: "NVRAM is best described as:",
    answerOne: "A location to run the active configuration from",
    answerTwo: "A location to run the power on diagnostics from",
    answerThree: "A location to store a backup copy of the router configuration file",
    answerFour: "The source of commonly used configuration commands",
    correctAnswer: "A location to store a backup copy of the router configuration file"
  }
]
var currentQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
newQuestion();
var interval = setInterval(function(){ checkTime() }, 1000);


$("#timer").text(timer);

$(".answer").click(function(){
    console.log(this.name);
    var click = this.name;
    if ($("#" + click).text() === questions[currentQuestion].correctAnswer) {
      correctAnswer++;
      currentQuestion++;
      newQuestion();
    }
    else {
      wrongAnswer++;
      currentQuestion++;
      newQuestion();

    }
  });

function checkTime() {
  if (timer === 1) {
    alert("You ran out of time!");
    currentQuestion++;
    newQuestion();
  }
  else {
    timer--;
    console.log(timer);
    $("#timer").text(timer);

  }
};

function newQuestion() {
  console.log(questions.length);
  if (questions.length === currentQuestion) {
    endGame();
  }
  else {
    $('.answer').attr('checked',false);
    timer = 31;
    console.log(currentQuestion);
    $("#question").text(questions[currentQuestion].question);
    $("#answerOne").text(questions[currentQuestion].answerOne);
    $("#answerTwo").text(questions[currentQuestion].answerTwo);
    $("#answerThree").text(questions[currentQuestion].answerThree);
    $("#answerFour").text(questions[currentQuestion].answerFour);
    $('input[name=answerFour]').attr('checked',false);
  }
}

function endGame() {
  $("#questionbody").html("You have " + correctAnswer + " right answers" +
        "You have " + wrongAnswer + " wrong answers");
}

function gameReset() {
  currentQuestion = 0;
  correctAnswer = 0;
  wrongAnswer = 0;
  newQuestion();
  setInterval(interval);
  }
