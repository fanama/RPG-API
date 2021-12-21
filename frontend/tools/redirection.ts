import Router from 'next/router'

export const checkToken=()=>{
    let token=localStorage.getItem('token');
    if(token==null||token==""){
        console.log("vide!!!")
        Router.push("/")
    }
}