import * as React from 'react'

import "./style.scss"

export function Card({hero}) {


    return (
        <div className='Card'>

            <div className="headder">
                <h3>Name : {hero.Name}</h3>
            
                <div className="case">
                    PV : <input width="50%"/>/{hero.Lifepoint} 
                </div>
                <div className="case">
                    Race : {hero.Race} 
                </div> 
            </div>
            

           <div className="stat">
                <div className="case">
                    force : {hero.Force}  mod :  { Math.trunc((hero.Force-10)/2)} 
                </div> 
                <div className="case">
                    vitesse : {hero.Vitesse}  mod :  {Math.trunc((hero.Vitesse-10)/2)}     
                </div> 
                <div className="case">
                    constitution : {hero.Constitution}  mod :  {Math.trunc((hero.Constitution-10)/2)} 
                </div> 
                <div className="case">magie : {hero.Magie} </div> 
                <div className="case">
                    contrôle :<input/> /{hero.Controle} 
                </div> 
                <div className="case">
                    sagesse : {hero.Sagesse}  mod :  {Math.trunc((hero.Sagesse-10)/2)} 
                </div> 
                <div className="case">
                    intel : {hero.Inteligence}  mod :  {Math.trunc((hero.Sagesse-10)/2)} 
                </div> 
                <div className="case">
                    charisme : {hero.Charisme} mod :  {Math.trunc((hero.Charisme-10)/2)}  
                </div> 
           </div>

        </div>
    )
}
