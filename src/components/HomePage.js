import React from 'react'

export default class HomePage extends React.Component {
    render() {
        return (
            <div style={{paddingLeft:30}}>
                <h1>Shogi Game 将棋ゲーム</h1>
                <hr />
                <a href="/game"><button>Start the Game</button></a>
                <hr />
                <h3>Game Control:</h3>
                <p><strong>right click a figure</strong>: select a figure</p>
                <p>(after above):</p>
                <ul>
                    <li><p><strong>right click it again </strong>: cancel the selection</p></li>
                    <li><p><strong>right click a empty cell or a cell has enemy figure</strong>: move the figure</p></li>
                </ul>
                <p><strong>left click a figure</strong>: turn that figure into back side</p>
                <hr />
                <p>No programming rule to restrict how to move the figure</p>
                <p>ルールとマナーを守って楽しくデュエルしよう！</p>
            </div>
        );
    }
}