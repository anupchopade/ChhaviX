import 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import dotenv from 'dotenv';

dotenv.config();


const PORT=process.env.PORT || 4000
const app=express()
await connectDB()


//middlewares init
app.use(express.json())
app.use(cors())



app.get('/',(req,res)=>
res.send("API working"))




app.listen(PORT,()=>console.log("server ruuning on port " + PORT))
