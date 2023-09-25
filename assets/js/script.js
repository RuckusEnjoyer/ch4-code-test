//Global variables

var qTitleEl = $('#question-title');
var startMenu = $('.start');
var qCardEl = $('.card')
var button = $('.answer');
var start = $('#start-button');
var answer = $('.answer');
var initialInput = $('#highscore')
var answer1 = $('#answer-1');
var answer2 = $('#answer-2');
var answer3 = $('#answer-3');
var answer4 = $('#answer-4');
var answerAnnouncer =$('#answer-announcer');
var right = $('.right');
var highscores = $('.highscores');
var scoreSubmitButton = $('#scores');
var timerEl = $('#timer');
var timeLeft = 60;
var finalScore = initialInput.value
var timerInterval
var clickedAnswer





//The Questions

//question one
function questionOne(){
    qTitleEl.text("Which is not a primative data type?");
    answer1.text('number');
    answer2.text('string');
    answer3.text('object');
    answer4.text('boolean');
    //event listener for a button click
    button.on('click', function(){
        clickedAnswer = $(this).text().trim();
        //function for correct/incorrect
    $(function(){
        if (clickedAnswer === "object") {
            answerAnnouncer.text("Correct!");
            return
        } else {
        answerAnnouncer.text("Incorrect.");
        timeLeft -= 10;
    }
    })
        questionTwo()
    });
};

//question 2
function questionTwo(){
    qTitleEl.text('What javascript function lets you round down?');
    answer1.text('Math.random');
    answer2.text('Math.round');
    answer3.text('Math.ceiling');
    answer4.text('Math.floor');
    button.on('click', function(){
        clickedAnswer = $(this).text().trim();
        $(function(){
            if (clickedAnswer === "math.floor") {
                answerAnnouncer.text("Correct!");
                return
            } else {
              answerAnnouncer.text("Incorrect.");
              timeLeft -= 10;
          }
        })

        questionThree()
    });
};

//question 3
function questionThree(){
    qTitleEl.text('What way is Javascript read?');
    answer1.text('Left to Right');
    answer2.text('Top-Down');
    answer3.text('Around and Around');
    answer4.text('It is not read');
    button.on('click', function(){
        clickedAnswer = $(this).text().trim();
        $(function(){
            if (clickedAnswer === "Top-Down") {
                answerAnnouncer.text("Correct!");return
            } else {
              answerAnnouncer.text("Incorrect.");
              timeLeft -= 10;
          }
        })

        questionFour()
    });
}

//question 4
function questionFour(){
    qTitleEl.text('What is the correct API function for an event listener in vanilla javascript?');

    answer1.text('variable.addEventListener(event-type, function(){})');
    answer2.text('variable.on(event-type, function(){})');
    answer3.text('addEventListener(event-type, function(){})');
    answer4.text('variable.addEventListener(function(){}, event-type');
    button.on('click', function(){
        clickedAnswer = $(this).text().trim();
        $(function(){
            if (clickedAnswer === "variable.addEventListener(event-type, function(){})") {
                answerAnnouncer.text("Correct!");
                return
            } else {
              answerAnnouncer.text("Incorrect.");
              timeLeft -= 10;
          }
        })

        endGame()
    });
}

//timer
function timer() {
    timerInterval = setInterval(function(){
        if (timeLeft > 0){
            timerEl.text(timeLeft);
            timeLeft--;
        } else{
            timerEl.text(" ");
            clearInterval(timerInterval);
            endGame()
        }
    }, 1000);
}

//Start Button 
start.on('click', function(){
    timer();
    qCardEl.removeClass('none');
    questionOne();
    startMenu.addClass('none');
})

//End Game Function

function endGame(){
    var scoreAnnouncer= $('h2');
    qCardEl.addClass('none');
    highscores.removeClass('none');
    scoreAnnouncer.text('Your Score Is ' + timeLeft + "!");
    clearInterval(timerInterval);
    timerEl.text(' ');
}

//store in local storage

scoreSubmitButton.on("click", function(event) {
    var initials = document.querySelector("#highscore").value;
    var time = timeLeft;

    var array = []
    if (localStorage.getItem('scores')) {
        array = JSON.parse(localStorage.getItem('scores'))
    } else {
        array = []
    }

    var data = {
      initials: initials,
      time: time
    };

    array.push(data)

    var jsonData = JSON.stringify(array);
  
    localStorage.setItem("scores", jsonData);
  });