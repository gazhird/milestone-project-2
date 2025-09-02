

function loadEasy(level) {
window.sessionStorage.setItem('level', level);
setIcons(48,32);
}



document.getElementById('selectDifficulty').addEventListener("change", difficulty);
function difficulty() {
let level = this.value
window.sessionStorage.setItem('level', level);


switch (level) {
    case 'easy':
        document.getElementById('rowG').style.display = 'none';
        document.getElementById('rowH').style.display = 'none';
        document.getElementById('rowI').style.display = 'none';
        document.getElementById('rowJ').style.display = 'none';
        winnersArray = [];
        setIcons(48,24);
        break;
    case 'medium':
        document.getElementById('rowG').style.display = 'block';
        document.getElementById('rowH').style.display = 'block';
        document.getElementById('rowI').style.display = 'none';
        document.getElementById('rowJ').style.display = 'none';
        winnersArray = [];
        setIcons(64,32);
        break;
    case 'hard':
        document.getElementById('rowG').style.display = 'block';
        document.getElementById('rowH').style.display = 'block';
        document.getElementById('rowI').style.display = 'block';
        document.getElementById('rowJ').style.display = 'block';
        winnersArray = [];
        setIcons(80,40);
        break;
}

}



const gridArray = [ 'A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8',
                    'C1','C2','C3','C4','C5','C6','C7','C8','D1','D2','D3','D4','D5','D6','D7','D8',
                    'E1','E2','E3','E4','E5','E6','E7','E8','F1','F2','F3','F4','F5','F6','F7','F8', 
                    'G1','G2','G3','G4','G5','G6','G7','G8','H1','H2','H3','H4','H5','H6','H7','H8',
                    'I1','I2','I3','I4','I5','I6','I7','I8','J1','J2','J3','J4','J5','J6','J7','J8'];


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
    console.log(gridArray);
    }
    for (let g = 0; g < iconLength; g++) {    
    document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    pairsArray.push(gridArray[Id1], gridArray[Id2])
    window.sessionStorage.setItem('pairsArray', pairsArray);
    Id1 = Id1 + 2;
    Id2 = Id2 + 2;
    console.log(g);
    }
    }
    



    let clicks = 0;
    let first, second;
    let oldFirst, oldSecond;
    let clickedPair1, clickedPair2;


    function clicked(square) {
    clicks++;
    if (clicks === 1) {
    first = square;
    document.getElementById(first).style.backgroundColor = "yellow";
    } else if (clicks === 2) {
    second = square;
    document.getElementById(second).style.backgroundColor = "yellow";
    checkPair(first, second);
    } else if (clicks === 3) {
    oldFirst = first;
    oldSecond = second;
    
        if (winnersArray.includes(oldFirst) || winnersArray.includes(oldSecond) ) {
        document.getElementById(oldFirst).style.backgroundColor = "green";
        document.getElementById(oldSecond).style.backgroundColor = "green";
        } else {
        document.getElementById(oldFirst).style.backgroundColor = "white";
        document.getElementById(oldSecond).style.backgroundColor = "white";
        }

    clicks = 1;
    first = square;
    document.getElementById(first).style.backgroundColor = "yellow";
  
    }

}


   



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
        document.getElementById(first).style.backgroundColor = 'green';
        document.getElementById(second).style.backgroundColor = 'green';
        winnersArray.push(first, second);

        if (level === 'easy' && winnersArray.length == 48) {
        // 8x6  game 
        for (let id of winnersArray) {
        document.getElementById(id).style.backgroundColor = 'goldenrod';
        }
        let black = ['A1', 'A8', 'B3', 'B6','E3', 'E4', 'E5', 'E6', 'F1', 'F8']; 
        for (let id of black) {
        document.getElementById(id).style.backgroundColor = 'black';
        }
        let diagonal = ['A1', 'A8', 'D2', 'D7','E2','E7', 'F1', 'F8'];
        let degrees =  [135,225,45,315,225,135,45,315];
        for (let d = 0; d < diagonal.length; d++) {
        document.getElementById(diagonal[d]).style.background = `linear-gradient(${degrees[d]}deg, black 50%, goldenrod 50%)`;
        winnersArray = [];
        }}

        if (level === 'medium' && winnersArray.length == 64) {
        for (let id of winnersArray) {
        document.getElementById(id).style.backgroundColor = 'goldenrod';
        }
        let black = ['A1','A8','C3','C6','G3','G4','G5','G6','H1','H8']; 
        for (let id of black) {
        document.getElementById(id).style.backgroundColor = 'black';
        }
        let diagonal = ['A1', 'A8','C2','C3','C6','C7','D2','D3','D6','D7', 'F2', 'F7', 'G2', 'G7', 'H1', 'H8'];
        let degrees =  [135,225,315,45,315,45,225,135,225,135,45,315,225,135,45,315];
        for (let d = 0; d < diagonal.length; d++) {
        document.getElementById(diagonal[d]).style.background = `linear-gradient(${degrees[d]}deg, black 50%, goldenrod 50%)`;
        }}
    
        if (level === 'hard' && winnersArray.length == 80) {
        for (let id of winnersArray) {
        document.getElementById(id).style.backgroundColor = 'goldenrod';
        }
        let black = ['C1','C8','D1','D8','E1','E2','E7','E8','F1','F2','F3','F6','F7','F8','G1','G2','G3','G6','G7','G8','H1','H2','H3','H6','H7','H8','I1','I2','I7','I8']; 
        for (let id of black) {
        document.getElementById(id).style.backgroundColor = 'black';
        }
        let diagonal = ['C1', 'C8', 'E2', 'E7', 'H3', 'H6','I2','I7'];
        let degrees =  [45,315,45,315,135,225,135,225];
        for (let d = 0; d < diagonal.length; d++) {
        document.getElementById(diagonal[d]).style.background = `linear-gradient(${degrees[d]}deg, black 50%, goldenrod 50%)`;
        }}
    }

    s = s + 6;
    e = e + 6;

    }
    console.log(winnersArray);
}


































    // first second yellow till 3rd click then 3rd yellow and first second white 

