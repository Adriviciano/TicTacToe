let partida = 0 // 0=partida no comenzada, 1=partida en curso, -1 partida acabada
 // turno  0=jugador 1,     1 = jugador 2
//let x = '<img src="fichaX.png">'
//let o = '<img src="fichaO.png">'


let tablero = [cas1, cas2, cas3, cas4, cas5, cas6, cas7, cas8, cas9]
let chat = document.getElementById("mensaje")
let reset = document.getElementById('restart')
let playAgain = document.getElementById('jugar')

let cas1 = document.getElementById('casilla1')
let cas2 = document.getElementById('casilla2')
let cas3 = document.getElementById('casilla3')
let cas4 = document.getElementById('casilla4')
let cas5 = document.getElementById('casilla5')
let cas6 = document.getElementById('casilla6')
let cas7 = document.getElementById('casilla7')
let cas8 = document.getElementById('casilla8')
let cas9 = document.getElementById('casilla9')

//cas1, cas2, cas3, cas4, cas5, cas6, cas7, cas8, cas9


function reiniciar(partida){
    partida = 0
}
function comenzar(partida){
    partida = 1
}



function cambiarTurno(turno){
    if (turno === 1){
        turno = 0
        ficha = '<img src="fichaX.png">'
        chat.innerHTML = "Turno del jugador 1"
       
    }
    else{
        turno = 1
        ficha = '<img src="fichaO.png">'
        chat.innerHTML = "Turno del jugador 2"
    }
}


function posicion(tablero){

    if (tablero[0].onclick){
        return 0
    }
    else if (tablero[1].click){
        return 1
    }
    else if (tablero[2].click){
        return 2
    }
    else if (tablero[3].click){
        return 3
    }
    else if (tablero[4].click){
        return 4
    }
    else if (tablero[5].click){
        return 5
    }
    else if (tablero[6].click){
        return 6
    }
    else if (tablero[7].click){
        return 7
    }
    else if (tablero[8].click){
        return 8
    }
}



function vaciarTablero(tablero){
    for(var i = 0; i < 9; i++){
        tablero[i].innerHTML = '';
    }
}



function moverX(posicion, tablero){
    tablero[posicion].innerHTML = '<img src="fichaX.png">'
}
function moverO(posicion, tablero){
    tablero[posicion].innerHTML = '<img src="fichaO.png">'
}



function comprobarTablero(tablero){
    //filas
    if (tablero[0].innerHTML === tablero[1].innerHTML === tablero[2].innerHTML){
        return true
    }
    else if (tablero[3].innerHTML === tablero[4].innerHTML === tablero[5].innerHTML){
        return true
    }
    else if (tablero[6].innerHTML === tablero[7].innerHTML === tablero[8].innerHTML){
        return true
    }
    //diagonales
    else if (tablero[0].innerHTML === tablero[4].innerHTML === tablero[8].innerHTML){
        return true
    }
    else if (tablero[2].innerHTML === tablero[4].innerHTML === tablero[6].innerHTML){
        return true
    }
    //columnas
    else if (tablero[0].innerHTML === tablero[3].innerHTML === tablero[6].innerHTML){
        return true
    }
    else if (tablero[1].innerHTML === tablero[4].innerHTML === tablero[7].innerHTML){
        return true
    }
    else if (tablero[2].innerHTML === tablero[5].innerHTML === tablero[8].innerHTML){
        return true
    }
    else{
        return false
    }
}

function noJugando(evento) {
    comenzar(partida)
    //numero aleatorio 0 o 1
    turno = Math.floor(Math.random()*2)
}

function Jugando()

//BUCLE DE JUEGO
while (true){
    while (partida === 0){
        chat.innerHTML = "A jugar!"
        //instrucciones mientras no se esta jugando
        playAgain.onclick = noJugando
    }
    while (partida === 1) {
        // instrucciones durante la partida
        if (reset.click){
            reiniciar(partida)
        }

        cambiarTurno(turno)


        if (turno === 0){
            moverX(posicion(tablero), tablero)
        }
        else{
            moverO(posicion(tablero), tablero)
        }

        comprobarTablero(tablero)

    }
    while (partida === -1){
        //instrucciones al acabar la partida
        chat.innerHTML = "Has ganado!"
        if (playAgain.click){
            comenzar(partida)
            turno = Math.floor(Math.random()*2)
            //vaciar el tablero 
            vaciarTablero(tablero)
        }
    }
}