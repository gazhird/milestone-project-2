
// This is a onload function from the body element 
// The for loop hides the medium and hard range of game difficulty squares. 
function loadEasy(level) {
let D2H = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D0','E1','E2','E3','E4','E5','E6','E7','E8','E9','E0','F1','F2','F3','F4','F5','F6','F7','F8','F9','F0',
            'G1','G2','G3','G4','G5','G6','G7','G8','G9','G0','H1','H2','H3','H4','H5','H6','H7','H8','H9','H0'];
for (let ids of D2H) {
        document.getElementById(ids).style.display = 'none';
        }
window.sessionStorage.setItem('level', level);
setIcons(30,15);
}


// This amends the game board table, hiding/showing rows of the game table and the difficulty button text.
// This Also resets winnerArray abd passes data to the SetIcons function 

// Easy has 30 squares, made of 15 pairs.    A,B,C from 0 to 9 
// Medium has 60 squares, made of 30 pairs.  A,B,C,D,E,F from 0 to 9 
// Hard has 80 squares made with 40 pairs.   A,B,C,D,E,F,G,H from 0 to 9. 


function difficulty(level) {
window.sessionStorage.setItem('level', level);

if (level == 'easy') {
        document.getElementById('easy').style.display = 'block';
        document.getElementById('medium').style.display = 'none';
        document.getElementById('hard').style.display = 'none';
        let D2H = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D0','E1','E2','E3','E4','E5','E6','E7','E8','E9','E0','F1','F2','F3','F4','F5','F6','F7','F8','F9','F0',
            'G1','G2','G3','G4','G5','G6','G7','G8','G9','G0','H1','H2','H3','H4','H5','H6','H7','H8','H9','H0'];
        for (let ids of D2H) {
        document.getElementById(ids).style.display = 'none';
        }
        winnersArray = [];
        setIcons(30,15);
} else if (level == 'medium') {
        document.getElementById('easy').style.display = 'none';
        document.getElementById('medium').style.display = 'block';
        document.getElementById('hard').style.display = 'none';
        
        let show = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D0','E1','E2','E3','E4','E5','E6','E7','E8','E9','E0','F1','F2','F3','F4','F5','F6','F7','F8','F9','F0'];
        for (let ids of show) {
        document.getElementById(ids).style.display = 'block';
        }
        let hide = ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G0','H1','H2','H3','H4','H5','H6','H7','H8','H9','H0'];
        for (let ids of hide) {
        document.getElementById(ids).style.display = 'none';
        }
        winnersArray = [];
        setIcons(60,30);
} else {
        document.getElementById('easy').style.display = 'none';
        document.getElementById('medium').style.display = 'none';
        document.getElementById('hard').style.display = 'block';
        let D2H = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D0','E1','E2','E3','E4','E5','E6','E7','E8','E9','E0','F1','F2','F3','F4','F5','F6','F7','F8','F9','F0',
            'G1','G2','G3','G4','G5','G6','G7','G8','G9','G0','H1','H2','H3','H4','H5','H6','H7','H8','H9','H0'];
        for (let ids of D2H) {
        document.getElementById(ids).style.display = 'block';
        }
        winnersArray = [];
        setIcons(80,40);
} }



// gridArray is an array of all the Ids from index.html
// iconArray is an array for Font Awesome icon names.  

const gridArray = [ 'A1','A2','A3','A4','A5','A6','A7','A8','A9','A0','B1','B2','B3','B4','B5','B6','B7','B8','B9','B0',
                    'C1','C2','C3','C4','C5','C6','C7','C8','C9','C0','D1','D2','D3','D4','D5','D6','D7','D8','D9','D0',
                    'E1','E2','E3','E4','E5','E6','E7','E8','E9','E0','F1','F2','F3','F4','F5','F6','F7','F8','F9','F0', 
                    'G1','G2','G3','G4','G5','G6','G7','G8','G9','G0','H1','H2','H3','H4','H5','H6','H7','H8','H9','H0'];


const iconsArray = [
                    'fa-fish','fa-feather','fa-hippo','fa-crow','fa-dragon','fa-otter','fa-kiwi-bird','fa-bugs',
                    'fa-cat','fa-cow','fa-dog','fa-dove','fa-bolt','fa-fish-fins','fa-frog','fa-horse','fa-horse-head',
                    'fa-robot','fa-mosquito','fa-paw','fa-ghost','fa-bomb','fa-poo','fa-spider','fa-worm','fa-truck',
                    'fa-thumbs-up','fa-face-smile','fa-trophy','fa-eye','fa-web-awesome','fa-star','fa-music',
                    'fa-wand-magic-sparkles','fa-heart','fa-rocket','fa-mug-hot','fa-pen','fa-plane','fa-truck-monster','fa-car']; 


