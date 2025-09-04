



function loadEasy(level) {
let D2H = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D0','E1','E2','E3','E4','E5','E6','E7','E8','E9','E0','F1','F2','F3','F4','F5','F6','F7','F8','F9','F0',
            'G1','G2','G3','G4','G5','G6','G7','G8','G9','G0','H1','H2','H3','H4','H5','H6','H7','H8','H9','H0'];
for (let ids of D2H) {
        document.getElementById(ids).style.display = 'none';
        }
window.sessionStorage.setItem('level', level);
setIcons(30,15);
}






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
}


        

        
      
}





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
    
// #2973e2; winner blue 
// #bdd6ef  loser background 

    let clicks = 0;
    let first, second;
    let oldFirst, oldSecond;
    let clickedPair1, clickedPair2;


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


   
    let winnersArray = [];
    function checkPair(first, second) {
    
    


    clickedPair1 = first + ',' + second;
    clickedPair2 = second + ',' + first;


    let pairsArray = window.sessionStorage.getItem('pairsArray');
    // let level = window.sessionStorage.getItem('level');
    
    let matchingPair;
    
    


    let s = 0, e = 5;
    for (let x = 1; x <= 40; x++) {
    matchingPair = pairsArray.slice(s, e);
    console.log('MP',x,'  ',matchingPair);
    if (clickedPair1 === matchingPair || clickedPair2 === matchingPair) {
        document.getElementById(first).style.backgroundColor = 'green';
        document.getElementById(second).style.backgroundColor = 'green';
        winnersArray.push(first, second);
        
        
    }

    s = s + 6;
    e = e + 6;
    
    }
    
    console.log('WA ', winnersArray);

    // if (winnersArray.length === 2) {
    // setInterval(myTimer, 1000);
    // }

    
}



// let time = 0;
// let minutes = 0;
// let seconds = 0;
// let stopper = 0;

// function myTimer(trigger) {
//     time += 1;
//     if (trigger === 'stop') {
//     stopper++
//     minutes = Math.floor(time / 60);
//     seconds = time - minutes * 60;
//     document.getElementById('timer').innerText = 'TIME: ' + minutes + ':' + seconds;
//     let stop = setInterval(myTimer, 1000);
//     clearInterval(stop);
//     }
//     if (stopper < 1) {
//     minutes = Math.floor(time / 60);
//     seconds = time - minutes * 60;
//     document.getElementById('timer').innerText = 'TIME: ' + minutes + ':' + seconds;
//     }
// }











// if (level === 'easy' && winnersArray.length == 30) {
        // myTimer('stop');
        // winnersArray = [];
        // }

        // if (level === 'medium' && winnersArray.length == 60) {
        // myTimer('stop');
        // winnersArray = [];
        // }
    
        // if (level === 'hard' && winnersArray.length == 80) {
        // myTimer('stop');
        // winnersArray = [];
        // }









        // for (let id of winnersArray) {
        // document.getElementById(id).style.backgroundColor = '#2973e2';
        // }
        // let black = ['A1', 'A8', 'B3', 'B6','E3', 'E4', 'E5', 'E6', 'F1', 'F8']; 
        // for (let id of black) {
        // document.getElementById(id).style.backgroundColor = 'black';
        // }
        // let diagonal = ['A1', 'A8', 'D2', 'D7','E2','E7', 'F1', 'F8'];
        // let degrees =  [135,225,45,315,225,135,45,315];
        // for (let d = 0; d < diagonal.length; d++) {
        // document.getElementById(diagonal[d]).style.background = `linear-gradient(${degrees[d]}deg, black 50%, #2973e2 50%)`;


        // for (let id of winnersArray) {
        // document.getElementById(id).style.backgroundColor = '#2973e2';
        // }
        // let black = ['A1','A8','C3','C6','G3','G4','G5','G6','H1','H8']; 
        // for (let id of black) {
        // document.getElementById(id).style.backgroundColor = 'black';
        // }
        // let diagonal = ['A1', 'A8','C2','C3','C6','C7','D2','D3','D6','D7', 'F2', 'F7', 'G2', 'G7', 'H1', 'H8'];
        // let degrees =  [135,225,315,45,315,45,225,135,225,135,45,315,225,135,45,315];
        // for (let d = 0; d < diagonal.length; d++) {
        // document.getElementById(diagonal[d]).style.background = `linear-gradient(${degrees[d]}deg, black 50%, #2973e2 50%)`;

        // for (let id of winnersArray) {
        // document.getElementById(id).style.backgroundColor = '#2973e2';
        // }
        // let black = ['C1','C8','D1','D8','E1','E2','E7','E8','F1','F2','F3','F6','F7','F8','G1','G2','G3','G6','G7','G8','H1','H2','H3','H6','H7','H8','I1','I2','I7','I8']; 
        // for (let id of black) {
        // document.getElementById(id).style.backgroundColor = 'black';
        // }
        // let diagonal = ['C1', 'C8', 'E2', 'E7', 'H3', 'H6','I2','I7'];
        // let degrees =  [45,315,45,315,135,225,135,225];
        // for (let d = 0; d < diagonal.length; d++) {
        // document.getElementById(diagonal[d]).style.background = `linear-gradient(${degrees[d]}deg, black 50%, #2973e2 50%)`;