import React from 'react'

export default class HomePage extends React.Component {
    render() {
        return (
            <div style={{paddingLeft:30}}>
                <h1>Shogi Game 将棋ゲーム</h1>
                <hr />
                <a href="/game"><button>Start the Game</button></a>
            </div>
        );
    }
}