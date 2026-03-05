# CLAUDE.md — Cash Transfer Application (Monorepo)

---

## CRITICAL WARNING — READ THIS FIRST BEFORE WRITING A SINGLE LINE OF CODE

> Claude previously violated Rule 1 by writing ALL phases (Phase 1 through Phase 8) in a single response without stopping. This forced the developer to restart the entire project from scratch. This must NEVER happen again.

### WHAT WENT WRONG PREVIOUSLY:
Claude wrote every single file for every single phase all at once in one massive response, committed everything in one git commit, and then claimed it was following the phase-by-phase process. This was completely wrong and unacceptable. The developer lost time and had to start over because of this mistake.

### WHAT MUST HAPPEN INSTEAD:
- Write ONLY the files for Phase 1. Then STOP. Do not write Phase 2 files.
- Wait for the developer to say the phase is committed and pushed.
- Only then write Phase 2 files. Then STOP again.
- Repeat for every phase until Phase 8.

### THE PHYSICAL RULE IS THIS:
After finishing Phase N, Claude's response must END. No more code. No more files. Just the commit instructions and a full stop. The next phase starts only in the NEXT conversation turn when the developer confirms they have pushed.

---

## MANDATORY RULES — READ BEFORE DOING ANYTHING

> **These rules are NON-NEGOTIABLE. Violating any of them means the task has failed.**

### RULE 1: STOP AFTER EVERY PHASE — NO EXCEPTIONS

This project MUST be built **one phase at a time** with a full stop between each phase. After completing each phase (Phase 1 through Phase 8), you MUST:

1. **STOP all code generation immediately.**
2. **Announce that the phase is complete** with a clear message like: `"Phase X is complete. Please commit and push before I continue."`
3. **Provide the exact git commands** the developer should run in their terminal (see the Git Commit Checkpoints section below for the exact commands and messages).
4. **Wait for the developer to confirm** they have committed and pushed before proceeding to the next phase.
5. **DO NOT start the next phase** until the developer explicitly says to continue.

**You are FORBIDDEN from building multiple phases in a single run.** If you complete Phase 1, you stop. Period. You do not touch Phase 2 until the developer returns and says "continue" or "next phase."

**Why this matters:** The developer needs a clean, incremental commit history on GitHub that shows the project being built systematically from foundation to polish. A single massive commit of a finished project is unacceptable and defeats the entire purpose. Claude already made this mistake once and the developer had to restart everything. It must not happen again.

### RULE 2: HUMAN-AUTHORED CODE COMMENTS ONLY

All comments in the codebase MUST read as if written by a human developer. This means:

- Write comments in a casual, natural developer voice (e.g., `// convert annual rate to monthly`, `// bail early if inputs are invalid`)
- Use first person where natural (e.g., `// we round to 2 decimal places for currency display`)
- Keep comments concise and practical — explain the "why" not the "what" when the code is self-explanatory
- Vary your comment style — do not use the same sentence structure repeatedly
- DO NOT use overly formal, verbose, or instructional phrasing that sounds machine-generated
- DO NOT use phrases like "This function handles...", "This component renders...", "This middleware ensures...", "Responsible for...", "Utilized to..."
- DO NOT write comments that read like documentation paragraphs — keep them short and to the point

**Examples of GOOD comments:**
```javascript
// grab both accounts and make sure they exist before we do anything
// insufficient funds — sender can't go negative
// wrap the debit + credit in a transaction so it's all-or-nothing
// format as KES since this is a Kenyan fintech app
// edge case: can't transfer to yourself
// TODO: might want to add pagination once the list gets long
```

**Examples of BAD comments (do NOT write these):**
```javascript
// This function is responsible for calculating the transfer amount between two accounts
// This component renders the account creation form for the user
// The following code handles the validation of transfer input data
// Utilizing Sequelize transactions to ensure data integrity during the transfer process
```

### RULE 3: NO MENTION OF AI TOOLS ANYWHERE IN THE PROJECT

There must be **ZERO references** to any AI assistant, AI tool, AI code generator, or any AI-related tool anywhere in:

- Source code files (no comments mentioning AI tools)
- README.md or any documentation files
- Git commit messages
- Package descriptions
- Code comments
- Any other file in the repository

The project must appear as if it was entirely hand-coded by the developer. If you are about to write something that references an AI tool, rewrite it to remove that reference.

### RULE 4: DESCRIPTIVE README WITHOUT EMOJIS

The README.md must be:

- Professional, descriptive, and well-structured
- Written in plain English without any emojis whatsoever
- Focused on what the application does, how to set it up, and how it works
- Written as if by the developer who built the project

### RULE 5: INCREMENTAL GIT WORKFLOW

The developer will manually run git commands after each phase. You MUST provide the full git commands at each checkpoint. The developer does NOT have access to git from within this tool — they will copy and paste the commands into their Git Bash terminal.

---

## Project Overview

**Cash Transfer Application** is a full-stack money transfer platform that allows users to create accounts, view account details, and transfer funds between accounts. Originally built as a take-home assignment for Pezesha (a Kenyan fintech company), this project is being modernized and upgraded as a portfolio piece to demonstrate full-stack development skills with a clean monorepo structure.

