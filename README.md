# User Management System

# Overview

This project implements a basic user management system following a **hexagonal architecture** and a **modular folder structure**. The system features a user model, a repository for data persistence, a logging middleware, and an email notification service. The goal is to demonstrate how to build a maintainable and scalable application with clear separation of concerns, allowing for easy integration of external services.

## Key Components:

- **User Model**: Defines the user entity in the domain layer.
- **User Repository**: Provides an interface for data operations (e.g., create, retrieve users).
- **Email Service**: A shared service for sending emails, with a Mailgun implementation in the common folder.
- **Logging Middleware**: Logs key request data for debugging and validation.
- **Hexagonal Architecture**: Ensures a clean separation between core business logic and external systems, promoting extensibility.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application
   ```bash
   npm run start
   ```

## Project Structure

```text
project-directory/
│
├── modules/
│   ├── user/                        # User-related resources
│   │   ├── application/              # User application layer
│   │   │   └── repository/           # User repository interface (e.g., user.repository.js)
│   │   ├── domain/                   # User domain (model, business logic)
│   │   │   └── User.js               # User entity
│   │   ├── infrastructure/           # User persistence layer (e.g., in-memory repository)
│   │   │   └── user.repository.js    # In-memory user repository implementation
│   │   └── controller/               # User API controller (handles requests)
│   │       └── user.controller.js
│   │
│   ├── common/                       # Shared resources
│   │   ├── application/              # Common application logic (e.g., email service)
│   │   │   └── repository/           # Email service interface
│   │   │       └── email.repository.js
│   │   └── infrastructure/           # Email service implementation
│   │       └── mailgun.js            # Mailgun email service implementation
│
├── middleware/                       # Middleware
│   └── checkValidUser.js             # Request validation middleware
│
└── index.js                          # Entry point for the application

```

# Changes and Key Concepts

### Modular Structure

The project is divided into modules to better organize related resources. For instance, all user-related components (e.g., user model, repository, controller) are grouped under the `user` module. The `common` module holds shared functionality like the email service.

### Hexagonal Architecture

The system uses **hexagonal architecture** where the core business logic (e.g., user management) is isolated in the **domain layer**. The **application layer** provides interfaces for communication with external services, and the **infrastructure layer** implements these interfaces (e.g., repository for user data and Mailgun for email notifications).

### Email Service

The email service is implemented as an interface inside the `common/application/repository` folder, with a Mailgun implementation located in the `common/infrastructure` folder. This allows you to easily replace the email service implementation without affecting the rest of the system.

### Separation of Concerns

Each module and layer is responsible for a specific part of the application, promoting **testability** and **maintainability**. For example:

- The **controller** layer handles HTTP requests and responses.
- The **application** layer contains business logic and interfaces.
- The **infrastructure** layer manages the actual communication with external services like Mailgun and the database.

### Logging Middleware

A middleware that logs requests and validates the hostname is used for debugging purposes. This middleware checks if the request is coming from a valid hostname (localhost) before processing further.
