import React from 'react'

export default class CaptureSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            figures: []
        }
    }

    render() {
        return (
            <div style={{height:55}}>
            {this.state.figures.map(f => (
                <Figure data={f} pos={null}
                    operations={this.props.operations}
                />
            ))}
            </div>
        );
    }
}