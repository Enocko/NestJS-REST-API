<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS REST API Project

This project is a REST API built using the [NestJS](https://nestjs.com/) framework. It was created as part of a tutorial to demonstrate how to build a RESTful API with NestJS, Prisma, and PostgreSQL.

## Features

- **User Management**: CRUD operations for managing users.
- **Employee Management**: CRUD operations for managing employees.
- **Database Integration**: Uses PostgreSQL as the database, managed via Prisma ORM.
- **Custom Logger**: Includes a custom logging service for better debugging and monitoring.
- **Global Exception Handling**: Implements a global exception filter for consistent error handling.

## Project Structure

```
nestjs-rest-api/
├── src/
│   ├── app.controller.ts          # Main application controller
│   ├── app.module.ts              # Root module
│   ├── app.service.ts             # Main application service
│   ├── main.ts                    # Application entry point
│   ├── database/                  # Database module and service
│   ├── employees/                 # Employees module, controller, and service
│   ├── users/                     # Users module, controller, and service
│   ├── my-logger/                 # Custom logger module and service
│   └── all-exceptions.filter.ts   # Global exception filter
├── prisma/                        # Prisma schema and migrations
│   ├── schema.prisma              # Prisma schema definition
│   └── migrations/                # Database migrations
├── test/                          # End-to-end tests
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.build.json            # TypeScript build configuration
├── nest-cli.json                  # NestJS CLI configuration
├── eslint.config.mjs              # ESLint configuration
└── .gitignore                     # Files and directories to ignore in Git
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nestjs-rest-api.git
   cd nestjs-rest-api
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/database
     ```
     Replace `username`, `password`, `localhost`, `5432`, and `database` with your PostgreSQL credentials.

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

2. The application will be available at `http://localhost:3000`.

## API Endpoints

### Users

- `GET /users`: Get all users
- `GET /users/:id`: Get a user by ID
- `POST /users`: Create a new user
- `PATCH /users/:id`: Update a user by ID
- `DELETE /users/:id`: Delete a user by ID

### Employees

- `GET /employees`: Get all employees
- `GET /employees/:id`: Get an employee by ID
- `POST /employees`: Create a new employee
- `PATCH /employees/:id`: Update an employee by ID
- `DELETE /employees/:id`: Delete an employee by ID

## Testing

Run the end-to-end tests:

```bash
npm run test:e2e
# or
yarn test:e2e
```

## Built With

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [Prisma](https://www.prisma.io/) - A next-generation ORM for Node.js and TypeScript.
- [PostgreSQL](https://www.postgresql.org/) - A powerful, open-source object-relational database system.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the [YouTube tutorial](https://www.youtube.com/) that inspired this project.
- Thanks to the NestJS and Prisma communities for their excellent documentation and support.
