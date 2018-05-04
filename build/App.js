import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PCButton from './components/PCButton';
import PCButton2 from './components/PCButton2';
import PCSelect from './components/PCSelect';

const lstOptions = [{ value: 1, description: "Summer 2017" }, { value: 2, description: "Autumn 2017" }, { value: 3, description: "Spring 2018" }];

class App extends Component {
    render() {
        return React.createElement(
            'div',
            { className: 'App' },
            React.createElement(
                'header',
                { className: 'App-header' },
                React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
                React.createElement(
                    'h1',
                    { className: 'App-title' },
                    'Welcome to React'
                )
            ),
            React.createElement(
                'p',
                { className: 'App-intro' },
                'To get started, edit ',
                React.createElement(
                    'code',
                    null,
                    'src/App.js'
                ),
                ' and save to reload.'
            ),
            React.createElement(
                PCButton,
                null,
                'Boton'
            ),
            React.createElement(
                PCButton2,
                null,
                'Boton 2'
            ),
            React.createElement('br', null),
            React.createElement(PCSelect, { label: 'Period', id: 'selTest', value: '1', options: lstOptions })
        );
    }
}

export default App;