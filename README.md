<div align="center">
  <h1>Project Tracker</h1>
</div>

Project Tracker is a powerful and user-friendly tool designed to help individuals to manage their projects effectively.

## Installation & Usage

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/03YugAgarwal/Project-Tracker.git
    ```
2. Install dependencies:
    ```bash
    cd Project-Tracker/client
    npm install
    ```
    ```bash
    cd Project-Tracker/server
    npm install
    ```
3. Open two separate terminals:
    - In the first terminal, navigate to the client folder and run:

        ```bash
        npm start
        ```
    - In the second terminal, navigate to the server folder and run:

        ```bash
        npm start
        ```
## Configuration

The server requires a MongoDB_URI variable. Create a .env file inside the server folder and set the variable MONGO_URI with your MongoDB Atlas drive link.

```bash
IP=
PORT=
DEVELOPMENT=
CLIENT_URL=
MONGO_URI=
```

## Tech Stack

Project-Tracker utilizes the following technologies:

- **React:**
  - The frontend of Project-Tracker is built with React, a widely adopted JavaScript library for building user interfaces. React's component-based architecture and virtual DOM contribute to a modular and efficient development process.

- **CSS:**
  - Cascading Style Sheets (CSS) are employed for styling the user interface, providing a visually appealing and responsive design. CSS allows for the customization and theming of the platform to enhance the user experience.

- **Express:**
  - The backend of Project-Tracker is powered by Express, a popular and minimalistic Node.js web application framework. Express is known for its simplicity and flexibility, making it suitable for building robust and scalable server-side applications.

- **MongoDB:**
  - Project-Tracker uses MongoDB as the database to store and manage user data. MongoDB's flexibility and scalability make it well-suited for handling dynamic and evolving data in a mental health and well-being platform.

- **Other Technologies:**
  - Project-Tracker incorporates other technologies to enhance functionality, security, and development efficiency. These may include libraries, frameworks, and tools that contribute to the overall success of the platform.

The chosen tech stack reflects our commitment to creating a secure, user-friendly, and scalable platform for supporting mental health and well-being.

