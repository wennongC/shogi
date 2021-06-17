import React from 'react';
import Figure from './Figure';

class Board extends React.Component {

    makeTable(FigureMat) {
        console.log(FigureMat);
        return (
            <table>
                { FigureMat.map(row => (
                    <tr>
                        { row.map(cell => (
                            <td className="cell">
                                <Figure data={cell} />
                            </td>
                        )) }
                    </tr>
                )) }
            </table>
        );
    }

    render() {
        return this.makeTable(this.props.data);
    }
}

export default Board;