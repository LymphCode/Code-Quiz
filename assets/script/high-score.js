
// this data is synced to our high-score.html page and pushes the users initials and score
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var highScoresList = document.querySelector('#high-score-list');

for (var i = 0; i < highScores.length; i++) {
    var li = document.createElement('li');
    
    li.innerText = `${highScores[i].initials}: ${highScores[i].score}`;

    highScoresList.appendChild(li);
}


