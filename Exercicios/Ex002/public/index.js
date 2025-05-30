async function main(){
    try {
        const req = await fetch('http://localhost:3001/login',{headers:{'Content-Type':'application/json'},method:'Post',body:JSON.stringify({nome:'vinicius',senha:'123',num_tel:19531})})
        const res = await req.json()
        console.log(res)
    } catch (error) {
        console.log('algo deu errado',error)
    }
}
main()