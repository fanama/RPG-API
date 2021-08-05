import * as React from 'react'
import {render} from 'react-dom'
import { Board } from './components/Board'
import { BoardProvider } from './context/BoardContext'

function App() {

  return <BoardProvider children={<Board />}>
  
    
  </BoardProvider>
}



render(<App/>,document.getElementById("app"))