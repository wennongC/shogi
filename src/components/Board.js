import React from 'react';
import Figure from './Figure';

class Board extends React.Component {

    makeTable(FigureMat) {
        return (
            <table>
                <tbody>
                { FigureMat.map(row => (
                    <tr>
                        { row.map(cell => (
                            <td className="cell">
                                <Figure data={cell} />
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

export default Board;