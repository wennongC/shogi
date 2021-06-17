import React from 'react'

export default class Figure extends React.Component {

    handleClick(e, figure) {
        if (e.type == "click") {
            this.props.operations.setSelected(figure, this.props.pos, this.props.idx);
        } else if (e.type === 'contextmenu') {
            e.preventDefault();
            figure.flip();
        }
        this.forceUpdate();
    }

    getDisplayColor(figure) {
        return figure.selected ? "#81ecec" : figure.color;
    }

    render() {
        let data = this.props.data;

        if (data == null) return <></>;
        else {
            return (
                <button 
                    className="figure" style={{
                        backgroundColor: this.getDisplayColor(data),
                        color: data.text_color
                    }}
                    onClick={(e) => this.handleClick(e, data)}
                    onContextMenu={(e) => this.handleClick(e, data)}
                >
                    {data.currentName}
                </button>
            );
        }
    }
}