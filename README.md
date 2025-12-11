
---

# ✅ **Frontend README**

```
# Employee Management System – Frontend (Next.js + App Router + Tailwind CSS)

This is the frontend for the Employee Management System.  
It includes Login, Dashboard, Departments, Employees, and Attendance modules.

---

## 🚀 Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Axios for API calls
- React Hook Form
- Middleware Auth Guard
- Modern UI (responsive)

---

## 📁 Folder Structure

frontend/
│── app/
│ │── (auth)/
│ │── departments/
│ │── employees/
│ │── attendance/
│ │── layout.tsx
│ │── page.tsx (dashboard)
│── components/
│── lib/
│── public/
│── package.json
│── tailwind.config.js
│── next.config.js


---

## ⚙️ Environment Variables

Create `.env.local`:


---

## 📦 Installation

```bash
npm install
npm run dev

🔑 Authentication Flow

User logs in → backend returns token

Token saved in:

cookies

localStorage (optional)

Protected pages use middleware (middleware.ts)

If no token → redirect to /login

📌 Features
✔ Authentication

Login form with react-hook-form

Token-based login

Auto redirect to dashboard

✔ Departments Module

List departments

Create new department

Edit department

Delete department

✔ Employees Module

List employees

Create employee

Update employee

Delete employee

✔ Attendance Module

Mark attendance

List attendance

Update attendance

Delete attendance

Developed by Shawon using Next.js + Tailwind CSS 🚀