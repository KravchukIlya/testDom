import React, { useState } from 'react'
import './App.css'
import { Avtoriz } from './components/avtoriz/Avtoriz'
import { Spisok } from './components/spisokdom/spisok'

const App = () => {
    const [reg, setReg] = useState(true)

    let Reg
    if (reg) {
        Reg = <Avtoriz setReg={setReg} />
    } else {
        Reg = <Spisok />
    }

    return <div className="App">{Reg}</div>
}

export default App