**This is NOT a new project built from scratch.** The application already exists with a working frontend and backend. This upgrade focuses on restructuring for a clean monorepo, fixing known bugs, modernizing the codebase, and adding new features on top of the existing foundation.

**Please take note of the following Claude:**
1. I have already interacted with React in previous projects.
2. I have already interacted with Node.js and Express.js.
3. I have interacted with Sequelize ORM and NOT Prisma.
4. The existing application uses SQLite as the database and this should be retained.
5. The existing application uses Joi for validation and this should be retained.
6. The existing application uses plain CSS (per-component files) for styling and this approach should be retained.
7. The existing application was built with Create React App (CRA) and uses react-scripts.

**Additional requirements for the cash transfer application upgrade:**
1. ENSURE THAT A DESCRIPTIVE README.MD FILE IS IMPLEMENTED (PLEASE DO NOT USE EMOJIS).
2. ENSURE THAT THE COMMENTS IMPLEMENTED IN THE CODE ARE HUMAN-LIKE AND DO NOT APPEAR AI GENERATED.
3. ALLOW ME TO COMMIT THE CHANGES AND PUSH THEM TO GITHUB SO THAT I CAN HAVE A COMMIT HISTORY.
4. I prefer the commits to be INCREMENTAL (PAUSE AFTER EVERY MAJOR UPDATE) SO THAT I CAN COMMIT AS THE APPLICATION PROGRESSES.
5. ENSURE THAT YOU ADD A MIT LICENSE FILE.
6. AVOID USING GENERIC AI STYLING THAT USES PURPLE OR DEEP BLUE COLOURS. USE UNIQUE COLOURS, SHADES, THEMES AND SHADES TO ENSURE THAT THE USER INTERFACES DO NOT APPEAR AI GENERATED. STICK WITH WHITE BACKGROUNDS FOR MAJORITY OF THE PAGES SINCE IT IS A NEUTRAL AND WIDELY ACCEPTED BACKGROUND COLOUR.
7. MY GITHUB USERNAME IS: Martin888Maina
8. THIS APPLICATION IS NOT BEING BUILT FROM SCRATCH. IT IS AN EXISTING APPLICATION BEING UPGRADED AND MODERNIZED.
9. I require commit history since I will showcase this project to POTENTIAL EMPLOYERS. Please make sure that the commit history is PRESENT.
10. VERY IMPORTANT: PLEASE NARROW DOWN THE NUMBER OF COMMITS TO ABOUT 8 COMMITS IN TOTAL EACH WITH SUMMARIZED AND BRIEF COMMIT MESSAGES.

**Please note that all the above tools have already been installed in my Windows OS - 11 PRO operating system.**
**Please make sure that you confirm this as you start implementing the project.**
**We will be using the WINDOWS 11 PRO OS and not the UBUNTU LINUX Operating System.**

---

## GitHub Repository

**Repository URL:** https://github.com/Martin888Maina/Cash-Transfer-Application.git

This is a brand new repository created without a README, without a LICENSE, and without a .gitignore. All initial files will be committed as part of the upgrade process.

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend | React 18 (CRA with react-scripts) | Existing, retained |
| Routing | React Router DOM v6 | Existing, retained |
| HTTP Client | Axios | Existing, retained |
| Styling | Plain CSS (per-component files) | Existing, retained |
| Backend | Node.js with Express 4 | Existing, retained |
| ORM | Sequelize 6 | Existing, retained |
| Database | SQLite 3 (file-based) | Existing, retained |
| Validation | Joi 17 | Existing, retained |
| Error Handling | http-errors | Existing, retained |
| Dev Server | nodemon | Existing, retained |
| Env Vars | dotenv | Existing, retained |
| CORS | cors | Existing, retained |
| Security | helmet | New addition |
| Rate Limiting | express-rate-limit | New addition |
| Authentication | JSON Web Tokens (jsonwebtoken) | New addition |
| Password Hashing | bcryptjs | New addition |

---

## Monorepo Structure (Upgraded)

The original project had a deeply nested folder structure with separate project directories. The upgraded monorepo flattens this into a clean `client/` and `server/` layout under a single root.

### Original Structure (Before Upgrade)
```
d:/cash/
├── front/
│   └── react/
│       └── cash-transfer-app/       # React frontend (deeply nested)
└── pezesha/
    └── test/
        └── cash-transfer-api/       # Node.js/Express backend (deeply nested)
```

