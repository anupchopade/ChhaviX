# ChhaviX

 ChhaviX  is a modern web application that allows users to remove the background from images instantly using AI. It features user authentication, a credit-based system, and seamless payment integration for purchasing more credits. Built with React, Vite, Tailwind CSS, Node.js, Express, MongoDB, and Clerk authentication.

---

## ✨ Features
- **AI-Powered Background Removal**: Upload an image and get a background-free result in seconds.
- **User Authentication**: Secure sign-in and sign-up with Clerk.
- **Credit System**: Each background removal costs 1 credit. Users start with free credits and can buy more.
- **Payment Integration**: Purchase credits securely via Razorpay.
- **Responsive UI**: Beautiful, modern, and mobile-friendly interface.
- **Image Comparison**: Interactive slider to compare before/after images.

---

## 🛠️ Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS
- React Router
- React Toastify
- Clerk (Authentication)
- Axios

### Backend
- Node.js + Express
- MongoDB (Mongoose)
- Clerk (Authentication)
- Razorpay (Payments)
- Multer (File uploads)
- ClipDrop API (Background removal)

---

## 📁 Project Structure

```
ChhaviX/
  frontend/      # React frontend (UI, context, components, pages)
  server/        # Node.js backend (API, models, controllers, routes)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or Atlas)
- Clerk account (for authentication)
- Razorpay account (for payments)
- ClipDrop API key

### 1. Clone the repository
```bash
git clone https://github.com/anupchopade/ChhaviX.git
cd ChhaviX
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file in `server/` with:
```
MONGODB_URI=your_mongodb_uri
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLIPDROP_API=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=INR
PORT=4000
```

Start the backend:
```bash
npm run server
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/` with:
```
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the frontend:
```bash
npm run dev
```

---

## 🧑‍💻 Usage
1. **Sign Up / Sign In** with Clerk.
2. **Upload an Image** on the home page.
3. **Remove Background** with one click (costs 1 credit).
4. **Download** the result or try another image.
5. **Buy Credits** if you run out, using Razorpay.

---

## 📚 API Endpoints (Backend)

- `POST /api/image/remove-bg` — Remove background from uploaded image (auth required)
- `GET /api/user/credits` — Get current user's credit balance (auth required)
- `POST /api/user/pay-razor` — Initiate payment for credits (auth required)
- `POST /api/user/verify-razor` — Verify payment and add credits
- `POST /api/user/webhooks` — Clerk webhook for user management

---

## 🙏 Credits
- [ClipDrop API](https://clipdrop.co/apis) for background removal
- [Clerk](https://clerk.dev/) for authentication
- [Razorpay](https://razorpay.com/) for payments

---
