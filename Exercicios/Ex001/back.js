const express = require('express')
const app = express()
app.use(express.json())
const porta = 3000
const mongoose = require('mongoose')
async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('servidor iniciado')
    } catch (error) {
        console.log(error)
    }
}
main()

app.listen(porta,()=>{
    console.log('servidor inciado na porta '+porta)
})