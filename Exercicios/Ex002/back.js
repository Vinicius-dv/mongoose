const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const {Schema} = mongoose
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
async function main(){
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/test') 
       console.log('banco iniciado')
    } catch (error) {
        console.log(error)
    }
}
main()

const userSchema = new Schema({
    nome:String,
    senha: String,
    num_tel:Number
})
const User = mongoose.model('user',userSchema)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/home.html'))
})
app.post('/login',async(req,res)=>{
    const {nome,senha,num_tel} = req.body
    try {
        const novo_user = new User({
            nome:nome,
            senha:senha,
            num_tel:num_tel
        })
        await novo_user.save()
        return res.status(200).json({message:'login evetuado com sucesso'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Erro interno'})
    }
})

app.listen(3001,()=>{
    console.log('Servidor iniciado')
})