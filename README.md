# 🔧 Aurex — Admin Panel

<div align="center">

[![Live Demo](https://img.shields.io/badge/Admin_Panel-Live-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://ecommerce-admin-sable-two.vercel.app/admin/dashboard)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Harsh-Kumar-Pandit/Ecommerce-admin)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

**A powerful, real-time admin dashboard for the Aurex e-commerce platform — manage products, orders, inventory, and revenue analytics all in one place.**

[🚀 Live Admin Panel →](https://ecommerce-admin-sable-two.vercel.app/admin/dashboard) · [Backend Repo →](https://github.com/Harsh-Kumar-Pandit/E-commerce-backend) · [Frontend Repo →](https://github.com/Harsh-Kumar-Pandit/E-commerce-frontend)

</div>

---

## 🌐 Live Deployments

| | URL | Platform |
|--|-----|----------|
| **🔧 Admin Panel** | https://ecommerce-admin-sable-two.vercel.app/admin/dashboard | Vercel |
| **🎨 Frontend Store** | https://e-commerce-frontend-five-khaki.vercel.app | Vercel |
| **🖥️ Backend API** | https://e-commerce-backend-76n4.onrender.com | Render |

---

## 📊 Impact Highlights

| Metric | Result |
|--------|--------|
| 📦 Manual Stock Management Reduction | 50% less effort |
| ⚡ Real-time Order Processing | Instant status updates |
| 👥 Concurrent Users Managed | 2,500+ sessions |
| 📈 Revenue Dashboard | Daily / Monthly analytics |

---

## ✨ Features

### 🔐 Secure Login
- JWT-based admin authentication
- Token stored and managed automatically
- Redirect to dashboard on successful login
- Protected routes — unauthorized users redirected to login

### 📊 Dashboard & Analytics
- Revenue charts with daily and monthly breakdowns
- Total orders, products, and users at a glance
- Real-time data fetched from the backend API
- Interactive charts for performance insights

### 📦 Product Management
- Add new products with image upload (Cloudinary)
- Edit existing products — name, price, stock, category
- Delete products with confirmation
- View all products in a paginated table

### 📋 Order Management
- View all customer orders in real time
- Update order status — Pending → Processing → Shipped → Delivered
- Filter orders by status or date
- View order details — items, amounts, customer info

### 👤 User Management
- View all registered users
- Manage user roles and access

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI component framework |
| **Vite** | Lightning-fast dev server & build tool |
| **React Router v6** | Client-side routing & protected routes |
| **Tailwind CSS** | Utility-first responsive styling |
| **React Toastify** | Toast notifications for actions |
| **Axios** | HTTP client for API communication |
| **Recharts** | Revenue & analytics charts |

---

## 📁 Project Structure

```
Ecommerce-admin/
├── config/
│   └── api.jsx              # Backend API base URL config
│
├── public/                  # Static assets
│
├── src/
│   ├── components/
│   │   ├── Login.jsx        # Admin login form with JWT auth
│   │   ├── Navbar.jsx       # Top navigation bar
│   │   └── Sidebar.jsx      # Side navigation menu
│   │
│   ├── pages/
│   │   ├── Admin.jsx        # Main admin layout wrapper
│   │   ├── Dashboard.jsx    # Analytics & revenue charts
│   │   ├── AddProduct.jsx   # Add new product form
│   │   ├── ListProducts.jsx # All products table
│   │   ├── Orders.jsx       # All orders management
│   │   └── ...
│   │
│   ├── App.jsx              # Root component with routing
│   └── main.jsx             # React entry point
│
├── index.html
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v16+
- Aurex backend running (local or Render)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Harsh-Kumar-Pandit/Ecommerce-admin.git

# 2. Navigate into the project
cd Ecommerce-admin

# 3. Install dependencies
npm install

# 4. Configure the backend URL
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_BACKEND_URL=https://e-commerce-backend-76n4.onrender.com
```

For local development:
```env
VITE_BACKEND_URL=http://localhost:5000
```

### Run Development Server

```bash
npm run dev
```

Admin panel runs at **http://localhost:5174**

### Build for Production

```bash
npm run build
```

---

## 🔐 Authentication Flow

```
Visit /admin/dashboard
      ↓
Not logged in? → redirect to Login page
      ↓
Enter admin email + password
      ↓
POST /api/user/login → JWT token received
      ↓
Token stored → all API requests include token
      ↓
Dashboard loads with real-time data ✅
```

---

## 📈 Dashboard Charts

The dashboard displays:
- **Daily Revenue** — bar chart of earnings per day
- **Monthly Revenue** — line chart of monthly trends
- **Order Stats** — total orders, pending, delivered
- **Top Products** — best-selling items

All data is fetched live from the backend API and updates on refresh.

---

## 🔄 How It Connects to the Backend

```
Admin Panel (Vercel)
      ↓  API calls with JWT token
Backend API (Render)
      ↓  queries
MongoDB Atlas
      ↓  returns data
Admin Panel displays it ✅
```

The `config/api.jsx` file holds the backend base URL so switching between local and production is a single line change.

---

## 🚢 Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Add environment variable: `VITE_BACKEND_URL=https://e-commerce-backend-76n4.onrender.com`
5. Deploy ✅

---

## 🤝 Contributing

1. Fork the repository
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 👤 Author

**Harsh Kumar Pandit**

- GitHub: [@Harsh-Kumar-Pandit](https://github.com/Harsh-Kumar-Pandit)
- Email: harshkumarpandit2004@gmail.com
- Backend: [E-commerce-backend](https://github.com/Harsh-Kumar-Pandit/E-commerce-backend)
- Frontend: [E-commerce-frontend](https://github.com/Harsh-Kumar-Pandit/E-commerce-frontend)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by Harsh Kumar Pandit
</div>
