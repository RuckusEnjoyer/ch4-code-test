

function displayHighscoreData() {
    var mainEl = $('main')
    var userData = JSON.parse(localStorage.getItem('scores'))


    userData.forEach(function(data){
        var dataEl = $('<section>')
        var headerEl = $('<h2>')
        var textEl = $('<p>')
        headerEl.text(data.initials);
        textEl.text(data.time);
      
    
        mainEl.append(dataEl);
        dataEl.append(headerEl);
        dataEl.append(textEl);
    
        dataEl.addClass('highscore-card');
    }) 

}
displayHighscoreData()