import React from 'react';
import Board from './Board';

class App extends React.Component {

    makeTestData() {
        var res = []
        for (let a = 0; a < 8; a++) {
            var row = [];
            for (let b = 0; b < 8; b++) {
                row.push(null);
            }
            res.push(row);
        }
        return res;
    }

    render() {
        return (
            <Board data={this.makeTestData()} />
        );
    }
}

export default App;