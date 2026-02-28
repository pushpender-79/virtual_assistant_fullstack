# Full Stack Project Of Virtual Assistant🚀

This is a full-stack project with separate frontend and backend folders.

## 📁 Project Structure

```
Virtual_Assistant_FullStack/
│
├── frontend/     # Frontend application (Signin and Signup  implemented)
├── backend/      # Express + MongoDB backend(Authentication APIs)
├── .gitignore
└── README.md


---

## ⚙️ Backend Setup

### 1️⃣ Navigate to backend folder

```bash
cd backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a .env file

Inside the backend folder create a `.env` file and add:

```
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:8000
```

---

💻 Frontend Setup
1️⃣ Navigate to frontend folder
```bash
cd frontend
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Start the frontend
```bash
npm run dev
```

Frontend will run on:

http://localhost:5173


🔐 Authentication Features

The backend includes user authentication functionality:

✅ User Signup

✅ User Login

✅ User Logout

✅ JWT-based Authentication

✅ Password Hashing(Bcrypt)

✅ Protected Routes(Frontend)


## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
-Bcrypt
-JWT

---

### Frontend
-React.js
-React Router
-Axios
-Tailwind / CSS

Tailwind

### 📌 Future Improvements

Virtual Assistant Chat UI

AI Integration

User Dashboard

Deployment (Frontend + Backend)

## 📌 Author

Pushpender Chauhan