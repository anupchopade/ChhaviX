// import jwt from 'jsonwebtoken'

// const authUser =async (req,res,next)=>{
//     try {
//         const {token}=req.headers

//         if(!token){
//             return res.json({success:false,message:'Not autorised login again'})
//         }
//         const token_decode=jwt.decode(token)

//         req.body.clerkId=token_decode.clerkId
//         next()
//     } catch (error) {
//          console.log(error.message)
//     res.json({success:false,message:error.message})
//     }
// }

// export default authUser




// import jwt from 'jsonwebtoken'

// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.json({ success: false, message: 'Not authorised login again' })
//     }

//     const token = authHeader.split(' ')[1]

//     const token_decode = jwt.decode(token)

//     if (!token_decode || !token_decode.sub) {
//       return res.json({ success: false, message: 'Invalid token payload' })
//     }

//     req.body.clerkId = token_decode.sub  // Clerk usually puts the user ID in `sub`

//     next()
//   } catch (error) {
//     console.log(error.message)
//     res.json({ success: false, message: error.message })
//   }
// }

// export default authUser



//updated this code for not authorised login
// import { clerkClient } from '@clerk/clerk-sdk-node';

// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Not authorised, please login' });
//     }

//     const token = authHeader.split(' ')[1];

//     const session = await clerkClient.sessions.verifySession(token);

//     const userId = session.userId;

//     if (!userId) {
//       return res.status(401).json({ success: false, message: 'Token invalid or expired' });
//     }

//     req.clerkId = userId;
//     next();
//   } catch (error) {
//     console.log("Auth Error:", error.message);
//     return res.status(401).json({ success: false, message: 'Unauthorized: ' + error.message });
//   }
// };

// export default authUser;


// import { createClerkClient } from '@clerk/backend'

// const clerk = createClerkClient({
//   secretKey: process.env.CLERK_SECRET_KEY,
// })

// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' })
//     }

//     const token = authHeader.split(' ')[1]

//     const session = await clerk.sessions.verifySession(token)

//     if (!session || !session.userId) {
//       return res.status(401).json({ success: false, message: 'Session not valid' })
//     }

//     req.body.clerkId = session.userId
//     next()
//   } catch (err) {
//     console.error('Auth Error:', err.message)
//     return res.status(401).json({ success: false, message: 'Unauthorized access' })
//   }
// }

// export default authUser


// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' });
//     }

//     const token = authHeader.split(' ')[1];

//     const session = await clerk.sessions.verifySession(token);

//     if (!session || !session.userId) {
//       return res.status(401).json({ success: false, message: 'Session not valid' });
//     }

//     req.clerkId = session.userId; // ✅ FIXED
//     next();
//   } catch (err) {
//     console.error('Auth Error:', err.message);
//     return res.status(401).json({ success: false, message: 'Unauthorized access' });
//   }
// };
//  export default authUser


// import { createClerkClient } from '@clerk/backend'

// const clerk = createClerkClient({
//   secretKey: process.env.CLERK_SECRET_KEY,
// })

// const authUser = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' })
//     }

//     const token = authHeader.split(' ')[1]

//     const session = await clerk.sessions.verifySession(token)

//     if (!session || !session.userId) {
//       return res.status(401).json({ success: false, message: 'Session not valid' })
//     }

//     req.clerkId = session.userId
//     next()
//   } catch (err) {
//     console.error('Auth Error:', err.message)
//     return res.status(401).json({ success: false, message: 'Unauthorized access' })
//   }
// }

// export default authUser










// import { createClerkClient } from '@clerk/backend';
// import dotenv from 'dotenv';
// dotenv.config();

// console.log("🔑 Clerk Secret from env:", process.env.CLERK_SECRET_KEY);

// const clerk = createClerkClient({
//   secretKey: process.env.CLERK_SECRET_KEY,
// });

// const authUser = async (req, res, next) => {
//   try {
//     console.log("🔐 Received header:", req.headers.authorization);
//     console.log("🔐 Clerk Secret:", process.env.CLERK_SECRET_KEY);
//     console.log("🔐 Clerk client:", clerk?.sessions ? "ready" : "not ready");

//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' });
//     }

//     const token = authHeader.split(' ')[1];

//     const session = await clerk.sessions.verifySession(token);
//     console.log("✅ Clerk session:", session);

//     if (!session || !session.userId) {
//       return res.status(401).json({ success: false, message: 'Session not valid' });
//     }