### Upgraded Monorepo Structure
```
Cash-Transfer-Application/
├── client/                          # React Frontend (moved from front/react/cash-transfer-app/)
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── index.js                 # React DOM root render
│   │   ├── App.js                   # Router setup and route definitions
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── layout/              # New: Layout components
│   │   │   │   ├── Navbar.js        # Existing: Navigation bar (upgraded)
│   │   │   │   └── Footer.js        # New: Footer component
│   │   │   ├── accounts/            # Reorganized: Account-related components
│   │   │   │   ├── CreateAccountForm.js    # Existing: Form to create account (upgraded)
│   │   │   │   └── ViewAccount.js          # Existing: Search and display account (upgraded)
│   │   │   ├── transfers/           # Reorganized: Transfer-related components
│   │   │   │   ├── TransferForm.js         # Existing: Transfer money form (upgraded)
│   │   │   │   └── TransferHistory.js      # New: View transfer history
│   │   │   ├── dashboard/           # New: Dashboard components
│   │   │   │   └── Dashboard.js            # New: Overview dashboard
│   │   │   ├── auth/                # New: Authentication components
│   │   │   │   ├── LoginForm.js            # New: Login form
│   │   │   │   ├── RegisterForm.js         # New: Registration form
│   │   │   │   └── ProtectedRoute.js       # New: Route guard for authenticated pages
│   │   │   └── common/              # New: Reusable UI components
│   │   │       ├── LoadingSpinner.js       # New: Loading state component
│   │   │       ├── ErrorAlert.js           # New: Error display component
│   │   │       └── SuccessAlert.js         # New: Success display component
│   │   ├── pages/                   # New: Route-level page components
│   │   │   └── MainPage.js          # Existing: Landing page (upgraded, moved here)
│   │   ├── services/                # New: API service layer
│   │   │   └── api.js               # New: Centralized Axios instance
│   │   ├── context/                 # New: React Context providers
│   │   │   └── AuthContext.js       # New: Authentication state management
│   │   ├── utils/                   # New: Helper functions
│   │   │   └── formatCurrency.js    # New: KES currency formatter
│   │   └── styling/                 # Existing: Component CSS files
│   │       ├── Navbar.css
│   │       ├── MainPage.css
│   │       ├── CreateForm.css
│   │       ├── View.css
│   │       ├── TransferForm.css
│   │       ├── TransferHistory.css  # New
│   │       ├── Dashboard.css        # New
│   │       ├── Footer.css           # New
│   │       ├── Auth.css             # New: Login and Register styling
│   │       └── Common.css           # New
│   ├── .env.example                 # New: Environment variable template
│   └── package.json
│
├── server/                          # Express Backend (moved from pezesha/test/cash-transfer-api/)
│   ├── config/
│   │   └── dbConfig.js              # Existing: SQLite config (fix hardcoded path)
│   ├── controllers/
│   │   ├── accountController.js     # Existing: Business logic (upgraded)
│   │   └── authController.js        # New: Registration and login logic
│   ├── models/
│   │   ├── indexStart.js            # Existing: Sequelize init and associations (upgraded)
│   │   ├── accountModel.js          # Existing: Account model
│   │   ├── transferModel.js         # Existing: Transfer model
│   │   └── userModel.js             # New: User model for authentication
│   ├── routes/
│   │   ├── accountRoutes.js         # Existing: Account routes (upgraded)
│   │   ├── transferRoutes.js        # Existing: Transfer routes (upgraded)
│   │   └── authRoutes.js            # New: Auth routes (register, login)
│   ├── middleware/                   # New: Express middleware
│   │   ├── errorHandler.js          # New: Centralized error handling middleware
│   │   └── auth.js                  # New: JWT verification middleware
│   ├── validation/
│   │   └── validation_Schema.js     # Existing: Joi schemas (upgraded)
│   ├── index.js                     # Existing: Entry point (upgraded)
│   ├── .env.example                 # New: Environment variable template
│   └── package.json
│
├── .gitignore                       # New: Root-level gitignore
├── README.md                        # New: Comprehensive project README
├── LICENSE                          # New: MIT License
└── CLAUDE.md                        # This file
```

---

## What Exists vs What Is New

### Existing Files (To Be Upgraded/Fixed)
These files already have working code. Modifications should build on top of what exists, not rewrite from scratch:

**Backend (server/):**
- `index.js` — Express app setup, middleware, error handlers
- `config/dbConfig.js` — SQLite configuration (FIX: hardcoded absolute path)
- `models/indexStart.js` — Sequelize initialization, model registration, sync, associations
- `models/accountModel.js` — Account model definition
- `models/transferModel.js` — Transfer model definition
- `controllers/accountController.js` — Business logic for accounts and transfers
- `routes/accountRoutes.js` — Account route definitions
- `routes/transferRoutes.js` — Transfer route definitions
- `validation/validation_Schema.js` — Joi validation schemas

**Frontend (client/):**
- `src/index.js` — React DOM root render
- `src/App.js` — Router setup and route definitions
- `src/components/Navbar.js` — Navigation bar
- `src/components/MainPage.js` — Landing page
- `src/components/CreateAccountForm.js` — Account creation form
- `src/components/ViewAccount.js` — Account lookup by ID
- `src/components/TransferForm.js` — Money transfer form
- All CSS files in `src/styling/`

### New Files (To Be Created)
These files do not exist yet and will be created as part of the upgrade:

**Root Level:**
- `.gitignore` — Combined gitignore for both client and server
- `README.md` — Comprehensive project documentation
- `LICENSE` — MIT License
- `CLAUDE.md` — This file

