import React from 'react'
import MarkettingApp from "./components/markettingApp";
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider , createGenerateClassName } from '@material-ui/core';

export default () => {

    const generateClassName = createGenerateClassName({
        productionPrefix:'co',
    })

    return (<BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
        <div>
            <Header />
            <MarkettingApp />
        </div>
        </StylesProvider>
    </BrowserRouter>)

}