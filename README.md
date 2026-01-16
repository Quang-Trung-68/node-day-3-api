# Express API Standard Template

This is a standardized Express.js API project with MySQL integration, including features like consistent response formatting, global error handling, and rate limiting.

## Features

- **Standardized Response Format**: unified structure for success and error responses.
- **Global Error Handling**: Centralized exception handler for 500 errors.
- **Rate Limiting**: Protects your API from abuse.
- **MySQL Integration**: Ready-to-use database connection and Task model.
- **MVC Architecture**: Organized structure with Models, Views (JSON), Controllers, and Routes.

## Prerequisites

- Node.js (v14 or higher)
- MySQL Database

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <project-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Database Setup

1.  Create a MySQL database named `todo_dev` (or match the config in `src/config/database.js`).
2.  Create the `tasks` table:
    ```sql
    CREATE TABLE tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    ```

## Running the Server

-   **Development mode** (with watch):
    ```bash
    npm run dev
    ```
-   **Start server**:
    ```bash
    node server.js
    ```

The server will start at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint      | Description           |
| :----- | :------------ | :-------------------- |
| GET    | `/api/tasks`  | Get all tasks         |
| GET    | `/api/tasks/:id` | Get a specific task   |
| POST   | `/api/tasks`  | Create a new task     |
| PUT    | `/api/tasks/:id` | Update a task         |
| DELETE | `/api/tasks/:id` | Delete a task         |