**Backend (server/):**
- `middleware/errorHandler.js` — Centralized error handling middleware
- `middleware/auth.js` — JWT verification middleware for protected routes
- `controllers/authController.js` — Registration and login business logic
- `routes/authRoutes.js` — Auth route definitions (register, login)
- `models/userModel.js` — User model (name, email, password hash)
- `.env.example` — Environment variable template

**Frontend (client/):**
- `src/services/api.js` — Centralized Axios instance with base URL from env
- `src/context/AuthContext.js` — React Context for authentication state management
- `src/utils/formatCurrency.js` — KES currency formatting helper
- `src/components/common/LoadingSpinner.js` — Reusable loading state
- `src/components/common/ErrorAlert.js` — Reusable error display
- `src/components/common/SuccessAlert.js` — Reusable success display
- `src/components/layout/Footer.js` — Footer component
- `src/components/transfers/TransferHistory.js` — Transfer history view
- `src/components/dashboard/Dashboard.js` — Overview dashboard
- `src/components/auth/LoginForm.js` — Login form component
- `src/components/auth/RegisterForm.js` — Registration form component
- `src/components/auth/ProtectedRoute.js` — Route guard wrapper for authenticated pages
- `src/styling/Auth.css` — Login and Register page styling
- `.env.example` — Environment variable template
- New CSS files for new components

---

## Known Bugs and Issues to Fix

These are documented issues from the existing codebase that must be addressed during the upgrade:

### Bug 1: Hardcoded Database Path (Critical)
**File:** `server/config/dbConfig.js`
**Issue:** Contains an absolute Windows path (`D:/pezesha/test/cash-transfer-api/database.db`) that breaks on any other machine.
**Fix:** Use `path.join(__dirname, '../database.db')` to make it relative to the project root.

### Bug 2: Hardcoded API URL in Frontend (Critical)
**Files:** `CreateAccountForm.js`, `ViewAccount.js`, `TransferForm.js`
**Issue:** `http://localhost:4000` is hardcoded in each component file (3 separate places).
**Fix:** Create a centralized Axios instance in `src/services/api.js` that reads from `REACT_APP_API_URL` environment variable. All components should import and use this shared instance.

### Bug 3: Hardcoded CORS Origin (Moderate)
**File:** `server/index.js`
**Issue:** CORS origin is hardcoded to `http://localhost:3000`.
**Fix:** Read the allowed origin from an environment variable (`CLIENT_URL`) with a fallback to `http://localhost:3000`.

### Bug 4: Transfer Timestamp Not Displayed (Minor)
**Issue:** The Transfer model records a `timestamp` field but the frontend never displays it.
**Fix:** Display the transfer timestamp in the new TransferHistory component and in transfer success messages.

### Bug 5: No Input Sanitization Beyond Joi (Minor)
**Issue:** While Joi validates input types and formats, there is no trimming or sanitization of string inputs.
**Fix:** Add `.trim()` to string fields in Joi schemas and consider adding basic sanitization.

---

## New Features to Implement

### Feature 1: Transfer History
**Description:** A page that shows a list of all transfers made, showing sender, receiver, amount, and timestamp.
**Backend:** Add a new `GET /Transfer/transfers` endpoint that returns all transfers with associated account names.
**Frontend:** New `TransferHistory.js` component with a table displaying transfer records.

### Feature 2: Dashboard Overview
**Description:** A landing dashboard that shows key statistics at a glance: total accounts, total transfers, recent activity.
**Backend:** Add a new `GET /Account/stats` endpoint that returns summary statistics.
**Frontend:** New `Dashboard.js` component with summary cards.

### Feature 3: Account Listing
**Description:** View all existing accounts in a list or table format instead of searching one by one.
**Backend:** Add a new `GET /Account/accounts` endpoint (no ID parameter) that returns all accounts.
**Frontend:** Update ViewAccount or create a new component to display all accounts.

### Feature 4: Delete Account
**Description:** Allow deletion of accounts that have zero balance and no pending transfers.
**Backend:** Add a new `DELETE /Account/accounts/:id` endpoint with balance check.
**Frontend:** Add a delete button to account view with confirmation.

### Feature 5: Centralized API Service Layer
**Description:** Extract all Axios calls into a centralized service layer.
**Files:** `src/services/api.js` — Axios instance with base URL, interceptors, and error handling.
**Benefit:** Single place to update API URL, add auth headers in the future, handle errors consistently.

### Feature 6: Reusable Common Components
**Description:** Extract loading states, error displays, and success messages into reusable components.
**Files:** `LoadingSpinner.js`, `ErrorAlert.js`, `SuccessAlert.js`
**Benefit:** Consistent UI patterns across all pages without code duplication.

### Feature 7: Footer Component
**Description:** A simple footer with copyright information and project credits.
**File:** `src/components/layout/Footer.js`

### Feature 8: User Authentication (Register and Login)
**Description:** Add a complete authentication system so that users must register and log in before they can access the application. This is a major new feature that touches both backend and frontend.

