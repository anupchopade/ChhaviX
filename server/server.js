import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express()

//middlewares init
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>
res.send("API working"))

app.use('/api/user',userRouter)

// Connect to MongoDB
connectDB().catch(console.error)

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000
  app.listen(PORT, () => console.log("server running on port " + PORT))
}


// Export the Express API
export default app
