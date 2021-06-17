import React from 'react'
import Figure from './Figure'

export default class CaptureSection extends React.Component {
    render() {
        return (
            <div style={{height:55}}>
            {this.props.figures.map((f, idx) => (
                <Figure data={f} key={idx} idx={idx} pos={null}
                    operations={this.props.operations}
                />
            ))}
            </div>
        );
    }
}