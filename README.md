# 🎓 Student Management System

A full-stack Student Management System built using **Spring Boot**, **React**, and **MySQL**. This application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on student records through a clean and responsive web interface.

## 🚀 Live Demo

- **Frontend:** https://student-management-system-tau-blush.vercel.app/
- **Backend API:** https://student-management-system-81pk.onrender.com/students

---

## ✨ Features

- ➕ Add Student
- 📋 View All Students
- ✏️ Update Student Details
- ❌ Delete Student
- ☁️ Cloud MySQL Database (Aiven)
- 🌐 REST API
- 📱 Responsive UI
- 🚀 Fully Deployed

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Tailwind CSS

### Backend
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate

### Database
- MySQL (Aiven Cloud)

### Deployment
- Frontend: Vercel
- Backend: Render
- Version Control: Git & GitHub
- Containerization: Docker

---

## 📂 Project Structure

```text
student-management-system
│
├── backend
│   ├── src
│   ├── Dockerfile
│   └── pom.xml
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Coder-Vinay-Arc/student-management-system.git
cd student-management-system
```

### Backend

```bash
cd backend
```

Create environment variables:

```properties
DB_URL=your_database_url
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Run the project:

```bash
./mvnw spring-boot:run
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/students` | Get All Students |
| GET | `/students/{id}` | Get Student by ID |
| POST | `/students` | Add Student |
| PUT | `/students/{id}` | Update Student |
| DELETE | `/students/{id}` | Delete Student |

---

## 👨‍💻 Author

**Vinay Kumar Gupta**

- GitHub: https://github.com/Coder-Vinay-Arc
- LinkedIn: https://www.linkedin.com/in/vinay-kumar-gupta-72a759283/

---

## ⭐ If you found this project useful, don't forget to star the repository!
