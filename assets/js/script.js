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
var finalScore = {
    initial: initialInput.value,
    time: timeLeft
}
var timeLeft = 60;
var timerInterval

//Question
function correct(){
    var right = answer.attr("data-state")
    if(right === 'correct'){
        answerAnnouncer.text("Correct!")
        return;
    } else{
        answerAnnouncer.text("Incorrect.")
        timeLeft-10;
        return;
    }
}
function questionOne(){
    qTitleEl.text("Which is not a primative data type?");
    answer1.text('number');
    answer2.text('string');
    answer3.text('object');
    answer4.text('boolean');
    answer3.addClass('true')
    button.on('click', function(){
        correct()
        questionTwo()
    });
};


function questionTwo(){
    answer4.attr("data-state", "correct")
    qTitleEl.text('What javascript function lets you round down?');
    answer1.text('Math.random');
    answer2.text('Math.round');
    answer3.text('Math.ceiling');
    answer4.text('Math.floor');
    button.on('click', function(){
        correct()
        questionThree()
    });
};

function questionThree(){
    qTitleEl.text('What way is Javascript read?');
    answer1.text('Left to Right');
    answer2.text('Top-Down');
    answer3.text('Around and Around');
    answer4.text('It is not read');
    button.on('click', function(){
        correct()
        questionFour()
    });
}

function questionFour(){
    qTitleEl.text('?');
    answer1.text('?');
    answer2.text('?');
    answer3.text('?');
    answer4.text('?');
    button.on('click', function(){
        correct()
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


//make highscores stored in local storage

function scoreSubmissionHandler(){
    localStorage.setItem('initials', JSON.stringify(finalScore))
}

scoreSubmitButton.on('click', function(){
scoreSubmissionHandler()
})


//experimenting:

