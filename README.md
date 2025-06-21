# SaaS Clone – Full-Stack Authentication App

A full-stack SaaS-style application that demonstrates secure user authentication, protected routes, and API integration using modern development tools and practices.

> 🔐 Built with **React**, **Node.js**, **Express**, **PostgreSQL**, and **JWT**  
> 💻 Designed to simulate a real-world SaaS login system with database-backed user flow  
> 🎯 Perfect for showcasing backend + frontend integration skills

---

## 🔧 Features

- ✅ **User Registration & Login**
- 🔐 **JWT-based Authentication**
- 🧠 **Protected Routes** with token validation
- 🌐 **API Communication** between React frontend and Express backend
- 🗃️ **PostgreSQL** as persistent database (locally configured)
- 🧩 Modular folder structure (`client/`, `server/`)

---

## 🧱 Tech Stack

| Layer      | Technology     |
|------------|----------------|
| Frontend   | React, JSX, Fetch API |
| Backend    | Node.js, Express |
| Database   | PostgreSQL |
| Auth       | bcrypt, JWT |
| Dev Tools  | VS Code, Git, GitHub |

---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/poornapegada/saas-clone.git
cd saas-clone
cd server
npm install
cp .env.example .env  # Add your DB connection string & JWT_SECRET
node index.js
cd ../client
npm install
npm start
saas-clone/
├── client/         # React frontend
│   └── src/
│       ├── App.js
│       ├── Login.js
│       ├── Register.js
│       ├── Dashboard.js
│       └── utils.js
├── server/         # Node/Express backend
│   ├── routes/
│   │   ├── auth.js
│   │   └── user.js
│   ├── middleware/
│   │   └── auth.js
│   ├── db.js
│   └── index.js
├── .env.example    # Sample environment file
├── README.md