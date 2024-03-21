import React from 'react';

const buttonStyle = {
    border: '1px solid darkblue',
    borderRadius: '15px',
    fontSize: '40px',
    fontWeight: '800',
    cursor: 'pointer',
}
const Square = (props) => {

    const {value, ind, key, board, setBoard, player, setPlayer, handleClick} = props;

    return (
        <button
            onClick={() => handleClick(ind)}
            style={buttonStyle}
        >
            {value}
        </button>
    );
};

export default Square;
