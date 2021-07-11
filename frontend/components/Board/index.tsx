import * as React from 'react'
import {useEffect,useState} from 'react'

import {postier} from './postier'

interface Proplist {
    heroes: any[]
}

export function Board() {

    const [heroes, setHeroes] = useState<any[]>([])

    useEffect(() => {
        postier.getHeroes(setHeroes)
    }, [])

    return (
        <div className="Board">
            test
            <Battlefield heroes={heroes} />
        </div>
    )
}

function Battlefield({heroes}:Proplist) {

    useEffect(() => {
        console.log(heroes)
        
    }, [heroes])

    const render = heroes[0]?heroes.map(h=><div key={Math.random()}>
        {h.Name}
    </div>):null;

    return <div className="Battlefield">
        {render}
    </div>
}
