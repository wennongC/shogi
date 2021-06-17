import React from 'react';
import Board from './Board';
import CaptureSection from './CaptureSection';

import initialBoard from "../data/initialBoard";
import {PLAYER_1, PLAYER_2} from '../data/FigureData';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardData: initialBoard(),
            selected: null,
            selected_pos: null,
            selected_idx: null,
            captures: { }
        }
        this.state.captures[PLAYER_1] = [];
        this.state.captures[PLAYER_2] = [];
    }

    getSelected = () => { return this.state.selected; }
    setSelected = (figure, pos, idx) => {
        // If a figure is already selected, then cancel it.
        if (this.state.selected) {
            this.state.selected.unselect();
            this.setState({selected: null, selected_pos: null, selected_idx: null});
        }
        
        // If the selected figure is not itself, then update the state.
        if (figure != this.state.selected) {
            this.setState({selected: figure, selected_pos: pos, selected_idx: idx});
            figure.select();
        }
    }

    move = (dest_row, dest_col) => {
        let boardData = this.state.boardData;

        if (this.state.selected) {
            // Test if the figure inside the selected cell is the same side figure
            if (boardData[dest_row][dest_col] != null && 
                boardData[dest_row][dest_col].player_side == this.state.selected.player_side)
                return;

            // If there is an enemy figure there, then put that into the capture section.
            if (boardData[dest_row][dest_col]) {
                this.state.captures[this.state.selected.player_side].push(boardData[dest_row][dest_col]);
                boardData[dest_row][dest_col].unselect();
                boardData[dest_row][dest_col].switchSide();
            }

            // Put the new figure into the destination cell
            boardData[dest_row][dest_col] = this.state.selected;

            if (this.state.selected_pos) {
                const {row_idx, col_idx} = this.state.selected_pos;
                boardData[row_idx][col_idx] = null;
            } else if (this.state.selected_idx != undefined) {
                this.state.captures[this.state.selected.player_side].splice(this.state.selected_idx, 1);
            }

            // Reset the properties
            this.state.selected.unselect();
            this.setState({
                boardData: boardData,
                selected: null,
                selected_pos: null,
                selected_idx: null
            });
        }
    }

    // Render method
    render() {
        const operations = {
            setSelected: this.setSelected,
            getSelected: this.getSelected,
            move: this.move
        };

        return (
            <>
                <CaptureSection operations={operations} figures={this.state.captures[PLAYER_2]} />
                <hr/>
                <Board data={this.state.boardData} operations={operations} />
                <hr/>
                <CaptureSection operations={operations} figures={this.state.captures[PLAYER_1]} />
            </>
        );
    }
}