**Backend — What to build:**
- **User Model** (`models/userModel.js`): A new Sequelize model with `id`, `name`, `email` (unique), and `password` (bcrypt hashed) fields.
- **Auth Controller** (`controllers/authController.js`):
  - `register` — validates input with Joi, checks for duplicate email, hashes password with bcryptjs (10 salt rounds), creates the user, returns a JWT token.
  - `login` — validates input, finds user by email, compares password with bcrypt, returns a JWT token on success.
  - `getProfile` — returns the currently authenticated user's info (name, email, id) based on the JWT token.
- **Auth Routes** (`routes/authRoutes.js`):
  - `POST /Auth/register` — register a new user
  - `POST /Auth/login` — log in an existing user
  - `GET /Auth/me` — get current user profile (protected)
- **Auth Middleware** (`middleware/auth.js`): Extracts the JWT from the `Authorization: Bearer <token>` header, verifies it, attaches the decoded user to `req.user`, and calls `next()`. Returns 401 if the token is missing or invalid.
- **Protect Existing Routes:** The Account and Transfer routes should be wrapped with the auth middleware so that only logged-in users can create accounts, view accounts, make transfers, etc.
- **Validation Schemas:** Add Joi schemas for `registerSchema` (name, email, password with min 6 characters) and `loginSchema` (email, password) to `validation/validation_Schema.js`.
- **Model Registration:** Register the User model in `models/indexStart.js` alongside Account and Transfer.

**Frontend — What to build:**
- **AuthContext** (`context/AuthContext.js`): A React Context that stores the JWT token and user info in state. Provides `login()`, `register()`, `logout()`, and `isAuthenticated` values to the entire app. The token is stored in `localStorage` so the user stays logged in on page refresh. The Axios instance in `services/api.js` should attach the token to every request via an interceptor.
- **LoginForm** (`components/auth/LoginForm.js`): A form with email and password fields. On submit, calls the login API. On success, stores the token via AuthContext and redirects to the Dashboard. Shows inline error if credentials are invalid.
- **RegisterForm** (`components/auth/RegisterForm.js`): A form with name, email, password, and confirm password fields. On submit, calls the register API. On success, auto-logs in the user and redirects to the Dashboard. Shows inline errors for validation failures or duplicate email.
- **ProtectedRoute** (`components/auth/ProtectedRoute.js`): A wrapper component that checks if the user is authenticated. If yes, renders the child route. If no, redirects to the Login page.
- **Login and Register Styling** (`styling/Auth.css`): Clean forms with white background, consistent with the rest of the app. NO purple or deep blue. Use the same colour palette defined in the UI/UX guidelines.
- **Routing Updates:** Add `/login` and `/register` routes to `App.js`. Wrap all existing routes (except `/`, `/login`, `/register`) inside `ProtectedRoute`. The MainPage (`/`) should remain publicly accessible but should show a "Login" or "Get Started" button instead of direct feature buttons if the user is not authenticated.
- **Navbar Updates:** Show "Login" and "Register" links when the user is not authenticated. Show the user's name and a "Logout" button when authenticated.

**Authentication Flow:**
1. New user visits the app and lands on the MainPage.
2. Clicks "Register" to create an account with name, email, and password.
3. On successful registration, the user is automatically logged in and redirected to the Dashboard.
4. On subsequent visits, the user clicks "Login", enters email and password, and is redirected to the Dashboard.
5. The JWT token is stored in localStorage and attached to all API requests.
6. If the token expires or is invalid, the user is redirected to the Login page.
7. The user can click "Logout" in the Navbar to clear the token and return to the MainPage.

**Important notes:**
- Passwords must NEVER be stored in plain text. Always use bcryptjs with at least 10 salt rounds.
- The JWT secret must come from the environment variable `JWT_SECRET`, never hardcoded.
- JWT expiry should be set to 7 days (`7d`).
- The frontend should handle 401 responses globally via the Axios interceptor — if any API call returns 401, clear the token and redirect to login.

---

## API Endpoints (Complete — Existing + New)

All routes are prefixed in `index.js`:
- Auth routes mounted at `/Auth`
- Account routes mounted at `/Account` (protected — requires JWT)
- Transfer routes mounted at `/Transfer` (protected — requires JWT)

| Method | URL | Status | Description |
|---|---|---|---|
| `POST` | `/Auth/register` | New | Register a new user |
| `POST` | `/Auth/login` | New | Log in and receive JWT |
| `GET` | `/Auth/me` | New | Get current user profile (protected) |
| `POST` | `/Account/accounts` | Existing | Create a new account (protected) |
| `GET` | `/Account/accounts` | New | List all accounts (protected) |
| `GET` | `/Account/accounts/:id` | Existing | Get account info by ID (protected) |
| `DELETE` | `/Account/accounts/:id` | New | Delete account, zero balance only (protected) |
| `GET` | `/Account/stats` | New | Get summary statistics (protected) |
| `POST` | `/Transfer/transfers` | Existing | Transfer money between accounts (protected) |
| `GET` | `/Transfer/transfers` | New | List all transfers with account names (protected) |

### Request and Response Bodies

**Register** (`POST /Auth/register`):
```json
{ "name": "string", "email": "string", "password": "string" }
```
Response: `{ "success": true, "data": { "token": "jwt_token", "user": { "id", "name", "email" } } }`

