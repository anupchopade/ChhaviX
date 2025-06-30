
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