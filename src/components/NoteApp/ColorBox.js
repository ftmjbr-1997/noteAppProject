import React, { Component } from 'react'

export default class ColorBox extends Component {

    changeColor = () => {
        this.props.onChangeBackgroundColor(this.props.color)
    }

    render() {
        return (
            <div className='color-box' style={{ backgroundColor: this.props.color }} onClick={() => this.changeColor()}>
            </div>
        )
    }
}
