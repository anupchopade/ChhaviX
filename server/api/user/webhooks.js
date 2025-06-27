import { Webhook } from 'svix';
import userModel from '../../models/userModel.js';
import connectDB from '../../configs/mongodb.js';

export const config = {
  api: {
    bodyParser: false, // Important! Disable default parsing
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  await connectDB(); // Connect DB in Vercel Lambda

  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const payload = Buffer.concat(chunks).toString('utf8');

    const headers = {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, headers);
    const { data, type } = evt;

    console.log("✅ Webhook verified:", type);

    if (type === 'user.created') {
      const userData = {
        clerkId: data.id,
        email: data.email_addresses[0].email_address,
        firstName: data.first_name,
        lastName: data.last_name,
        photo: data.image_url
      };
      await userModel.create(userData);
    }

    if (type === 'user.deleted') {
      await userModel.findOneAndDelete({ clerkId: data.id });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
}
