# 🖥️ The<Script> Portfolio | 2025 Edition

Welcome to The<Script> Portfolio, a creative showcase built by a group of aspiring developers from Cavite State University - Imus Campus. This midterm project for Web Systems and Technologies 2 (ITEC 106A) is inspired by the classic Windows 95 interface, designed to represent our skills, projects, and profiles in a nostalgic, yet modern format.

---

## 🎨 Theme & Concept

Our portfolio mimics a vintage operating system desktop complete with draggable windows, retro scrollbars, a taskbar, and pixel-style icons. The goal? To stand out — both technically and creatively — while celebrating the retro tech aesthetics we love.

---

## 🛠 Tech Stack

- **ReactJS** — Component-based frontend framework  
- **React Router v6** — Page routing/navigation  
- **Tailwind CSS** — Utility-first styling  
- **React Draggable** — Makes windows movable (like real OS)  
- **Framer Motion** — Smooth animations  
- **EmailJS** — Contact form email functionality  

---

## 🧩 Features

- 👤 **Team Member Profiles** – Individual components with bio, skills, and contact info  
- 💾 **Projects Window** – Categories for Software, Arduino, UI/UX, and Games  
- 🦖 **Built-in Dino Game** – A hidden gem for nostalgia points!  
- 📁 **Fully Draggable App Windows** – Simulate real OS multitasking  
- 📨 **Contact Form** – EmailJS-powered form with retro email design  
- 📟 **Responsive Design** – Clean on desktop and mobile  
- 🔊 **Sound Effects** – Mouse clicks, typing, and startup/shutdown sounds  

---

## ⚙️ Project Setup

> This project is already deployed at [thescript.vercel.app](https://thescript.vercel.app)  
> If you want to run it locally for development or testing, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/thescript.git

# Navigate into the project directory
cd thescript

# Install dependencies
npm install

# Start the development server
npm run dev
```
## 📁 Folder Structure
```bash 
<pre><code> thescript-portfolio/ ├── public/ # Static files (HTML template, Dino game) │ └── dinogame.html # Hidden dino game for nostalgia ├── src/ │ ├── assets/ # Images, videos, icons, sounds, fonts │ ├── components/ # Main components like Desktop, Taskbar, Members │ ├── pages/ # Startup screen, play mode │ ├── contexts/ # Global state (e.g., AudioContext) │ ├── App.jsx # Root component with routes │ ├── index.js # Entry point │ ├── App.css # App styling │ ├── scrollbar.css # Custom scrollbar styles │ └── tailwind.css # Tailwind entry file ├── tailwind.config.js # Tailwind config ├── postcss.config.js # PostCSS config ├── package.json # Dependencies & scripts └── README.md # Project overview (you are here) ```</code></pre>
