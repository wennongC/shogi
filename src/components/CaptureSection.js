import React from 'react'
import Figure from './Figure'

export default class CaptureSection extends React.Component {
    render() {
        return (
            <div style={{height:50}}>
                {this.props.figures.map((f, idx) => (
                    <span key={idx} style={{paddingRight:5}}>
                        <Figure data={f} idx={idx} pos={null}
                            operations={this.props.operations}
                        />
                    </span>
                ))}
            </div>
        );
    }
}