**Login** (`POST /Auth/login`):
```json
{ "email": "string", "password": "string" }
```
Response: `{ "success": true, "data": { "token": "jwt_token", "user": { "id", "name", "email" } } }`

**Get Profile** (`GET /Auth/me`):
Headers: `Authorization: Bearer <token>`
Response: `{ "success": true, "data": { "id", "name", "email" } }`

**Create Account** (`POST /Account/accounts`):
```json
{ "name": "string", "balance": number }
```

**Transfer** (`POST /Transfer/transfers`):
```json
{ "from_account_id": number, "to_account_id": number, "amount": number }
```

**Stats Response** (`GET /Account/stats`):
```json
{
  "totalAccounts": number,
  "totalTransfers": number,
  "totalBalance": number,
  "recentTransfers": [...]
}
```

---

## Database

- **Engine:** SQLite 3 (file-based, retained from original)
- **File:** `server/database.db` (relative path after fix)
- **Sync mode:** `{ force: false }` — tables are never dropped on restart
- **ORM:** Sequelize 6

### Data Models

**User** (New)

| Column | Type | Notes |
|---|---|---|
| `id` | INTEGER | Primary key, auto-increment |
| `name` | STRING | Required |
| `email` | STRING | Required, unique |
| `password` | STRING | Required, bcrypt hashed (never stored in plain text) |

**Account**

| Column | Type | Notes |
|---|---|---|
| `id` | INTEGER | Primary key, auto-increment |
| `name` | STRING | Required |
| `balance` | FLOAT | Required, default 0, min 0 |

**Transfer**

| Column | Type | Notes |
|---|---|---|
| `id` | INTEGER | Primary key, auto-increment |
| `from_account_id` | INTEGER | FK to Account |
| `to_account_id` | INTEGER | FK to Account |
| `amount` | FLOAT | Required, min 0.01 |
| `timestamp` | DATE | Auto-set to DataTypes.NOW |

**Associations** (defined in `models/indexStart.js`):
- `Account.hasMany(Transfer, { foreignKey: 'from_account_id', as: 'sentTransfers' })`
- `Account.hasMany(Transfer, { foreignKey: 'to_account_id', as: 'receivedTransfers' })`
- `Transfer.belongsTo(Account, { as: 'sender' })`
- `Transfer.belongsTo(Account, { as: 'receiver' })`

### Validation (Joi)

- **registerSchema:** `name` (required string, trimmed), `email` (required string, valid email), `password` (required string, min 6 characters)
- **loginSchema:** `email` (required string, valid email), `password` (required string)
- **accountCreationSchema:** `name` (required string, trimmed), `balance` (required number, min 0)
- **transferSchema:** `from_account_id` (required number), `to_account_id` (required number), `amount` (required positive number, min 0.01)

---

## Frontend Routing (Complete — Existing + New)

| Route | Component | Status | Auth Required | Description |
|---|---|---|---|---|
| `/` | `MainPage` | Existing (upgraded) | No | Landing page with navigation |
| `/login` | `LoginForm` | New | No | User login page |
| `/register` | `RegisterForm` | New | No | User registration page |
| `/dashboard` | `Dashboard` | New | Yes | Overview with stats and recent activity |
| `/create-account` | `CreateAccountForm` | Existing (upgraded) | Yes | Create a new account |
| `/view-account` | `ViewAccount` | Existing (upgraded) | Yes | Search and display accounts |
| `/transfer` | `TransferForm` | Existing (upgraded) | Yes | Transfer money between accounts |
| `/transfer-history` | `TransferHistory` | New | Yes | View all transfer records |

`Navbar` is rendered globally outside `<Routes>` and always visible. It shows different links based on authentication state.
`Footer` is rendered globally below `<Routes>` and always visible.

---

## UI/UX Design Guidelines

### PROTECTED DESIGN — MainPage (DO NOT REMOVE OR MODIFY)

> **WARNING: The MainPage design described below MUST be preserved exactly as-is. DO NOT remove, replace, or significantly alter this design pattern during any phase of the upgrade.**

The existing `MainPage` component uses a distinctive design that was carefully crafted and must be maintained:

**Background:** A full-page image (`src/assets/images/Transfer.png`) with a dark gradient overlay:
```css
background: linear-gradient(
    rgba(0, 0, 0, 0.7),   /* darker at top */
    rgba(0, 0, 0, 0.5)    /* slightly lighter at bottom */
), url('../assets/images/Transfer.png');
```
The image is `cover`-sized, `center`-positioned, and fixed (parallax-style — it does not scroll with the page).

**Content Card (Glassmorphism):** The buttons and title sit inside `.main-container`, which uses:
- `background: rgba(255, 255, 255, 0.1)` — semi-transparent white
- `backdrop-filter: blur(10px)` — frosted glass effect blurring the image behind it
- Rounded corners (`border-radius: 20px`) and a subtle border (`rgba(255, 255, 255, 0.2)`)

**Animations:**
- The title fades in from above (`fadeInDown`)
- The buttons fade in from below (`fadeInUp`)

**Buttons:** Also glassmorphism-style — transparent with a white border, lift effect on hover (`translateY(-3px)`).

