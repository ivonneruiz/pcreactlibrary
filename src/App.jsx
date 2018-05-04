import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PCButton from './components/PCButton';
import PCButton2 from './components/PCButton2';
import PCSelect from './components/PCSelect';

const lstOptions = [{ value: 1, description: "Summer 2017" }, { value: 2, description: "Autumn 2017" }, { value: 3, description: "Spring 2018" }]

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <PCButton>Boton</PCButton>
                <PCButton2>Boton 2</PCButton2>
                <br />
                <PCSelect label="Period" id="selTest" value="1" options={lstOptions} />
            </div>
        );
    }
}

export default App;
