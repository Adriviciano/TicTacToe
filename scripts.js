let partida = 0 // 0=partida no comenzada, 1=partida en curso, -1 partida acabada
let turno = true //true=jugador 1,     false = jugador 2


let tablero = Array.from(document.getElementsByClassName('casilla'))
let chat = document.getElementById("mensaje")
let reset = document.getElementById('restart')
let playAgain = document.getElementById('jugar')


function reiniciar(partida){
    partida = 0
}
function comenzar(partida){
    partida = 1
}

function cambiarTurno(turno){
    if (turno === true){
        turno = false
        return 'Jugador2'
    }
    else{
        turno = true
        return 'Jugador1'
    }
}
function vaciarTablero(tablero){
    let cas=undefined
    for(var i=0; i < 9; i++){
        cas = tablero[i]
        cas.style.backgroundImage = "none"
    }
}

//BUCLE DE JUEGO
while (true){
    while (partida === 0){
        //instrucciones mientras no se esta jugando
        if (playAgain. click === true){
            comenzar(partida)
        }
    }
    while (partida === 1) {
        // instrucciones durante la partida
        if (reset.click === true){
            reiniciar(partida)
        }
    }
    while (partida === -1){
        //instrucciones al acabar la partida
        if (playAgain. click === true){
            comenzar(partida)
            //vaciar el tablero 
        }
    }
}