**Design pattern summary:** Image background + dark overlay + glassmorphism card.

**Key files to protect:**
- `src/styling/MainPage.css` — DO NOT overwrite or strip this file's glassmorphism styling
- `src/assets/images/Transfer.png` — DO NOT remove this image asset

When adding new navigation buttons to the MainPage (e.g., for Dashboard, Transfer History), they MUST follow the same glassmorphism button style that already exists. New buttons should blend seamlessly with the existing design, not introduce a different style.

---

### Layout
- White background for all main content areas (except MainPage which has its own protected design above)
- Clean, minimal design with adequate whitespace
- Responsive across desktop and mobile viewports
- Consistent card-based layouts for forms and data display

### Color Palette
- **Primary:** `#1A73E8` (Clean blue for buttons, links, and accents)
- **Success:** `#2E7D32` (Green for success states and positive balances)
- **Warning:** `#ED6C02` (Amber for caution states)
- **Danger:** `#D32F2F` (Red for errors, delete actions, insufficient balance)
- **Background:** `#FFFFFF` (White for main content)
- **Surface:** `#F5F5F5` (Light grey for cards and sections)
- **Text Primary:** `#212121` (Near-black for main text)
- **Text Secondary:** `#757575` (Grey for secondary text and labels)
- **Border:** `#E0E0E0` (Light grey for borders and dividers)

### Styling Rules
- Plain CSS in per-component files inside `src/styling/` (no CSS framework)
- NO purple or deep blue AI-looking colour schemes
- Stick with white backgrounds for the majority of pages
- Subtle borders and shadows for depth rather than heavy colours
- Consistent spacing and padding across all components
- Currency amounts displayed with KES formatting: `Intl.NumberFormat('en-US', { style: 'currency', currency: 'KES' })`

### Component Styling Conventions
- Rounded corners on cards (border-radius: 8px)
- Subtle box shadows (box-shadow: 0 1px 3px rgba(0,0,0,0.1))
- Form inputs with clear labels, borders, and focus states
- Buttons with consistent sizing and hover effects
- Loading spinners for async operations
- Inline error and success messages below forms

---

## Error Handling Strategy

### Backend
- Centralized error handler middleware in `middleware/errorHandler.js`
- `http-errors` package for creating typed HTTP errors
- Joi validation errors mapped to 400 responses with field-specific messages
- Sequelize errors caught and mapped appropriately (unique constraint to 409, not found to 404)
- 404 handler for unmatched routes
- Global error handler returns `{ error: { status, message } }`
- Controller errors forwarded via `next(error)` to the global handler

### Frontend
- Centralized Axios instance in `services/api.js` with error interceptors
- Network errors display user-friendly connection failure message
- Validation errors shown inline on form fields
- Generic errors displayed via ErrorAlert component
- Try/catch in all async operations
- Loading states shown during all API calls

### Response Format
```json
// Success
{
  "success": true,
  "data": { ... }
}

// Error
{
  "error": {
    "status": 400,
    "message": "Validation failed",
    "details": [...]
  }
}
```

---

## Security Considerations

- Passwords hashed with bcryptjs (10 salt rounds, never stored in plain text)
- JWT-based authentication with tokens stored in localStorage on the frontend
- JWT secret stored in environment variable (`JWT_SECRET`), never hardcoded
- JWT expiry set to 7 days
- Auth middleware protects all Account and Transfer routes
- Axios interceptor attaches JWT token to all API requests and handles 401 globally
- Helmet.js for security headers (new addition)
- Rate limiting on auth and transfer endpoints with express-rate-limit (new addition)
- Input validation on all endpoints with Joi
- CORS configured to allow only the frontend origin from environment variable
- Environment variables for all configuration (no hardcoded values)

---

## Environment Variables

### Server (.env)
```env
PORT=4000
CLIENT_URL=http://localhost:3000
NODE_ENV=development
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d
```

### Client (.env)
```env
REACT_APP_API_URL=http://localhost:4000
```

---

## Development Workflow

### Running Locally
```bash
# Terminal 1 — Backend
cd server
npm install
npm start
# Server starts on http://localhost:4000

# Terminal 2 — Frontend
cd client
npm install
npm start
# App opens on http://localhost:3000
```

### Git Setup (New Repository)
```bash
# Initialize and connect to the new GitHub repo
cd Cash-Transfer-Application
git init
git remote add origin https://github.com/Martin888Maina/Cash-Transfer-Application.git
```

### Commit Strategy (8 Phases — 8 Commits Total)

Each phase below corresponds to one commit. Claude MUST stop after each phase and wait for the developer to commit and push before continuing.

---

#### Phase 1 — Project restructure and repository setup
**What gets done:**
- Flatten monorepo from nested folders to clean client/ and server/ layout
- Add root .gitignore, LICENSE (MIT), CLAUDE.md
- Remove old .env files from tracking
- Ensure both client/ and server/ have valid package.json files

**Git commands after Phase 1:**
```bash
cd Cash-Transfer-Application
git init
git remote add origin https://github.com/Martin888Maina/Cash-Transfer-Application.git
git add .
git commit -m "Restructure project as monorepo with client and server directories"
git branch -M main
git push -u origin main
```

