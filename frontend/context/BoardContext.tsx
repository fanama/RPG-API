import *as React from 'react'

export const BoardContext = React.createContext(null)

export function BoardProvider({children}) {

    const [refresh, setRefresh] = React.useState(false)

    return (
        <BoardContext.Provider value={{
            refresh, setRefresh
          
           

        }}>
            {children}
        </BoardContext.Provider>
    )
}
