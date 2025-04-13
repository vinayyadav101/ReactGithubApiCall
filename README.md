# 🧑‍💻 GitHub User Avatar Finder Web App

A sleek and fast React + Vite powered web app that lets users search for any GitHub username and view their avatar. Built with performance in mind using a custom `useDebounce` hook to prevent unnecessary API calls.

---

## 🎯 Objective

Build a web app that:
- Allows users to enter a GitHub username.
- Displays the corresponding user's avatar fetched from the GitHub API.
- Implements debouncing using a custom hook to enhance user experience and optimize API calls.

---

## 📸 Features

- 🔎 Search any GitHub username.
- 🖼️ Instantly fetch and display their profile avatar.
- 🧠 Debounced input using a custom `useDebounce` hook.
- 🔄 Smooth UX with minimal API hits.
- ⚠️ Error handling for invalid usernames or network issues.

---

## 🧰 Tech Stack

- **React** (via [Vite](https://vitejs.dev/))
- **JavaScript (ES6+)**
- **GitHub REST API**
- **Custom React Hook (`useDebounce`)**
- **CSS / Tailwind CSS** (optional styling)

---

## 📂 Folder Structure

github-avatar-finder/ ├── public/ ├── src/ │ ├── components/ │ │ └── AvatarDisplay.jsx │ ├── hooks/ │ │ └── useDebounce.js │ ├── App.jsx │ ├── main.jsx │ └── index.css ├── index.html ├── package.json ├── vite.config.js └── README.md

---


---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js & npm installed

### 📦 Clone and Install

```bash
git clone https://github.com/vinay60242/github-avatar-finder.git
cd github-avatar-finder
npm install
```

---

🚧 Run the App Locally
```bash
npm run dev
```