//    if (clicks === 1) {
//     first = square;
//     document.getElementById(first).style.backgroundColor = "yellow";
//     } else if (clicks === 2) {
//     second = square;
//     document.getElementById(second).style.backgroundColor = "yellow";
//     clickedPair1 = first + ',' + second;
//     clickedPair2 = second + ',' + first;
//     } else if (clicks == 3) {
//     oldFirst = first;
//     oldSecond = second;
//     document.getElementById(oldFirst).style.backgroundColor = "white";
//     document.getElementById(oldSecond).style.backgroundColor = "white";
//     clicks = 1;
//     first = square;
//     document.getElementById(first).style.backgroundColor = "yellow";
//     } 




// function setIcons(level) {

//     let Id1 = 0
//     let Id2 = 1;
//     pairsArray = [];
//     if (level == 'easy') {
//     for (let i = 48 - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
//     }
//     for (let g = 0; g < 24; g++) {    
//     document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
//     document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
//     pairsArray.push(gridArray[Id1],gridArray[Id2])
//     window.sessionStorage.setItem('pairsArray', pairsArray);
//     Id1 = Id1 + 2;
//     Id2 = Id2 + 2;
//     }
//     }
//     else if (level == 'medium') {
//     for (let i = 64 - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
//     }
//     for (let g = 0; g < 32; g++) {    
//     document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
//     document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
//     pairsArray.push(gridArray[Id1], gridArray[Id2])
//     window.sessionStorage.setItem('pairsArray', pairsArray);
//     Id1 = Id1 + 2;
//     Id2 = Id2 + 2;
//     }
//     }
//     else if  (level == 'hard')  {
//     for (let i = 80 - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
//     console.log(gridArray);
//     }
//     for (let g = 0; g < 40; g++) {    
//     document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
//     document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
//     pairsArray.push(gridArray[Id1], gridArray[Id2])
//     window.sessionStorage.setItem('pairsArray', pairsArray);
//     Id1 = Id1 + 2;
//     Id2 = Id2 + 2;
//     console.log(g);
//     }
//     }
//     }


