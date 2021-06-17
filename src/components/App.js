import React from 'react';
import Board from './Board';

import initialBoard from "../data/initialBoard";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardData: initialBoard(),
            selected: null,
            selected_pos: null,
        }
    }

    getSelected = () => { return this.state.selected; }
    setSelected = (figure, pos) => {
        if (this.state.selected) {
            this.state.selected.unselect();
            this.setState({selected: null, selected_pos: null});
        }
        
        if (figure != this.state.selected) {
            this.setState({selected: figure, selected_pos: pos});
            figure.select();
        }
    }

    move = (dest_row, dest_col) => {
        let boardData = this.state.boardData;

        if (this.state.selected) {
            if (boardData[dest_row][dest_col] != null && 
                boardData[dest_row][dest_col].player_side == this.state.selected.player_side)
                return;

            const {row_idx, col_idx} = this.state.selected_pos;
            boardData[dest_row][dest_col] = boardData[row_idx][col_idx];
            boardData[row_idx][col_idx] = null;
            this.state.selected.unselect();
            this.setState({
                boardData: boardData,
                selected: null,
                selected_pos: null
            });
        }
    }

    render() {
        return (
            <Board data={this.state.boardData}
                operations={{
                    setSelected: this.setSelected,
                    getSelected: this.getSelected,
                    move: this.move
                }}
            />
        );
    }
}