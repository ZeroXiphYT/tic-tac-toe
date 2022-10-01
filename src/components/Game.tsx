import * as React from 'react'
import { Board } from './Board';
import { useGameState } from './GameState';
import { Log } from './Log';
import { Row, Column } from './Layout';

function Game() {
    const {
    gameState,
    current,
    xIsNext,
    winner,
    handleClick,
    jumpTo
    } = useGameState();
    return (
        <Row gap={20}>
            <Column gap={20}>
                <div style={{"fontSize":"25px"}}>
                    {
                        winner
                        ? `Winner ${winner}`
                        : gameState.step >= 9
                        ? `Tie`
                        :`Next Player: ${xIsNext ? 'X' : 'O'}`
                    }
                </div>
                <Board board={current} onClick={handleClick} />
            </Column>
            <Log history={gameState.history} jumpTo={jumpTo} />
        </Row>
    )
};

export default Game;