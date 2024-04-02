const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const tu = document.getElementById('tu');
let pc = document.getElementById('pc');
const msg = document.getElementById('msg');
const result = document.getElementById('result');

piedra.addEventListener('click', function () {
    let player = game(piedra.value);
    showResult(player[1], player[2], player[0]);
});

papel.addEventListener('click', function () {
    let player = game(papel.value);
    showResult(player[1], player[2], player[0]);
});

tijera.addEventListener('click', function () {
    let player = game(tijera.value);
    showResult(player[1], player[2], player[0]);
});

// Juego

function game(move) {
    const play = player(parseInt(move));
    const pc = pcGame();
    let result = "";
    let ganaste = `¡ Ganaste ! 😎`;
    let perdiste = "¡ Perdiste ! 😒";
    let empate = "¡ Empate ! 🙃";

    if (play[0] === pc[0]) {
        result = empate;
    } else if ((play[0] === 1) && (pc[0] === 3)) {
        result = ganaste;
    } else if ((play[0] === 3) && (pc[0] === 2)) {
        result = ganaste;
    } else if ((play[0] === 2) && (pc[0] === 1)) {
        result = ganaste;
    } else {
        result = perdiste;
    }

    return [result, play[1], pc[1]];
}

/**
 * Jugador usuario
 * @param {int} move 
 * @returns array
 */
function player(move) {
    let image = images(move);

    return [move, image];
}

/**
 * Pc Juador
 * @returns array
 */

function pcGame() {
    let pc = Math.floor(Math.random() * 3) + 1;
    let image = images(pc);

    return [pc, image];
}

/**
 * Cargar imagenes
 * @param {int} player 
 * @returns string
 */
function images(player) {
    let route = './img/'
    let img = '';

    switch (player) {
        case 1:
            img = `${route}piedra.png`;
            break;
        case 2:
            img = `${route}papel.png`;
            break;
        case 3:
            img = `${route}tijera.png`;
            break;
    }

    return img;
}

/**
 * muestra en pantalla las imagenes y el resultado
 * 
 * @param {string} player 
 * @param {string} pcPlayer 
 * @param {string} msgPlayer 
 */

function showResult(player, pcPlayer, msgPlayer) {
    console.log(typeof player, typeof pcPlayer, typeof msgPlayer);
    let tuH1 = document.getElementById('tuH1');
    let pcH1 = document.getElementById('pcH1');
    tuH1.innerText = 'TÚ';
    pcH1.innerText = 'PC';

    tu.setAttribute('src', player);
    pc.setAttribute('src', pcPlayer);
    msg.innerHTML = msgPlayer;
}