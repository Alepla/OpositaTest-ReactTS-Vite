# OpostiaTest-ReactTS-Vite

## Usage
### Build the docker container
  make build
### Start serving the aplication 
  make start
### Stop serving the aplication
  make stop
### Remove the docker container
  make down
### Run all tests
  make test
### Run tests coverage
  make test-coverage
### Exec always before commit
  make before-commit

## Environments

- Development: File .env.development on env folder.

Create this file and copy the info of the .env.example file

## Info

- The following link takes you to a trello board, which I have used to organize my work, and it can serve as a history: https://trello.com/b/JPjxqugW/opositatest

- If you do not have docker installed, you can initialize the project with npm

## Tecnologías

- Vite: I have used Vite as the build and development tool for the application. Vite is an ultra-fast web builder that enables fast real-time reloading and generates highly optimized and efficient web applications. With Vite, I can quickly build web applications without having to worry about manual configuration of tools like Webpack or Parcel.

- React: I have used React as the component library for the application's user interface. React is a popular library for building user interfaces in JavaScript. It is a powerful tool for developing single-page web applications and allows for a modular and reusable UI structure.

- TypeScript: I have used TypeScript as the programming language for the application. TypeScript is a superset of JavaScript that adds static types and other features to improve code readability, maintainability, and scalability. With TypeScript, I can write safer code and avoid common JavaScript errors.

- ESLint: I have used ESLint as the linter for the application. ESLint is a tool that helps find and fix errors in the code. With ESLint, I can ensure that my code complies with defined style rules and avoid common code errors.

- Testing Library: I have used the Testing Library for testing the application. Testing Library is a set of utilities that facilitate testing React components in a user-centric way. It provides a simple and intuitive API for interacting with components and asserting their behavior. With Testing Library, I can write comprehensive and reliable tests to ensure the quality and correctness of my application.

- Vitest: I have used Vite Test Utils as a Vite-native unit test framework. It provides utilities for testing components created with Vite in an easy and efficient manner. Vite Test Utils allows for simulating interactions with components, performing assertions, and evaluating results in unit tests specifically designed for Vite-based projects.