import Router from 'next/router';
import * as React from 'react';

// Create my component
export function ButtonList() {

    const deconexion = ()=> {
        localStorage.clear()
        Router.push("/")
    }

    return (
        <div className="line">
            <button onClick={()=>Router.push('/main')} >Accueil</button>
            <button onClick={()=>Router.push('/table')}>Table</button>
            <button onClick={()=>Router.push('/zoom')}>Zoom</button>

            <button onClick={deconexion} >deconexion</button>
        </div>
    );
}
