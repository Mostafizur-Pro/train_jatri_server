# Train Service Management System

This project is a backend system for managing train services, stations, user wallets, and ticketing. It is built using Node.js, Express, and MongoDB, and includes user authentication with JWT.


## Live Demo Vercel

The server for this application can be found here: [Kormo Bazaar Server](https://kormo-bazar-server1.vercel.app/)


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
  - URL: `/api/auth/register`
  - Method: `POST`
  - Body: 
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```

- **Login User:**
  - URL: `/api/auth/login`
  - Method: `POST`
  - Body: 
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token"
    }
    ```

### Future Endpoints

- **Station Management:**
  - Create, update, and retrieve station information

- **Train Management:**
  - Create, update, and retrieve train schedules and stops

- **Wallet Integration:**
  - Add funds to user wallets and retrieve wallet balance

- **Ticketing System:**
  - Purchase tickets and calculate fares
  
## Contact

If you have any questions, feel free to reach out at [mostafizur0195@gmail.com](mailto:mostafizur0195@gmail.com) or call me at [01950165017](tel:01950165017).

You can also connect with me on:

- **WhatsApp:** [Click to chat](https://wa.me/01950165017)
- **Facebook:** [Mostafizur Rahman](https://www.facebook.com/mostafizur.proo/)
- **LinkedIn:** [Mostafizur Rahman](https://www.linkedin.com/in/mostafizur-pro/)
