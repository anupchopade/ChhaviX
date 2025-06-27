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




// import express from 'express';
// import cors from 'cors';
// import connectDB from './configs/mongodb.js';
// import userRouter from './routes/userRoutes.js';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';

// dotenv.config();

// const app = express();

// // ✅ 1. RAW body for Clerk webhook FIRST (must be before express.json)
// app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }));

// // ✅ 2. Normal middlewares AFTER raw parser
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => res.send("API working"));

// // ✅ 3. Routes
// app.use('/api/user', userRouter);

// // ✅ 4. Connect to MongoDB
// connectDB().catch(console.error);

// // ✅ 5. Run server (dev mode)
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 4000;
//   app.listen(PORT, () => console.log("server running on port " + PORT));
// }

// export default app;



import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// ✅ MUST come FIRST — raw body for Clerk webhook
app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }));

// ✅ All other middlewares AFTER this
app.use(express.json());
app.use(cors());

// ✅ Health check
app.get('/', (req, res) => res.send("API working"));

// ✅ Routes
app.use('/api/user', userRouter);

// ✅ Connect MongoDB
connectDB().catch(console.error);

// ✅ Server start
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log("server running on port " + PORT));
}

export default app;
