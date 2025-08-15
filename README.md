# UserManagement
User Management and Document Management
Backend API

A NestJS-based backend service with authentication, PostgreSQL (via TypeORM), and JWT support.  
This project is set up with linting, testing, and environment management for scalable development.

- [NestJS](https://nestjs.com/) – Node.js framework
- [TypeORM](https://typeorm.io/) – ORM for database access
- [PostgreSQL](https://www.postgresql.org/) – relational database
- [Passport.js](http://www.passportjs.org/) – authentication middleware
- [JWT](https://jwt.io/) – token-based authentication
- [Jest](https://jestjs.io/) – testing framework
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – code quality


# install dependencies
npm install/yarn

#.env File.
# Application
PORT=3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=nestjs_app

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600s


# Buiding and running the alication.
npm run build
npm run start:dev

