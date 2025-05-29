const express = require('express')
const app = express()
app.use(express.json())
const porta = 3000
const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    nome: String,
    senha: String,
    num_tel:Number
})
const user = mongoose.model('user',userSchema)
app.post('/cadastro',(req,res)=>{
    const {nome,senha,num_tel} = req.body
    async function user_novo(){
        try {
            const novo_user = new user({
                nome:nome,
                senha:senha,
                num_tel:num_tel
            })
            novo_user.save()
        } catch (error) {
            console.log(error)
        }
    }
    user_novo()
})
async function main(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('banco de dados iniciado')
    } catch (error) {
        console.log('algo deu errado'+error)
    }
}
main()


app.listen(porta,()=>{
    console.log('servidor iniciado na porta '+porta)
})