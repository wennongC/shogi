import React from 'react';
import Board from './Board';

import initialBoard from "../data/initialBoard";

class App extends React.Component {

    render() {
        return (
            <Board data={initialBoard()} />
        );
    }
}

export default App;