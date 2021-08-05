import * as React from 'react'
import {useEffect,useState,useContext} from 'react'
import { BoardContext } from '../../context/BoardContext'
import { Card } from '../Card'
import { Creator } from '../Creator'

import {postier} from './postier'

import "./style.scss"

interface Proplist {
    heroes: any[]
}

export function Board() {


    const {refresh} = useContext(BoardContext)
    const [heroes, setHeroes] = useState<any[]>([])

    useEffect(() => {
        postier.getHeroes(setHeroes)
    }, [refresh])

    return (
        <div className="Board">
            <Creator />
            <Battlefield heroes={heroes} />
        </div>
    )
}

function Battlefield({heroes}:Proplist) {

    useEffect(() => {
        console.log(heroes)
        
    }, [heroes])

    const render = heroes[0]?heroes.map(h=><Card hero={h} />):null;

    return <div className="Battlefield">
        {render}
    </div>
}
