import React, { Component } from 'react'
import NoteApp from './components/NoteApp/NoteApp'
import './App.css'

export default class App extends Component {

    render() {
        return (
            <div className='gradient-custom' >
                <NoteApp />
            </div>
        )
    }
}