//     req.clerkId = session.userId;
//     next();
//   } catch (err) {
//     // console.error('Auth Error:', err.message);
//     // return res.status(401).json({ success: false, message: 'Unauthorized access' });

//     console.error("🔴 Clerk verification error:", err.message);

//   if (err.errors && err.errors[0]?.message === "Session is not active") {
//     return res.status(401).json({ success: false, message: "Session expired. Please log in again." });
//   }

//   if (err.message === "Gone") {
//     return res.status(401).json({ success: false, message: "Session has ended. Please log in again." });
//   }

//   return res.status(401).json({ success: false, message: 'Unauthorized access' });  
//   }
//   console.log("✅ Clerk session userId:", session.userId);
// console.log("⏳ Session expires at:", new Date(session.exp * 1000).toLocaleString());

// };

// export default authUser;





//CLAUDE CLAUDE CLAUDE
// import { verifyToken } from '@clerk/backend';
// import dotenv from 'dotenv';
// dotenv.config();

// const authUser = async (req, res, next) => {
//   try {
//     console.log("🔐 JWT Auth middleware called");
    
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       console.log("❌ No valid auth header");
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Not authorized. Please log in again.' 
//       });
//     }

//     const token = authHeader.split(' ')[1];
    
//     // Add debugging info
//     const now = Math.floor(Date.now() / 1000);
//     console.log("🕐 Server time (epoch):", now);
//     console.log("🕐 Server time (readable):", new Date().toISOString());
    
//     // Use Clerk's verifyToken with clock skew tolerance
//     const payload = await verifyToken(token, {
//       secretKey: process.env.CLERK_SECRET_KEY,
//       // Add clock skew tolerance to handle time sync issues
//       clockSkewInMs: 60000, // Allow up to 60 seconds difference (in milliseconds)
//     });
    
//     console.log("✅ Token verified, payload:", payload);

//     if (!payload || !payload.sub) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Invalid token' 
//       });
//     }

//     req.clerkId = payload.sub; // Clerk puts user ID in 'sub' claim
//     next();
    
//   } catch (err) {
//     console.error("🔴 JWT verification error:", err);
    
//     // More specific error handling
//     if (err.reason === 'token-iat-in-the-future') {
//       console.log("⏰ Clock skew detected - token issued in future");
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Clock synchronization issue. Please refresh and try again.' 
//       });
//     }
    
//     if (err.reason === 'token-expired') {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Token expired. Please log in again.' 
//       });
//     }
    
//     return res.status(401).json({ 
//       success: false, 
//       message: 'Authentication failed. Please log in again.' 
//     });  
//   }
// };

// export default authUser;




import { verifyToken } from '@clerk/backend';
import dotenv from 'dotenv';
dotenv.config();

const authUser = async (req, res, next) => {
  try {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log("🔐 JWT Auth middleware called");
    }
    
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      if (process.env.NODE_ENV === 'development') {
        console.log("❌ No valid auth header");
      }
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized. Please log in again.' 
      });
    }

    const token = authHeader.split(' ')[1];
    
    // Add debugging info only in development
    if (process.env.NODE_ENV === 'development') {
      const now = Math.floor(Date.now() / 1000);
      console.log("🕐 Server time (epoch):", now);
      console.log("🕐 Server time (readable):", new Date().toISOString());
    }
    
    // Use Clerk's verifyToken with clock skew tolerance
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
      // Add clock skew tolerance to handle time sync issues
      clockSkewInMs: 60000, // Allow up to 60 seconds difference (in milliseconds)
    });
    
    // Only log payload in development (never in production for security)
    if (process.env.NODE_ENV === 'development') {
      console.log("✅ Token verified, user ID:", payload.sub);
    }

    if (!payload || !payload.sub) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid token' 
      });
    }

    req.clerkId = payload.sub; // Clerk puts user ID in 'sub' claim
    next();
    
  } catch (err) {
    // Always log errors (but not the full token)
    console.error("🔴 JWT verification error:", err.message);
    
    // More specific error handling
    if (err.reason === 'token-iat-in-the-future') {
      console.log("⏰ Clock skew detected - token issued in future");
      return res.status(401).json({ 
        success: false, 
        message: 'Clock synchronization issue. Please refresh and try again.' 
      });
    }
    
    if (err.reason === 'token-expired') {
      return res.status(401).json({ 
        success: false, 
        message: 'Token expired. Please log in again.' 
      });
    }
    
    return res.status(401).json({ 
      success: false, 
      message: 'Authentication failed. Please log in again.' 
    });  
  }
};

export default authUser;