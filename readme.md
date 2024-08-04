# Train Service Management System

This project is a backend system for managing train services, stations, user wallets, and ticketing. It is built using Node.js, Express, and MongoDB, and includes user authentication with JWT.


## Live Demo Vercel

The server for this application can be found here: [Train Jatri Server](https://train-service-management-system.vercel.app/)


## Git Repository Server

You can view the server-side code here: [Train Jatri Server Repository](https://github.com/Mostafizur-Pro/train_jatri_server.git)

## Features

- User Management:
  - User registration and login
  - Password hashing with bcrypt
  - JWT-based authentication and authorization

- Station Management:
  - Create, update, and retrieve station information

- Train Management:
  - Create, update, and retrieve train schedules and stops

- Wallet Integration:
  - Add funds to user wallets
  - Maintain wallet balance and transaction history

- Ticketing System:
  - Purchase tickets using wallet balance
  - Calculate fare based on train stops


## Setup Instructions


### Backend

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mostafizur-Pro/train_jatri_server.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd train_jatri_server
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the server:**

   ```bash
   npm run dev
   ```
## API Endpoints

### User Management

- **Register User:**
  - URL: `/api/v1/users/signup`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "user",
      "number": "01950165016",
      "email": "noman@example.com",
      "password": "123456",
      "wallet": "120"
    }
    ```

- **Login User:**
  - URL: `/api/v1/auth/login`
  - Method: `POST`
  - Body:
    ```json
    {
      "email": "mostafiz@example.com",
      "password": "123456"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

- **Find All Users:**
  - URL: `/api/v1/users`
  - Method: `GET`

- **Find User by ID:**
  - URL: `/api/v1/users/:id`
  - Method: `GET`

- **Update User by ID:**
  - URL: `/api/v1/users/:id`
  - Method: `PATCH`

- **Delete User by ID:**
  - URL: `/api/v1/users/:id`
  - Method: `DELETE`

### Station Management

- **Create Station:**
  - URL: `/api/v1/stations/create-station`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "West Station",
      "code": "WS012",
      "location": "West End",
      "city": "Khulna",
      "state": "Khulna"
    }
    ```

- **Find All stations:**
  - URL: `/api/v1/stations`
  - Method: `GET`

- **Find stations by ID:**
  - URL: `/api/v1/stations/id/:id`
  - Method: `GET`

- **Update stations by ID:**
  - URL: `/api/v1/stations/update/:id`
  - Method: `PATCH`

- **Delete stations by ID:**
  - URL: `/api/v1/stations/delete/:id`
  - Method: `DELETE`

### Train Management

- **Create Train:**
  - URL: `/api/v1/trains/create-train`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "Local 505",
      "number": "LOC505",
      "type": "Local",
      "capacity": "300",
      "status": "Running",
      "stops": [
        {
          "station": "station_id_7",
          "arrivalTime": "2024-08-07T08:30:00Z",
          "departureTime": "2024-08-07T08:50:00Z"
        },
        {
          "station": "station_id_8",
          "arrivalTime": "2024-08-07T09:20:00Z",
          "departureTime": "2024-08-07T09:40:00Z"
        }
      ]
    }
    ```

- **Find All Trains:**
  - URL: `/api/v1/trains`
  - Method: `GET`

- **Find Train by ID:**
  - URL: `/api/v1/trains/id/:id`
  - Method: `GET`

- **Update Train by ID:**
  - URL: `/api/v1/trains/update/:id`
  - Method: `PATCH`

- **Delete Train by ID:**
  - URL: `/api/v1/trains/delete/:id`
  - Method: `DELETE`


### Wallet Management

- **Create Wallet:**
  - URL: `/api/v1/wallets/create-wallet`
  - Method: `POST`
  - Body:
    ```json
    {
      "user": "user_id_4",  
      "balance": 1500,
      "transactions": [
        {
          "amount": 200,
          "date": "2024-08-07T09:00:00Z",
          "type": "debit",
          "description": "Online purchase"
        }
      ]
    }
    ```

- **Find All Wallet:**
  - URL: `/api/v1/wallets`
  - Method: `GET`

- **Find Wallet by ID:**
  - URL: `/api/v1/wallets/id/:id`
  - Method: `GET`

- **Update Wallet by ID:**
  - URL: `/api/v1/wallets/update/:id`
  - Method: `PATCH`

- **Delete Wallet by ID:**
  - URL: `/api/v1/wallets/delete/:id`
  - Method: `DELETE`


### Ticket Management

- **Create Ticket:**
  - URL: `/api/v1/tickets/create-ticket`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "Local Ticket with Description",
      "number": "LOC999",
      "type": "Local",
      "capacity": 180,
      "status": "Running",
      "stops": [
        {
          "station": "station_id_9",  
          "arrivalTime": "2024-08-08T10:00:00Z",
          "departureTime": "2024-08-08T10:30:00Z"
        }
      ]
    }
    ```

- **Find All Ticket:**
  - URL: `/api/v1/tickets`
  - Method: `GET`

- **Find Ticket by ID:**
  - URL: `/api/v1/tickets/id/:id`
  - Method: `GET`

- **Update Ticket by ID:**
  - URL: `/api/v1/tickets/update/:id`
  - Method: `PATCH`

- **Delete Ticket by ID:**
  - URL: `/api/v1/tickets/delete/:id`
  - Method: `DELETE`

## Contact

If you have any questions, feel free to reach out at [mostafizur0195@gmail.com](mailto:mostafizur0195@gmail.com) or call me at [01950165017](tel:01950165017).

You can also connect with me on:

- **WhatsApp:** [Click to chat](https://wa.me/01950165017)
- **Facebook:** [Mostafizur Rahman](https://www.facebook.com/mostafizur.proo/)
- **LinkedIn:** [Mostafizur Rahman](https://www.linkedin.com/in/mostafizur-pro/)
