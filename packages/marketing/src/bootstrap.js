import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'

// mount function

const mount=(el)=>{
    console.log("mount", el)
    ReactDOM.render(<App />, el)
}

// In Isolatoion mount call

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing_dev_root')

    if(devRoot){
        mount(devRoot);
    }
}


// when running throgh container

export {mount}