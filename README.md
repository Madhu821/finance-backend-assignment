# Finance Data Processing & Access Control Backend

## Overview

This project is a backend system for managing financial records with role-based access control. It supports user authentication, financial data operations, and dashboard-level analytics.

---

## Features

### Authentication

* User registration & login
* JWT-based authentication

### Role-Based Access Control (RBAC)

* ADMIN: Full access (create, update, delete)
* ANALYST: Read + dashboard insights
* VIEWER: Read-only access

### Financial Records

* Create, view, update, delete records
* Filter by type, category, and date range

### Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category-wise breakdown

---

## Tech Stack

* Node.js
* Express.js
* Prisma ORM
* SQLite
* JWT Authentication

---

## Setup Instructions

```bash
git clone <your-repo-url>
cd finance-backend
npm install
```

Create `.env` file:

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secret_key"
```

Run the server:

```bash
npm run dev
```

---

## API Endpoints

### Auth

* POST /auth/register
* POST /auth/login

### Records

* GET /records
* POST /records
* PUT /records/:id
* DELETE /records/:id

### Dashboard

* GET /dashboard/summary
* GET /dashboard/categories

---

## Access Control Summary

 Role    | Permissions      
 ------- | ---------------- 
 ADMIN   | Full access      
 ANALYST | Read + dashboard 
 VIEWER  | Read-only        

---

## Design Decisions

* Prisma used for clean database abstraction
* Middleware-based RBAC for separation of concerns
* Service-controller architecture for maintainability

---

## Assumptions

* Single-admin controlled data model
* SQLite used for simplicity

