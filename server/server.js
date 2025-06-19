import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()

// ✅ Clerk webhook MUST use raw body, put this BEFORE express.json()
app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }))

// ✅ Other middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send("API working"))

// ✅ Routes
app.use('/api/user', userRouter)

// ✅ DB connect
connectDB().catch(console.error)

// ✅ Server start
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => console.log("server running on port " + PORT))
}

export default app




// import express from 'express'
// import cors from 'cors'
// import connectDB from './configs/mongodb.js'
// import userRouter from './routes/userRoutes.js'
// import dotenv from 'dotenv'
// import bodyParser from 'body-parser'

// dotenv.config()

// const app = express()

// // ✅ Clerk webhook route should use raw body
// app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }))

// // ✅ other middlewares after webhook setup
// app.use(express.json())
// app.use(cors())

// app.get('/', (req, res) => res.send("API working"))

// app.use('/api/user', userRouter)

// // connect to DB
// connectDB().catch(console.error)

// if (process.env.NODE_ENV !== 'production') {
//     const PORT = process.env.PORT || 4000
//     app.listen(PORT, () => console.log("server running on port " + PORT))
// }

// export default app  