import express from 'express'
import { clerkWebhooks } from '../api/configs/controllers/userController.js'


const userRouter=express.Router()

userRouter.post('/webhooks',clerkWebhooks)




export default userRouter