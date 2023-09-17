//add global variables
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

function questionOne(){
qTitleEl.text("Which is not a primative data type?");
answer1.text('number');
answer2.text('string');
answer3.text('object');
answer4.text('boolean');
answer3.addClass('right')
button.on('click', questionTwo);
};

//make function for question 2
function questionTwo(){
    qTitleEl.text('What javascript function lets you round down?');
    answer1.text('Math.random');
    answer2.text('Math.round');
    answer3.text('Math.ceiling');
    answer4.text('Math.floor');
    button.on('click', questionThree);
};
// make function for question 3
function questionThree(){
    qTitleEl.text('?');
    answer1.text('Speedo');
    answer2.text('Vest');
    answer3.text('Sweater');
    answer4.text('Dress');
    button.on('click', questionFour)
}
//make function for question 4
function questionFour(){
    qTitleEl.text('What is his favorite Food?');
    answer1.text('spagetti');
    answer2.text('Vest');
    answer3.text('Sweater');
    answer4.text('Dress');
    button.on('click', endGame)
}

function endGame(){
    qCardEl.addClass('none');
    highscores.removeClass('none');
}

//make start button work w/timer 
start.on('click', function(){
    qCardEl.removeClass('none');
    questionOne();
    startMenu.addClass('none');

    })

right.on('click', function(){
    var divEl = $('div');
    if(right){
        divEl.removeClass('none');
        answerAnnouncer.text('Correct!');
        return;
    } else {
        divEl.removeClass('none');
        answerAnnouncer.text('Incorrect...');
        return;
    };   
})
//change to next question

//make highscores stored in local storage

function scoreSubmissionHandler(){
    localStorage.setItem()
}