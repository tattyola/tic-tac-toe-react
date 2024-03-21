import './App.css';
import React, {useEffect, useState} from "react";
import Board from "./components/Board";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [winner, setWinner] = useState(null)
    const [isXNext, setIsXNext] = useState(true)

    const handleClick = (ind) => {
        if (!board[ind] && !winner) {
            const newBoard = [...board];
            newBoard[ind] = isXNext ? 'x' : 'o';
            setBoard(newBoard);
            setIsXNext(!isXNext);
        }
    }

    const checkWinner = () => {
        const comb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (const el of comb) {
            const [a, b, c] = el;
            if (board[a] !== null && board[b] === board[a] && board[b] === board[c]) {
                setWinner(board[a]);
            }
        }
    }

    useEffect(() => {
        checkWinner()
    }, [board]);

    const restart = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
        setWinner(null)
    }

    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <Board
                board={board}
                setBoard={setBoard}
                // player={player}
                // setPlayer={setPlayer}
                handleClick={handleClick}
            />
            {winner &&
                <div>
                    <div>
                        Winner {winner}
                    </div>
                    <button onClick={restart}>Restart</button>
                </div>
            }
        </div>
    );
}

export default App;
