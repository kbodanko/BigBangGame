let button = document.querySelector('#button');
let rules = document.querySelector('.rules_wraper');
let card = document.querySelector('#images');
let header = document.querySelector('.header');
let choiceWon = document.querySelector('#choice_won');
let play = document.querySelector('#play');
let SheldonChoice = document.querySelector('#Sheldon_choice');
let yourChoice = document.querySelector('#your_choice');
button.addEventListener('click', function () {
    header.style.display = 'none';
    card.style.display = 'none';
    rules.style.display = 'block';
    choiceWon.style.display = 'none';
    play.style.display = 'none';
});
let thanks = document.querySelector('.thanks_button');
thanks.addEventListener('click', function () {
    header.style.display = 'flex';
    rules.style.display = 'none';
    card.style.display = 'inline-block';
    choiceWon.style.display = 'inline-block';
    play.style.display = 'block';
});

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let lizard = document.querySelector('#lizard');
let spock = document.querySelector('#spock');
let drawn = document.querySelector('#drawn');
let iconList = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let interval;

function drawInterval() {
    draw();
    interval = setInterval(draw, 50);
}
function stop() {
    clearInterval(interval);

}
let drawnIcon;
function draw() {
    drawnIcon = iconList[Math.round(Math.random() * 4)];
    drawn.setAttribute('src', 'img/' + drawnIcon + '.jpg');


}
function changeDisplay() {
    console.log('run', yourChoice.style.display);
    if ((SheldonChoice.style.display === 'none') & (yourChoice.style.display === 'none')) { SheldonChoice.style.display = 'inline'; yourChoice.style.display = 'inline'; console.log('inline'); } else if ((SheldonChoice.style.display === 'inline') & (yourChoice.style.display === 'inline')) {
        SheldonChoice.style.display = 'none'; yourChoice.style.display = 'none'; console.log('none');
    }

}
play.addEventListener('click', function () {
    drawInterval();
    play.style.visibility = 'hidden';
    document.querySelector('.info').style.visibility = 'visible';
    choiceWon.textContent = 'choose one:';
    choiceWon.style.visibility = 'visible';
}


);
let pics = document.querySelector('.pics_wraper');
let choice;
let icons = [...document.querySelectorAll('.icons')].forEach(function choose(icons) {
    icons.addEventListener('click', function () {
        stop();
        console.log(yourChoice.style.display);
        yourChoice.style.display = 'inline';
        SheldonChoice.style.display = 'inline';
        console.log(yourChoice.style.display);

        play.style.visibility = 'visible';
        play.textContent = 'Play again';
        function choosen(event) {
            choice = event.target;
            SheldonChoice.textContent = 'Sheldon choose: ' + drawnIcon;
            yourChoice.textContent = 'You choose: ' + choice.id;
        }
        choosen(event);

        if (play.style.visibility === 'visible') {
            if (drawnIcon === choice.id) { choiceWon.textContent = 'Draw'; } else if ((choice.id === 'paper' & drawnIcon === 'scissors') || (choice.id === 'rock' & drawnIcon === 'paper') || (choice.id === 'scissors' & drawnIcon === 'rock') || (choice.id === 'Spock' & drawnIcon === 'lizard') || (choice.id === 'lizard' & drawnIcon === 'scissors') || (choice.id === 'rock' & drawnIcon === 'lizard') || (choice.id === 'scissors' & drawnIcon === 'Spock') || (choice.id === 'paper' & drawnIcon === 'lizard') || (choice.id === 'Spock' & drawnIcon === 'paper') || (choice.id === 'rock' & drawnIcon === 'Spock')) { choiceWon.textContent = 'Sheldon won!'; }
            else { choiceWon.textContent = 'You won!'; }
        }

        play.addEventListener('click', function () {
            play.style.visibility = 'hidden';
            yourChoice.style.display = 'none';
            SheldonChoice.style.display = 'none';
     
        });
    });
});


