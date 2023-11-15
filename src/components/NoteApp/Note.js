import React, { Component } from 'react'

export default class Note extends Component {

    removeNote = () => {
      this.props.onRemove(this.props.id)
    }

    render() {
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: this.props.noteColor }}
                onClick={() => this.removeNote()}><p className="card-text p-3">{this.props.noteTitle}</p></div>
        )
    }
}
