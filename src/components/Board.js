import React from 'react';
import Figure from './Figure';

export default class Board extends React.Component {

    // Notify the Game.js to make a move
    onClickCell = (row_idx, col_idx) => {
        this.props.operations.move(row_idx, col_idx);
    }

    // Generate the HTML table based on the board data provided by Game.js
    makeTable(FigureMat) {
        return (
            <table>
                <tbody>
                { FigureMat.map((row, row_idx) => (
                    <tr key={row_idx}>
                        { row.map((cell, col_idx) => (
                            <td className="cell" key={(row_idx,col_idx)}
                                onClick={(e) => this.onClickCell(row_idx, col_idx)}
                            >
                                <Figure data={cell} pos={{row_idx,col_idx}}
                                    operations={this.props.operations}
                                />
                            </td>
                        )) }
                    </tr>
                )) }
                </tbody>
            </table>
        );
    }

    render() {
        return this.makeTable(this.props.data);
    }
}