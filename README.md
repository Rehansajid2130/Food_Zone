# 🍔 Foody Zone

A full-stack React + Express food listing app! Browse diverse foods, filter by meal type, search by name, and view item descriptions and prices—powered by a custom backend.

---

## 🗂️ Project Structure

```
project_4/
├── server/             # Express backend API
│   ├── src/
│   │   └── index.ts    # Main server endpoint (serves food data and images)
│   └── public/images/  # Food images for API
├── src/                # React frontend
│   └── assets/
│       └── Components/
│           ├── Main_page.jsx      # Home page with search/category features
│           ├── item_detail.jsx    # Card for showing a dish
├── package.json        # Frontend dependencies
└── README.md           # Documentation
```

---

## 🚀 Features

- **Dynamic food listings** (name, description, price, photo, type)
- **Filter by:**
  - Meal type: Breakfast / Lunch / Dinner
  - Search by food name
- **Responsive UI** in React
- **Quick local dev backend** with Express (Node.js)
- **Images served from backend** for real-life feel

---

## 🏃‍♂️ Getting Started

### 1. Clone the repo and install frontend dependencies

```bash
git clone <your-repo-url>
cd project_4
npm install
```

### 2. Start the backend server

```bash
cd server
npm install        # Install backend dependencies if needed
npx ts-node src/index.ts
```

The backend runs on `http://localhost:9000` and provides:
- `/` – JSON list of foods
- `/images/` – food images

### 3. Run the frontend

From the project root:

```bash
npm run dev
```

Visit `http://localhost:5173` (or as shown in your terminal).

---

## 🖼️ Example Food Items Returned by the API

```json
[
  {
    "name": "Boilded Egg",
    "price": 10,
    "text": "...description...",
    "image": "/images/egg.png",
    "type": "breakfast"
  },
  {
    "name": "BURGER",
    "price": 23,
    "image": "/images/burger.png",
    "type": "lunch"
  }
  // etc...
]
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19 + Vite
- **Backend:** Express + TypeScript
- **Styling:** CSS

---

## 📦 Scripts

- `npm run dev` – Start React app
- `npm run build` – Build for production
- `npm run lint` – Lint the code

---

## 🙏 Credits

- Starter template: Vite + React
- All code and images by project author

---

Enjoy exploring and filtering your favorite foods! 🍳🍔🍰
