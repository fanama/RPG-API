import * as React from 'react'
import { BoardContext } from '../../context/BoardContext'
import { postier } from './postier'

const {useState,useContext} = React

import "./style.scss"

export function Creator() {

    const {setRefresh} = useContext(BoardContext)


    const [name, setName] = useState("")    
    const [race, setRace] = useState("")

    const [lifePoint, setLifePoint] = useState<number>(0)
    const [armor, setArmor] = useState<number>(0)

    const [force, setForce] = useState<number>(0)
    const [vitesse, setVitesse] = useState<number>(0)
    const [constitution, setConstitution] = useState<number>(0)

    const [controle, setControle] = useState<number>(0)

    const [Sagesse, setSagesse] = useState<number>(0)
    const [Charisme, setCharisme] = useState<number>(0)
    const [inteligence, setInteligence] = useState<number>(0)

    const create = ()=>{
        const data = {
            Name:name,
            Race:race,

            LifePoint:parseInt(lifePoint),
            Armor: parseInt(armor),

            Force: parseInt(force),
            Vitesse: parseInt(vitesse),
            Constitution: parseInt(constitution),

            Controle: parseInt(controle),

            Inteligence: parseInt(inteligence),
            Sagesse: parseInt(Sagesse),
            Charisme: parseInt(Charisme),

            Owner: "master"
        }

        postier.create(data)
        setRefresh(r=>!r)

    }

    return (
        <div className="creator">

            <h1>Cree un personnage</h1>

            <div> <label >Name</label> <input value={name} onChange={e=>setName(e.target.value)} type="text" /></div> 
            <div> <label >Race</label> <input value={race} onChange={e=>setRace(e.target.value)} type="text" /></div> 

            <div> <label >PV</label> <input value={lifePoint} onChange={e=>setLifePoint(e.target.value)} type="number" /></div> 
            <div> <label >Armor</label> <input value={armor} onChange={e=>setArmor(e.target.value)} type="number" /></div> 

            <div> <label >force</label> <input value={force} onChange={e=>setForce(e.target.value)} type="number" /></div> 
            <div> <label >vitesse</label> <input value={vitesse} onChange={e=>setVitesse(e.target.value)} type="number" /></div> 
            <div> <label >constitution</label> <input value={constitution} onChange={e=>setConstitution(e.target.value)} type="number" /></div> 

            <div> <label >Controle</label> <input value={controle} onChange={e=>setControle(e.target.value)} type="number" /></div> 

            <div> <label >charisme</label> <input value={Charisme} onChange={e=>setCharisme(e.target.value)} type="number" /></div> 
            <div> <label >Sagesse</label> <input value={Sagesse} onChange={e=>setSagesse(e.target.value)} type="number" /></div> 
            <div> <label >Intelligence</label> <input value={inteligence} onChange={e=>setInteligence(e.target.value)} type="number" /></div> 

            <button onClick={create} >Créer</button>
        </div>
    )
}

