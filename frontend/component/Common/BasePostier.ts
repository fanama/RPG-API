/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import 'regenerator-runtime/runtime'
import { Dispatch, SetStateAction } from 'react'
import Router from 'next/router'

class BasePostier {
    async commonGet(token: string, endpoint: string, setter?: Dispatch<SetStateAction<any>>) {
        axios
            .get(`${endpoint}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setter && setter(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    async commonPost(
        token: string,
        endpoint: string,
        body?: Record<string, unknown>,
        setter?: Dispatch<SetStateAction<unknown>>,
    ) {
        axios
            .post(`${endpoint}`, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setter && setter(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async login(
        username: string,
        password: string,
        setToken: Dispatch<SetStateAction<string>>,
        setRole: Dispatch<SetStateAction<string>>,
    ) {
        axios
            .post('/login/auth', {
                username,
                password,
            })
            .then((res) => {
                setToken(res.data.AccessToken)
                localStorage.setItem('token',res.data.access_token)
                Router.push('/main')
                setRole(res.data.Role)
                localStorage.setItem('role', res.data.Role)
            })
            .catch((err) => {
                console.log({err})
                alert("mot de passe incorect!")
            })
    }
}

export const basePostier = new BasePostier()
