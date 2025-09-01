

function loadEasy(level) {
document.getElementById('test1').textContent = level;
setIcons(level);
}





document.getElementById('selectDifficulty').addEventListener("change", difficulty);
function difficulty() {
let level = this.value

document.getElementById('test1').textContent = level;


switch (level) {
    case 'easy':
        document.getElementById('rowG').style.display = 'none';
        document.getElementById('rowH').style.display = 'none';
        document.getElementById('rowK').style.display = 'none';
        document.getElementById('rowJ').style.display = 'none';
        setIcons(level);
        break;
    case 'medium':
        document.getElementById('rowG').style.display = 'block';
        document.getElementById('rowH').style.display = 'block';
        document.getElementById('rowK').style.display = 'none';
        document.getElementById('rowJ').style.display = 'none';
        setIcons(level);
        break;
    case 'hard':
        document.getElementById('rowG').style.display = 'block';
        document.getElementById('rowH').style.display = 'block';
        document.getElementById('rowK').style.display = 'block';
        document.getElementById('rowJ').style.display = 'block';
        setIcons(level);
        break;
}

}



const gridArray = ['A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','C1','C2','C3','C4','C5','C6','C7','C8','D1','D2','D3','D4','D5','D6','D7','D8','E1','E2','E3','E4','E5','E6','E7','E8','F1','F2','F3','F4','F5','F6','F7','F8','G1','G2','G3','G4','G5','G6','G7','G8','H1','H2','H3','H4','H5','H6','H7','H8','J1','J2','J3','J4','J5','J6','J7','J8','K1','K2','K3','K4','K5','K6','K7','K8'];





const iconsArray = [
        'fa-fish','fa-feather','fa-hippo','fa-crow','fa-dragon','fa-otter','fa-kiwi-bird','fa-bugs',
        'fa-cat','fa-cow','fa-dog','fa-dove','fa-bolt','fa-fish-fins','fa-frog','fa-horse','fa-horse-head',
        'fa-robot','fa-mosquito','fa-paw','fa-ghost','fa-bomb','fa-poo','fa-spider','fa-worm','fa-truck',
        'fa-thumbs-up','fa-face-smile','fa-trophy','fa-eye','fa-web-awesome','fa-star','fa-music',
        'fa-wand-magic-sparkles','fa-heart','fa-car','fa-mug-hot','fa-pen','fa-plane','fa-truck-monster']; 







function setIcons(level) {

    let Id1 = 0
    let Id2 = 1;
    if (level == 'easy') {
    for (let i = 48 - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
    }
    for (let g = 0; g < 24; g++) {    
    document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    Id1 = Id1 + 2;
    Id2 = Id2 + 2;
    }
    }
    else if (level == 'medium') {
    for (let i = 64 - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
    }
    for (let g = 0; g < 32; g++) {    
    document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    Id1 = Id1 + 2;
    Id2 = Id2 + 2;
    }
    }
    else {
    for (let i = 80 - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
    }
    for (let g = 0; g < 40; g++) {    
    document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    Id1 = Id1 + 2;
    Id2 = Id2 + 2;
    }
    }



  
    

    }



    // let answer = pairsArray.sort();
    // console.log('alpha ',answer);
    // window.sessionStorage.setItem('pairsArray', pairsArray);














































    //     for (let i = gridArray.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [gridArray[i], gridArray[j]] = [gridArray[j], gridArray[i]];
    //     }
        


    //     document.getElementById('test3').textContent = 'length ' + gridArray.length;
    //     document.getElementById('test4').textContent = 'array ' + gridArray;



    //     let Id1 = 0
    //     let Id2 = 1;
    //     pairsArray = [];
    //     for (let g = 0; g < times; g++) {    
    //         document.getElementById(gridArray[Id1]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';
    //         document.getElementById(gridArray[Id2]).innerHTML = '<div><i class="fa-solid ' + iconsArray[g] + ' "></i></div>';

    //         pairsArray.push(gridArray[Id1]);
    //         pairsArray.push(gridArray[Id2]);

    //         Id1 = Id1 + 2;
    //         Id2 = Id2 + 2;

    //     }

    //  }