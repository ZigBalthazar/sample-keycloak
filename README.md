# Express.js Keycloak Sample Project

This is a sample Express.js project that demonstrates how to interact with the Keycloak API to perform user registration, user login, and secure routes for authenticated users.

## Prerequisites

Before running the project, ensure you have the following prerequisites installed on your system:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)
- Keycloak Server: [Keycloak Official Website](https://www.keycloak.org/)
- Git: [Download and Install Git](https://git-scm.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/express-keycloak-sample.git

2. Clone the repository:

   ```bash
   cd sample-keycloak

4. Install dependencies:

   ```bash
   npm install
5. Set up your Keycloak configuration by create `.env.dev` :

```bash
ORIGIN = *
CREDENTIALS = true
PORT = 3000

BASE ={{keycloak base url}}
REALM ={{realm id}}

KC_USERNAME = {{username of admin user}}
KC_PASS = {{password}}
KC_ADMIN_CLIENT = {{admin client id}}
KC_APP_CLIENT = {{app client id}}
KC_ADMIN_CLIENT_SECRET = {{app client secret}}
```

6. Start the application:
   ```bash
   npm run dev

## swagger

you can access swagger :
```
http://localhost:3000/docs
```

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
Express.js
Keycloak
