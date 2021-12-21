import * as React from 'react'
// import logo from '../../../assets/logo.svg'
// import './login.scss'
import { FormEvent, ReactElement, useContext, useState } from 'react'
import { basePostier } from '../Common/BasePostier'
import { Navigate } from 'react-router'

export function Login(): ReactElement {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")


    const connexion = (e: FormEvent) => {
        e.preventDefault()
        basePostier.login(username, password, setToken, setRole)
    }

    return (
        <div className="container-login">
            <div className="center">{/* <img height="100" width="380" alt="logo cliris" src={logo} /> */}</div>
            <div className="center">
                <form onSubmit={connexion}>
                    <h1>Login</h1>
                    <input
                        className="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nom d'utilisateur"
                    />
                    <input
                        className="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                    />
                    <button className="submit">Se connecter</button>
                </form>
            </div>
        </div>
    )
}
