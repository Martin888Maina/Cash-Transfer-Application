# Cash Transfer API
A RESTful API built with Node.js and Express that enables account creation and secure money transfers between accounts. The system uses SQLite as the database and Sequelize ORM for database operations.

## Features

- Create new accounts with initial balance
- Retrieve account information
- Perform secure money transfers between accounts
- Input validation for all operations
- Atomic transactions for transfer operations
- SQLite database for data persistence

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Dependencies

- express: Web application framework
- sequelize: ORM for database operations
- sqlite3: SQLite database driver
- joi: Input validation
- cors: Cross-Origin Resource Sharing
- dotenv: Environment variable management
- http-errors: HTTP error handling
- nodemon: Development server with auto-reload

## Installation

### Clone the repository:
```
git clone https://github.com/martin888maina/cash-transfer-api-backend.git
   cd cash-transfer-api-backend
```

### Install dependencies:
```
npm install
```

### Configure the database:
Update the database path in config/dbConfig.js if needed:

```javascript
module.exports = {
    dialect: 'sqlite',
    storage: '[your-path]/database.db'
};
```

### Start the server:
```
npm start
```

## API Endpoints

### Account Operations

#### Create Account

`POST /accounts`

**Request body:**
```json
{
    "name": "string",
    "balance": "number"
}
```

#### Get Account Information

`GET /accounts/:id`

---

### Transfer Operations

#### Create Transfer

`POST /transfers`

**Request body:**
```json
{
    "from_account_id": "number",
    "to_account_id": "number",
    "amount": "number"
}
```

## Data Models

### Account Model

- id (Primary Key)
- name (String)
- balance (Number)

### Transfer Model

- id (Primary Key)
- from_account_id (Foreign Key)
- to_account_id (Foreign Key)
- amount (Number)

## Input Validation
The API implements validation using Joi for:

- Account creation (name and non-negative balance)
- Money transfers (valid account IDs and positive amount)

## Error Handling
The API provides detailed error messages for:

- Invalid input data
- Insufficient funds
- Non-existent accounts
- Database operation failures

## Transaction Security
Money transfers are implemented using Sequelize transactions to ensure:

- Atomic operations
- Data consistency
- Automatic rollback on failure

## Development
To run the server in development mode with auto-reload:
```
npm start
```

## License

This project is licensed under the ISC License.

See the [LICENSE](LICENSE) file for more details.

## Author
[Martin Kamau Maina]





