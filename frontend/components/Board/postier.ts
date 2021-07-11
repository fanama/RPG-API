class Postier {
    getHeroes(setter){
        fetch("/heroes").then(res=>{
            res.json().then(val=>setter(val))
        }).catch(err=>{console.log(err)})
    }
}

export const postier = new Postier()