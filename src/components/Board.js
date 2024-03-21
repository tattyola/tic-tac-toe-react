import React from 'react';
import Square from "./Square";
const style = {
    border: '2px solid darkblue',
    borderRadius: '15px',
    height: '300px',
    width: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
}

const Board = ({board, setBoard, player, setPlayer, handleClick}) => {

    return (
        <div style={style}>
            {board.map((value, ind) =>
                <Square
                    value={value}
                    key={ind}
                    ind={ind}
                    board={board}
                    setBoard={setBoard}
                    player={player}
                    setPlayer={setPlayer}
                    handleClick={handleClick}

                />
            )}
        </div>
    );
};

export default Board;
