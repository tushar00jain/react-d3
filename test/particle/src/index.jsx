import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import d3 from 'd3';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
        <AppContainer />,
    document.querySelectorAll('.main')[0]
);
