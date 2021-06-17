import React from 'react';
import Figure from './Figure';

export default class Board extends React.Component {

    onClickCell = (selected, row_idx, col_idx) => {
        this.props.operations.move(selected, row_idx, col_idx);
    }

    makeTable(FigureMat) {
        return (
            <table>
                <tbody>
                { FigureMat.map((row, row_idx) => (
                    <tr key={row_idx}>
                        { row.map((cell, col_idx) => (
                            <td className="cell" key={(row_idx,col_idx)}
                                onClick={(e) => this.onClickCell(cell, row_idx, col_idx)}
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