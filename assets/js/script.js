//Global variables

var qTitleEl = $('#question-title');
var startMenu = $('.start');
var qCardEl = $('.card')
var button = $('.answer');
var start = $('#start-button');
var answer1 = $('#answer-1');
var answer2 = $('#answer-2');
var answer3 = $('#answer-3');
var answer4 = $('#answer-4');
var answerAnnouncer =$('.answer-announcer');
var right = $('.right');
var highscores = $('.highscores');
var scoreSubmitButton = $('#scores');
var timerEl = $('#timer');
var finalScore = {
    initial: $('#highscore')

}

//timer

function timer() {
    var timeLeft = 60;
    var timerInterval = setInterval(function(){
        if (timeLeft>1){
            timerEl.text(timeLeft);
            timeLeft--;
        } else{
            timerEl.text(" ");
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

//Questions

function questionOne(){
    qTitleEl.text("Which is not a primative data type?");
    answer1.text('number');
    answer2.text('string');
    answer3.text('object');
    answer4.text('boolean');
    answer3.addClass('right')
    button.on('click', questionTwo);
};


function questionTwo(){
    qTitleEl.text('What javascript function lets you round down?');
    answer1.text('Math.random');
    answer2.text('Math.round');
    answer3.text('Math.ceiling');
    answer4.text('Math.floor');
    button.on('click', questionThree);
};

function questionThree(){
    qTitleEl.text('?');
    answer1.text('?');
    answer2.text('?');
    answer3.text('/');
    answer4.text('?');
    button.on('click', questionFour)
}

function questionFour(){
    qTitleEl.text('?');
    answer1.text('?');
    answer2.text('?');
    answer3.text('?');
    answer4.text('?');
    button.on('click', endGame)
}

function endGame(){
    qCardEl.addClass('none');
    highscores.removeClass('none');
}


//make start button work w/timer 
start.on('click', function(){
    timer();
    qCardEl.removeClass('none');
    questionOne();
    startMenu.addClass('none');
})

//make highscores stored in local storage

function scoreSubmissionHandler(){
    localStorage.setItem('initials', JSON.stringify(finalScore))
}

scoreSubmitButton.on('click', function(){
scoreSubmissionHandler()
})


