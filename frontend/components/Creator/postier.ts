class Postier {

    create(data){

        console.log({data})

        fetch("/hero",{method:"post",body:JSON.stringify(data)}).then(res=>alert("succsess")).catch(err=>alert("failure"))
    }

}

export const postier = new Postier()