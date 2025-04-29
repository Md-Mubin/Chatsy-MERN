# Chatsy-web (MERN)

A real-time chat web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with **Socket.io** for live messaging.

## ✨ Features

- Real-time messaging using **Socket.io**
- User authentication (register/login)
- Create and join chat rooms
- Private and group messaging
- Responsive design for all devices
- Secure password handling with **bcrypt**
- JWT-based authentication
- MongoDB database for user and chat data

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Real-time Communication**: Socket.io

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-chat-web.git
```
- Open the root folder in VS-Code and go to VS-Code terminal

### 2. Setup the client 
- Create a .env file inside the client directory and add the following:
```bash
VITE_BASE_URL_API = http://localhost:8000/api/v1 (the backend link/backend link of localhost)
```
- and than in terminal run the client by
```bash
cd client
npm run dev
```
- client will run in http://localhost:5173

### 3. Setup the server 
- Create a .env file inside the server directory and add the following:
```bash
MONGO_DATA_BASE_URL = (your MongoDB cluster's link)
API_URL = /api/v1
SECRET_ACC_TOKEN = (your secret tokken)
CLOUDINARY_FOLDER_NAME = (your cloudinary storage name)
CLOUDINARY_API_KEY = (your cloudinary storage api)
CLOUDINARY_API_SECRET = (your cloudinary storage api secret)
```
- than open a new terminal and run the server by
```bash
cd server
npm start
```
- server will run in http://localhost:8000

### Open browser and copy paste the client link there 
### or you can hold ctrl and right click on the link to open the link in your default browser