---

#### Phase 2 — Fix critical backend bugs and add security
**What gets done:**
- Fix hardcoded database path in dbConfig.js (use relative path)
- Fix hardcoded CORS origin (read from environment variable)
- Add .env.example files for both client and server
- Add helmet and express-rate-limit to server
- Add centralized error handler middleware

**Git commands after Phase 2:**
```bash
git add .
git commit -m "Fix hardcoded paths and add security middleware"
git push
```

---

#### Phase 3 — Centralize frontend API layer and fix hardcoded URLs
**What gets done:**
- Create services/api.js with centralized Axios instance
- Refactor all components to use the shared API service
- Add REACT_APP_API_URL environment variable support
- Create utility helpers (formatCurrency.js)

**Git commands after Phase 3:**
```bash
git add .
git commit -m "Centralize API service layer and fix hardcoded URLs"
git push
```

---

#### Phase 4 — Add authentication system (backend and frontend)
**What gets done:**
- Create User model (userModel.js) and register it in indexStart.js
- Create auth controller with register, login, and getProfile functions
- Create auth routes (POST /Auth/register, POST /Auth/login, GET /Auth/me)
- Create JWT verification middleware (middleware/auth.js)
- Add Joi validation schemas for register and login
- Protect existing Account and Transfer routes with auth middleware
- Create AuthContext for frontend authentication state management
- Create LoginForm and RegisterForm components with Auth.css styling
- Create ProtectedRoute wrapper component
- Update App.js with /login and /register routes and wrap protected routes
- Update Navbar to show auth-aware links (Login/Register vs Username/Logout)
- Update Axios instance to attach JWT token and handle 401 responses
- Install jsonwebtoken and bcryptjs on the server

**Git commands after Phase 4:**
```bash
git add .
git commit -m "Add user authentication with JWT login and registration"
git push
```

---

#### Phase 5 — Add new backend endpoints
**What gets done:**
- Add GET /Account/accounts (list all accounts)
- Add DELETE /Account/accounts/:id (delete account with balance check)
- Add GET /Account/stats (summary statistics)
- Add GET /Transfer/transfers (list all transfers with account names)
- Update Joi validation schemas for new endpoints

**Git commands after Phase 5:**
```bash
git add .
git commit -m "Add account listing, deletion, stats, and transfer history endpoints"
git push
```

---

#### Phase 6 — Reorganize frontend components and add new features
**What gets done:**
- Move components into organized subdirectories (layout/, accounts/, transfers/, common/, pages/)
- Create reusable LoadingSpinner, ErrorAlert, SuccessAlert components
- Create Footer component
- Build TransferHistory component and page
- Build Dashboard component with summary cards
- Update ViewAccount to support listing all accounts
- Add delete account functionality to ViewAccount
- Wire up all new components to new backend endpoints
- Update App.js routing for new pages
- Update all imports across all files

**Git commands after Phase 6:**
```bash
git add .
git commit -m "Add dashboard, transfer history, and reorganize components"
git push
```

---

#### Phase 7 — UI polish and styling upgrades
**What gets done:**
- Refresh all component styles following the colour palette guidelines
- Ensure consistent spacing, typography, and layout across all pages
- Add responsive styles for mobile viewports
- Update Navbar with links to new pages (Dashboard, Transfer History)
- Ensure white backgrounds and no purple/deep-blue AI-looking themes
- PRESERVE the MainPage glassmorphism design exactly as-is (do not alter MainPage.css or Transfer.png)
- Ensure new MainPage buttons (if any) match the existing glassmorphism style

**Git commands after Phase 7:**
```bash
git add .
git commit -m "Polish UI styling and add responsive layout improvements"
git push
```

---

#### Phase 8 — Add README and final cleanup
**What gets done:**
- Write comprehensive README.md with setup instructions, tech stack, features, and screenshots placeholder
- Final code cleanup and comment review
- Ensure all human-like comments are in place
- Remove any console.logs or debug code
- Verify no AI tool references exist anywhere in the project

**Git commands after Phase 8:**
```bash
git add .
git commit -m "Add project documentation and final code cleanup"
git push
```

---

## README.md Template

The project README should include:
- Project title and description (no emojis)
- Tech stack (React, Node.js, Express, SQLite, Sequelize)
- Features list
- Prerequisites (Node.js 18+)
- Installation and setup instructions for both client and server
- Environment variable documentation
- API documentation summary
- Folder structure overview
- Screenshots section (placeholder for actual screenshots)
- Known limitations and future enhancements
- License (MIT)

---

## Future Enhancements (Not In Scope for This Upgrade)

- Role-based authorization (admin vs regular user)
- Transaction receipts and PDF export
- M-Pesa integration for real-world transfers
- Multi-currency support with exchange rates
- Recurring/scheduled transfers
- Account statement generation
- Email notifications for transfers
- Admin panel for managing all accounts
- Pagination for account and transfer listings
- Search and filter functionality for transfer history
- Password reset via email
- User profile editing and account deletion
