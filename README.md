# Inventory Manager

A full-stack MERN application for managing inventory of products.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Reference](#api-reference)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Create, Read, Update, Delete products (CRUD operations)
- Dynamic, responsive UI with Chakra UI
- Light/Dark mode toggle
- State management with Zustand
- Client-side routing with React Router
- Backend RESTful API built with Express.js and MongoDB

## Tech Stack

**Frontend:** React, Vite, Chakra UI, Zustand, React Router  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Tools:** Git, npm, dotenv

## Demo

Live Demo: [inventory-manager-f6r3.onrender.com](https://inventory-manager-f6r3.onrender.com)

## Getting Started

### Prerequisites

- Node.js v14+ and npm  
- MongoDB (Atlas or local instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HimalRana2610/Inventory-Manager.git
   cd Inventory-Manager
   ```

2. Install dependencies:
   #### Backend
   ```bash
   npm install
   ```

   #### Frontend
   ```bash
   cd frontend
   npm install
   ```

### Environment Variables

Create a `.env` with the following:
```ini
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Running the Application

#### Development mode

1. Start the backend:
   ```bash
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

#### Production mode

1. Start the server (serves the `dist` folder):
   ```bash
   npm run start
   ```

## API Reference

### Products

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/products`     | Retrieve all products   |
| POST   | `/api/products`     | Create a new product    |
| PUT    | `/api/products/:id` | Update a product by ID  |
| DELETE | `/api/products/:id` | Delete a product by ID  |

## Folder Structure

```pgsql
Inventory-Manager/
├── backend/           # Express API and database setup
│   ├── config/        # Database connection
│   ├── controllers/   # Route handlers
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   └── server.js      # Entry point
└── frontend/          # React application
    ├── public/        # Static assets
    ├── src/
    │   ├── components/ # Reusable UI components
    │   ├── pages/      # Page-level components
    │   ├── store/      # Zustand stores for state management
    │   ├── App.jsx     # Main app component
    │   └── main.jsx    # React entry point
    └── vite.config.js  # Vite configuration
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues or submit a pull request.

## Contact

Created by [Himal Rana](mailto:ranahimalyo@gmail.com). Feel free to reach out!