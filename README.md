# 📚 Library Management System – Frontend

This is the **frontend** of a minimal Library Management System built with:

- ⚛️ React + TypeScript
- 🔁 Redux Toolkit + RTK Query
- 🎨 Tailwind CSS
- 🧩 ShadCN UI components
- 💬 Toast Notifications
- 💡 Optimistic UI Support (coming soon!)

It allows users to:

- View books
- Create, edit, and delete books
- Borrow books with quantity and due date
- View a borrow summary with total quantities

> ✅ **No authentication required** – it's a publicly accessible app.

---

## 🌐 Live Preview

👉 [Live Frontend Site]()

---

## 🚀 Backend Repo

🔗 [Backend GitHub Repository](https://github.com/tkabir3066/library-management-system)

[Backend Link](https://library-management-system-xi-cyan.vercel.app/)

## 🧠 Features

### 📚 Book Management

- Add a new book
- Edit or delete existing books
- Sort by date (newest/oldest)
- Filter by genre
- Responsive UI with loading states and error messages

### 📝 Borrow a Book

- Select quantity and due date
- Quantity validation (cannot exceed available copies)
- Book marked unavailable if no copies left
- Redirects to borrow summary page after success

### 📊 Borrow Summary

- Aggregates borrow data via API
- Displays book title, ISBN, and total quantity borrowed

---

## 📦 Tech Stack

| Layer   | Tools                                      |
| ------- | ------------------------------------------ |
| UI      | React, TypeScript, Tailwind CSS, ShadCN UI |
| State   | Redux Toolkit, RTK Query                   |
| Forms   | React Hook Form                            |
| UX      | react-hot-toast                            |
| Routing | React Router V7                            |
| Build   | Vite                                       |

---

## 🛠 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/library-frontend.git
cd library-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

> ⚠️ Make sure your backend server is running at `http://localhost:5000`

---

## 🧩 Folder Structure

```bash
src/
├── components/        # Reusable UI components
├── pages/             # Main route pages (Books, AddBook, BorrowSummary)
├── redux/             # RTK setup & API slices
├── routes/            # React Router setup
├── types/             # Shared TypeScript types
└── lib/               # Utility functions (e.g., classNames)
```

---

## 🔮 Future Enhancements

🔄 Optimistic UI updates for borrowing and editing books

🔍 Search functionality for filtering by title or author

📅 Due date tracking with overdue indicators

👥 Authentication for admin-only book management

📝 Borrow history logs with timestamps

📊 Dashboard view with statistics (e.g., most borrowed books)

🚫 Form validation for duplicate ISBNs (e.g., "ISBN already exists")

✏️ Use labeled buttons for edit actions instead of just icons

❌ Custom 404 page for undefined routes

✅ Better "Available" status styling with green text and light green background
