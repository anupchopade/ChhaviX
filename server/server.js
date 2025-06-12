// import express from 'express'
// import cors from 'cors'
// import connectDB from './configs/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser'  // <-- ADD THIS

// dotenv.config();

// const app = express()

// //middlewares init
// app.use(express.json())
// app.use(cors())

// app.get('/',(req,res)=>
// res.send("API working"))


// //added on suggestion
// app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' })) 



// app.use('/api/user',userRouter)

// // Connect to MongoDB
// connectDB().catch(console.error)

// // For local development
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 4000
//   app.listen(PORT, () => console.log("server running on port " + PORT))
// }


// // Export the Express API
// export default app




import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

// ✅ Clerk webhook route should use raw body
app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }))

// ✅ other middlewares after webhook setup
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send("API working"))

app.use('/api/user', userRouter)

// connect to DB
connectDB().catch(console.error)

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => console.log("server running on port " + PORT))
}

export default app  