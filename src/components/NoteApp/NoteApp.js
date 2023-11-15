import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
    }
    changeInputHandler = (event) => {
        this.setState({ noteTitle: event.target.value })
    }
    changeColorHandler = (color) => {
        this.setState({
            inputColor: color
        })
    }
    addNoteHandler = () => {
        if (this.state.noteTitle) {
            let newNote = {
                id: this.state.notes.length + 1,
                noteTitle: this.state.noteTitle,
                noteColor: this.state.inputColor
            }
            this.setState({ notes: [...this.state.notes, newNote] })
        }
        this.clearInputValue()
    }
    clearInputValue = () => {
        this.setState({
            noteTitle: "",
            inputColor: '#fff'
        })
    }
    removeNoteHandler = (id) => {
        let copyNotes = [...this.state.notes]
        let newNotes = copyNotes.filter(note => note.id !== id)
        this.setState({ notes: [...newNotes] })
    }


    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">Note App Project</div>
                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" value={this.state.noteTitle} className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..."
                                            onChange={(event) => this.changeInputHandler(event)} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color => (
                                                <ColorBox color={color} onChangeBackgroundColor={() => this.changeColorHandler(color)} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={() => this.addNoteHandler()}><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={() => this.clearInputValue()}><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex row-gt-sm">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map(note => (
                                                    <Note {...note} onRemove={(id) => this.removeNoteHandler(id)} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
