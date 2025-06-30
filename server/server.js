
import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import cors from 'cors';

import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import imageRouter from './routes/imageRoutes.js';


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

app.use('/api/image',imageRouter)

// ✅ Connect MongoDB
connectDB().catch(console.error);

// ✅ Server start
  // if (process.env.NODE_ENV !== 'production') {
  //   // const PORT = process.env.PORT || 4000;
  //   const PORT = process.env.PORT;
  //   // app.listen(PORT, () => console.log("server running on port " + PORT));
  //   app.listen(PORT, () => {
  //   console.log("✅ Server running on PORT:", PORT);
  // });
  // }
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log("✅ Server running on PORT:", PORT);
});




export default app;
