# SkillUp – Daily Aptitude Practice Platform 🚀

SkillUp is a full-stack web application designed to help students improve their aptitude and problem-solving skills through **daily practice**, similar to platforms like LeetCode but focused on **aptitude preparation for placements**.

---

## ✨ Key Features

- 🔐 **Secure Authentication**
  - User authentication using JWT and password hashing with bcrypt
- 🎯 **Daily Practice Goals**
  - Users can set personalized daily targets (5 / 10 / 20 questions)
- 📚 **Topic-wise Learning**
  - Aptitude questions organized by topics with formulas and notes
- 📊 **Progress Tracking**
  - Track streaks, accuracy, and time spent on practice
- 🏆 **Leaderboards**
  - College-wise and country-wise leaderboards to boost competition
- 👨‍💼 **Admin Panel**
  - Admin can add/manage questions, notes, and formulas

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication & Security**
- JWT (JSON Web Token)
- bcrypt

---

## 📂 Project Architecture

- RESTful APIs for users, questions, progress, and admin actions
- Modular backend structure for scalability
- Responsive UI for desktop and mobile devices

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/skillup.git

# Navigate to project directory
cd skillup

# Install backend dependencies
npm install

# Start backend server
npm run dev
