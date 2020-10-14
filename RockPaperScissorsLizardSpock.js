let button = document.querySelector('#button');
let rules = document.querySelector('.rules_wraper');
let card = document.querySelector('#images');
let header = document.querySelector('.header');
let choiceWon = document.querySelector('#choice_won');
let play = document.querySelector('#play');
let SheldonChoice = document.querySelector('#Sheldon_choice');
let yourChoice = document.querySelector('#your_choice');
let wtf = document.querySelector('.wtf');
let yourCounter = document.querySelector('#your_counter');
let SheldonCounter = document.querySelector('#Sheldon_counter');
let yourScore = 0;
let SheldonScore = 0;
let vanish = document.querySelector('#vanish');
let playPosition = document.querySelector('.play_choice_wraper');
let solution = document.querySelector('.solution');

yourCounter.textContent = yourScore;
SheldonCounter.textContent = SheldonScore;
document.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log(13);
        play.click();
    }
});

button.addEventListener('click', function () {
    header.style.display = 'none';
    card.style.display = 'none';
    rules.style.display = 'block';
    choiceWon.style.display = 'none';
    playPosition.style.display = 'none';
    solution.style.display = 'none';
});
let thanks = document.querySelector('.thanks_button');
thanks.addEventListener('click', function () {
    header.style.display = 'flex';
    rules.style.display = 'none';
    card.style.display = 'inline-block';
    choiceWon.style.display = 'inline-block';
    playPosition.style.display = 'flex';
    solution.style.display = 'flex';
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
    let hideCounter = document.querySelector('.hide_counter');
    playPosition.style.justifyContent = 'space-between';
    hideCounter.style.display = 'block';
    wtf.style.display = 'block';
    drawInterval();
    play.style.visibility = 'hidden';
    document.querySelector('.info').style.visibility = 'visible';
    choiceWon.textContent = 'choose one:';
    choiceWon.style.visibility = 'visible';
}


);
let paperscissors = 'scissors cuts paper';
let scissorspaper = 'scissors cuts paper';
let lizardspock = 'lizard poisons Spock';
let spocklizard = 'lizard poisons Spock';
let paperrock = 'paper covers rock';
let rockpaper = 'paper covers rock';
let rockscissors = 'rock crushes scissors';
let scissorsrock = 'rock crushes scissors';
let rocklizard = 'rock crushes lizard';
let lizardrock = 'rock crushes lizard';
let rockspock = 'Spock vaporizes rock';
let spockrock = 'Spock vaporizes rock';
let spockscissors = 'Spock smashes scissors';
let scissorsspock = 'Spock smashes scissors';
let lizardscissors = 'scissors decapitates lizard';
let scissorslizard = 'scissors decapitates lizard';
let lizardpaper = 'lizard eats paper';
let paperlizard = 'lizard eats paper';
let paperspock = 'paper disproves Spock';
let spockpaper = 'paper disproves Spock';
let pics = document.querySelector('.pics_wraper');
let choice;
let icons = [...document.querySelectorAll('.icons')].forEach(function choose(icons) {
    icons.addEventListener('click', function () {
        if (play.style.visibility === 'hidden') {
            stop();
            yourChoice.style.display = 'inline';
            SheldonChoice.style.display = 'inline';
            vanish.style.display = 'flex';
            play.style.visibility = 'visible';
            play.textContent = 'Play again';
            function choosen(event) {
                choice = event.target;
                SheldonChoice.textContent = 'Sheldon chose: ' + drawnIcon;
                yourChoice.textContent = 'You chose: ' + choice.id;
            }
            choosen(event);


            if (drawnIcon === choice.id) { choiceWon.textContent = 'Draw'; document.querySelector('.explanation').textContent = choice.id + ' and ' + drawnIcon; } else if ((choice.id === 'paper' & drawnIcon === 'scissors') || (choice.id === 'rock' & drawnIcon === 'paper') || (choice.id === 'scissors' & drawnIcon === 'rock') || (choice.id === 'spock' & drawnIcon === 'lizard') || (choice.id === 'lizard' & drawnIcon === 'scissors') || (choice.id === 'lizard' & drawnIcon === 'rock') || (choice.id === 'scissors' & drawnIcon === 'spock') || (choice.id === 'paper' & drawnIcon === 'lizard') || (choice.id === 'spock' & drawnIcon === 'paper') || (choice.id === 'rock' & drawnIcon === 'spock')) {
                choiceWon.textContent = 'Sheldon won!'; SheldonScore += 1;
                document.querySelector('.explanation').textContent = eval(choice.id + drawnIcon);
            }
            else {
                choiceWon.textContent = 'You won!'; yourScore += 1;
                document.querySelector('.explanation').textContent = eval(choice.id + drawnIcon);
            }
            console.log(choice.id + drawnIcon);
            document.querySelector('.explanation').style.visibility = 'visible';
            yourCounter.textContent = yourScore;
            SheldonCounter.textContent = SheldonScore;
            play.addEventListener('click', function () {
                play.style.visibility = 'hidden';
                yourChoice.style.display = 'none';
                SheldonChoice.style.display = 'none';
                vanish.style.display = 'none';
                document.querySelector('.explanation').style.visibility = 'hidden';

                // wtf.style.display = 'none';


            });
        }
    });
});


