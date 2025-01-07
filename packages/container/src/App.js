import React from 'react'
import MarkettingApp from "./components/markettingApp";
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

export default () => {


    return (<BrowserRouter>
        <div>
            <Header />
            <MarkettingApp />
        </div>
    </BrowserRouter>)

}