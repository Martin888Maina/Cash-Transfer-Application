# Cash Transfer Application

A full-stack money transfer platform built with React and Node.js. Users can register, log in, create accounts, transfer funds between accounts, and view a complete history of all transactions. Originally developed as a take-home assignment for Pezesha, a Kenyan fintech company, and subsequently upgraded into a production-ready portfolio project with authentication, security middleware, and a clean monorepo structure.

---

## Features

- User registration and login with JSON Web Token authentication
- Password hashing with bcryptjs (10 salt rounds)
- Protected routes on both the frontend and backend
- Create named accounts with an initial balance
- Transfer funds between any two accounts with automatic balance validation
- View all accounts in a table with the option to delete zero-balance accounts
- Search for a specific account by ID
- Transfer history page showing sender, receiver, amount, and timestamp for every transaction
- Dashboard with summary statistics: total accounts, total transfers, total balance, and recent transfers
- Rate limiting on authentication endpoints to prevent brute-force attempts
- Security headers via Helmet.js
- Centralized error handling on the backend
- Centralized Axios instance on the frontend with automatic JWT attachment and 401 handling
- KES currency formatting throughout the interface
- Responsive layout that works on desktop and mobile

---

## Tech Stack

**Frontend**
- React 18 (Create React App)
- React Router DOM v6
- Axios
- Plain CSS per-component files

**Backend**
- Node.js with Express 4
- Sequelize 6 ORM
- SQLite 3 (file-based database)
- Joi 17 for input validation
- jsonwebtoken for JWT generation and verification
- bcryptjs for password hashing
- Helmet.js for security headers
- express-rate-limit for rate limiting
- http-errors for structured error responses
- dotenv for environment variable management

---

## Prerequisites

- Node.js 18 or higher
- npm 9 or higher

No other global dependencies are required. SQLite is embedded and does not need a separate installation.

---

## Project Structure

```
cash-transfer-application/
├── client/                         # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/               # Login, Register, ProtectedRoute
│   │   │   ├── common/             # LoadingSpinner, ErrorAlert, SuccessAlert
│   │   │   ├── dashboard/          # Dashboard overview page
│   │   │   ├── layout/             # Navbar, Footer
│   │   │   ├── transfers/          # TransferHistory page
│   │   │   ├── CreateAccountForm.js
│   │   │   ├── MainPage.js
│   │   │   ├── TransferForm.js
│   │   │   └── ViewAccount.js
│   │   ├── context/
│   │   │   └── AuthContext.js      # JWT and user state management
│   │   ├── services/
│   │   │   └── api.js              # Centralized Axios instance
│   │   ├── styling/                # Per-component CSS files
│   │   └── utils/
│   │       └── formatCurrency.js   # KES currency formatter
│   ├── .env.example
│   └── package.json
│
├── server/                         # Express backend
│   ├── config/
│   │   └── dbConfig.js             # SQLite configuration
│   ├── controllers/
│   │   ├── accountController.js    # Account and transfer business logic
│   │   └── authController.js       # Registration and login logic
│   ├── middleware/
│   │   ├── auth.js                 # JWT verification middleware
│   │   └── errorHandler.js         # Centralized error handler
│   ├── models/
│   │   ├── accountModel.js
│   │   ├── indexStart.js           # Sequelize initialization and associations
│   │   ├── transferModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── accountRoutes.js
│   │   ├── authRoutes.js
│   │   └── transferRoutes.js
│   ├── validation/
│   │   └── validation_Schema.js    # Joi schemas for all endpoints
│   ├── .env.example
│   ├── index.js                    # Express app entry point
│   └── package.json
│
├── LICENSE
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Martin888Maina/Cash-Transfer-Application.git
cd Cash-Transfer-Application
```

### 2. Set up the backend

```bash
cd server
npm install
```

Copy the environment variable template and fill in your values:

```bash
cp .env.example .env
```

Open `server/.env` and set the following:

```env
PORT=4000
CLIENT_URL=http://localhost:3000
NODE_ENV=development
JWT_SECRET=your-generated-secret-here
JWT_EXPIRES_IN=7d
```

To generate a strong JWT secret, run:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Start the backend server:

```bash
npm start
```

The API will be available at `http://localhost:4000`.

### 3. Set up the frontend

Open a second terminal:

```bash
cd client
npm install
```

Copy the environment variable template:

```bash
cp .env.example .env
```

The default value in `client/.env` is already set correctly for local development:

```env
REACT_APP_API_URL=http://localhost:4000
```

Start the frontend:

```bash
npm start
```

The application will open at `http://localhost:3000`.

---

## Environment Variables

### Server (`server/.env`)

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the Express server listens on | `4000` |
| `CLIENT_URL` | Allowed CORS origin (frontend URL) | `http://localhost:3000` |
| `NODE_ENV` | Environment mode | `development` |
| `JWT_SECRET` | Secret key used to sign JWT tokens | None — must be set |
| `JWT_EXPIRES_IN` | JWT token expiry duration | `7d` |

### Client (`client/.env`)

| Variable | Description | Default |
|---|---|---|
| `REACT_APP_API_URL` | Base URL of the backend API | `http://localhost:4000` |

---

## API Reference

All Account and Transfer endpoints require a valid JWT token in the `Authorization: Bearer <token>` header.

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/Auth/register` | Register a new user |
| `POST` | `/Auth/login` | Log in and receive a JWT token |
| `GET` | `/Auth/me` | Get current authenticated user profile |

### Accounts

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/Account/accounts` | Create a new account |
| `GET` | `/Account/accounts` | List all accounts |
| `GET` | `/Account/accounts/:id` | Get a single account by ID |
| `DELETE` | `/Account/accounts/:id` | Delete an account (zero balance only) |
| `GET` | `/Account/stats` | Get summary statistics |

### Transfers

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/Transfer/transfers` | Transfer funds between two accounts |
| `GET` | `/Transfer/transfers` | List all transfers with account names |

---

## Database

The application uses SQLite with a file-based database stored at `server/database.db`. This file is created automatically on first run and is excluded from version control via `.gitignore`.

Sequelize syncs models on startup with `{ force: false }`, meaning the database schema is never dropped or recreated between restarts.

---

## Security Notes

- Passwords are hashed with bcryptjs using 10 salt rounds and are never stored in plain text
- JWT tokens expire after 7 days
- The JWT secret must be set in the environment and is never hardcoded
- All account and transfer routes are protected by JWT middleware
- The Axios instance on the frontend automatically attaches the token to every request and clears it on a 401 response
- Helmet.js sets secure HTTP headers on every response
- Rate limiting is applied to authentication and transfer endpoints

---

## Known Limitations and Future Enhancements

- No role-based authorization (all authenticated users can see all accounts)
- No pagination on account or transfer listings
- No search or filter on the transfer history page
- No email notifications for transfers or registration
- No password reset flow
- Potential future additions: M-Pesa integration, multi-currency support, PDF transfer receipts, admin panel, recurring transfers

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
