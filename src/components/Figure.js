import React from 'react'

class Figure extends React.Component {

    handleClick(e, figure) {
        if (e.type == "click") {
            
        } else if (e.type === 'contextmenu') {
            e.preventDefault();
            figure.flip();
            this.forceUpdate();
        }
    }

    render() {
        let data = this.props.data;

        if (data == null) return <></>;
        else {
            return (
                <button 
                    className="figure" style={{
                        backgroundColor: data.color,
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

export default Figure;