// seticons uses data from the difficult function above example (easy: 30 ids & 15 pairs )
// The first for loop mixes up the gridArray order
// This code was copied from StackOverflow
// The second for loop, builds the HTML around the font awesome icon
// This loop uses each icon twice for two random gridArray div ids
// These correct pairs are placed together in an array and sent to session storage. 

function setIcons(gridLength, iconLength) {

    let Id1 = 0
    let Id2 = 1;
    pairsArray = [];

    for (let i = gridLength - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
    }
    for (let g = 0; g < iconLength; g++) {    
    document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    pairsArray.push(gridArray[Id1], gridArray[Id2])
    window.sessionStorage.setItem('pairsArray', pairsArray);
    Id1 = Id1 + 2;
    Id2 = Id2 + 2;
    }
}
    
    // clicked() is an event listener function, from index.html 
    // Captures the id's from the first, second, third and forth box clicked
    // it sends the first and second clicked box ids to a function called checkPair() 
    // the third box clicked replaces the 'first' variable, the old first value is stored as oldFirst 
    // the forth box clicked replaces the 'second' variable, the old second value is srored as oldSecond
    // oldFirst and oldSecond are checked against wiinnersArray, and their background colors are reset or set acordingly.
    // winnersArray comes from the checkPair() function below

    let clicks = 0;     
    let first, second, oldFirst, oldSecond, clickedPair1, clickedPair2;

    function clicked(square) {
    clicks++;
    if (clicks == 1) {
    first = square;
    document.getElementById(first).style.backgroundColor = "orange";
    } else if (clicks === 2) {
    second = square;
    document.getElementById(second).style.backgroundColor = "orange";
  
    checkPair(first, second);
    } else if (clicks === 3) {
    oldFirst = first;
    oldSecond = second;
    first = square;
    
        if (winnersArray.includes(oldFirst) || winnersArray.includes(oldSecond) ) {
        document.getElementById(oldFirst).style.backgroundColor = "#2973e2";
        document.getElementById(oldSecond).style.backgroundColor = "#2973e2";
        } else {
        document.getElementById(oldFirst).style.backgroundColor = "#bdd6ef";
        document.getElementById(oldSecond).style.backgroundColor = "#bdd6ef";
        }

    clicks = 1;
    first = square;
    document.getElementById(first).style.backgroundColor = "orange";
    }
}

    // checkPair() checks if two clicked ids match any pairs from the Array SetIcons() sent to seesionStoreage
    // I joined the values of first and second and also a reversed joined combination 
    // indexed values from my sessionStorgae array only returned one charactor at at time, not value pairs. 
    // I used slice to slice value pairs from the array and checked them against the clickedPairs ids
    // if a pair was found they would be stored in a array called winnersArray and their background color changed to darker blue. 
    // The if statements at the bottom are used to start and stop the setInterval timer. 

    let score = 0;
    let winnersArray = [];
    function checkPair(first, second) {
    
    clickedPair1 = first + ',' + second;
    clickedPair2 = second + ',' + first;

    let pairsArray = window.sessionStorage.getItem('pairsArray');
    let level = window.sessionStorage.getItem('level');
    
    let matchingPair;
    
    let s = 0, e = 5;
    for (let x = 1; x <= 40; x++) {
    matchingPair = pairsArray.slice(s, e);
    if (clickedPair1 === matchingPair || clickedPair2 === matchingPair) {
        document.getElementById(first).style.backgroundColor = '#2973e2';
        document.getElementById(second).style.backgroundColor = '#2973e2';
        winnersArray.push(first, second);
        score += 10;
    }
    s = s + 6;
    e = e + 6;
    }

    document.getElementById('score').textContent = 'SCORE: ' + score;

    if (level == 'easy' && winnersArray.length == 30) {
    myTimer('stop', score);
    } else if (level == 'medium' && winnersArray.length == 60) {
    myTimer('stop', score);
    } else if (level == 'hard' && winnersArray.length == 80)  {
    myTimer('stop', score);
    }

    if (winnersArray.length == 2) {
    setInterval(myTimer, 1000);
    }
}

// myTimer() is a function to control the setInterval timer function. 
// Then display the time in seconds and minuites. 
// I used a trigger solution to clearInterval  

let time = 0, minutes = 0, seconds = 0, stopper = 0;

function myTimer(trigger, score) {
    time += 1;
    if (trigger === 'stop') {
    stopper++
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
    document.getElementById('timer').innerText = 'TIME: ' + minutes + ':' + seconds;
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-time').innerText = 'TIME: ' + minutes + ':' + seconds;
    document.getElementById('game-score').innerText = 'SCORE: ' + score;
    document.getElementById('game-table').style.display = 'none';

    let stop = setInterval(myTimer, 1000);
    clearInterval(stop);
    document.getElementById("game-table").style.display = "none";
    }
    if (stopper < 1) {
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
    document.getElementById('timer').innerText = 'TIME: ' + minutes + ':' + seconds;
    }
}
