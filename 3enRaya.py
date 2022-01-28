import random

def FirstMove():
    if random.randint(0,1) == 1:
        print('Empieza el jugador')
        return 'jugador'
    else:
        print('Empieza el ordenador')
        return 'ordenador'

def XorY():
    ficha = ''
    while not (ficha == 'X' or ficha == 'O'):
        ficha = input('¿Con qué ficha quieres jugar? (X/O)').upper()
    if ficha == 'X':
        return ['X', 'O']
    else:
        return ['O', 'X']

def drawBoard(board):
    print('   |   |')
    print(' ' + board[1] + ' | ' + board[2] + ' | ' + board[3])
    print('   |   |')
    print('-----------')
    print('   |   |')
    print(' ' + board[4] + ' | ' + board[5] + ' | ' + board[6])
    print('   |   |')
    print('-----------')
    print('   |   |')
    print(' ' + board[7] + ' | ' + board[8] + ' | ' + board[9])
    print('   |   |')

def  PlayerMove(board):
    move = ' '
    while move not in '1 2 3 4 5 6 7 8 9'.split() or not hayEspacio(board, int(move)):
        print('Dónde quieres mover? (1-9)')
        move = input()
    return int(move)

def copiaTablero(board):
    copia = []
    for i in board:
        copia.append(i)
    return copia

def hayEspacio(board, move):
    return board[move] == ' '

def playAgain():
    print('¿Quieres jugar de nuevo? (si / no)')
    return input().lower().startswith('s')

def makeMove(board, letter, move):
    board[move] = letter

def ganador(bo, le):
    # bo=board   le=letra
    return ((bo[7] == le and bo[8] == le and bo[9] == le) or # linea de abajo
    (bo[4] == le and bo[5] == le and bo[6] == le) or # linea del medio
    (bo[1] == le and bo[2] == le and bo[3] == le) or # linea de arriba
    (bo[7] == le and bo[4] == le and bo[1] == le) or # linea izquierda
    (bo[8] == le and bo[5] == le and bo[2] == le) or # linea medio
    (bo[9] == le and bo[6] == le and bo[3] == le) or # linea derecha
    (bo[7] == le and bo[5] == le and bo[3] == le) or # diagonal
    (bo[9] == le and bo[5] == le and bo[1] == le)) # diagonal


#
#
#Algoritmo para que el ordenador juegue bien
#
#

def chooseRandomMoveFromList(board, movesList):
    # Returns a valid move from the passed list on the passed board.
    # Returns None if there is no valid move.
    possibleMoves = []
    for i in movesList:
        if hayEspacio(board, i):
            possibleMoves.append(i)

    if len(possibleMoves) != 0:
        return random.choice(possibleMoves)
    else:
        return None

def getComputerMove(board, computerLetter):
    # Given a board and the computer's letter, determine where to move and
    # return that move.
    if computerLetter == 'X':
        playerLetter = 'O'
    else:
        playerLetter = 'X'

    # Here is our algorithm for our Tic Tac Toe AI:
    # First, check if we can win in the next move
    for i in range(1, 10):
        copy = copiaTablero(board)
        if hayEspacio(copy, i):
            makeMove(copy, computerLetter, i)
            if ganador(copy, computerLetter):
                return i

    # Check if the player could win on his next move, and block them.
    for i in range(1, 10):
        copy = copiaTablero(board)
        if hayEspacio(copy, i):
            makeMove(copy, playerLetter, i)
            if ganador(copy, playerLetter):
                return i

    # Try to take one of the corners, if they are free.
    move = chooseRandomMoveFromList(board, [1, 3, 7, 9])
    if move != None:
        return move

    # Try to take the center, if it is free.
    if hayEspacio(board, 5):
        return 5

    # Move on one of the sides.
    return chooseRandomMoveFromList(board, [2, 4, 6, 8])


#
#
#
#Fin del algoritmo
#
#
#


def tableroLleno(board):
    for i in range(1, 10):
        if hayEspacio(board, i):
            return False
    return True

print('3 EN RAYA')

while True:
    # Reset the board
    theBoard = [' '] * 10
    playerLetter, computerLetter = XorY()
    turn = FirstMove()
    gameIsPlaying = True

    while gameIsPlaying:
        if turn == 'jugador':
            # Player's turn.
            drawBoard(theBoard)
            move = PlayerMove(theBoard)
            makeMove(theBoard, playerLetter, move)

            if ganador(theBoard, playerLetter):
                drawBoard(theBoard)
                print('Enhorabuena has ganado al algoritmo')
                gameIsPlaying = False
            else:
                if tableroLleno(theBoard):
                    drawBoard(theBoard)
                    print('Empate')
                    break
                else:
                    turn = 'ordenador'

        else:
            # Computer's turn.
            move = getComputerMove(theBoard, computerLetter)
            makeMove(theBoard, computerLetter, move)

            if ganador(theBoard, computerLetter):
                drawBoard(theBoard)
                print('Has perdido contra el ordenador vaya tont@')
                gameIsPlaying = False
            else:
                if tableroLleno(theBoard):
                    drawBoard(theBoard)
                    print('Empate cruck')
                    break
                else:
                    turn = 'jugador'

    if not playAgain():
        break