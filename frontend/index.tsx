import * as React from 'react'
import {render} from 'react-dom'
import { Board } from './components/Board'

function App() {
  return <div>
  
    <Board />
  </div>
}



render(<App/>,document.getElementById("app"))