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

- Development: Create a file named `.env.development` in the env folder.

Please copy the contents of the `.env.example` file into the newly created `.env.development` file. This will provide the necessary environment configuration for the development environment.

## Info

- The following link takes you to a Trello board, which I have used to organize my work, and it can serve as a history: [Trello Board](https://trello.com/b/JPjxqugW/opositatest)

- If you do not have docker installed, you can initialize the project with npm

- I have followed the KISS (Keep It Simple, Stupid!) principle to the maximum extent possible. The KISS principle advocates for simplicity and avoiding unnecessary complexity in software development. By adhering to this principle, I have strived to keep the codebase clean, concise, and easy to understand, enhancing its maintainability and readability.

## Technologies

- Vite: I have used Vite as the build and development tool for the application. Vite is an ultra-fast web builder that enables fast real-time reloading and generates highly optimized and efficient web applications. With Vite, I can quickly build web applications without having to worry about manual configuration of tools like Webpack or Parcel.

- React: I have used React as the component library for the application's user interface. React is a popular library for building user interfaces in JavaScript. It is a powerful tool for developing single-page web applications and allows for a modular and reusable UI structure.

- TypeScript: I have used TypeScript as the programming language for the application. TypeScript is a superset of JavaScript that adds static types and other features to improve code readability, maintainability, and scalability. With TypeScript, I can write safer code and avoid common JavaScript errors.

- ESLint: I have used ESLint as the linter for the application. ESLint is a tool that helps find and fix errors in the code. With ESLint, I can ensure that my code complies with defined style rules and avoid common code errors.

- Prettier: I have used Prettier as the code formatter for the application. Prettier is an opinionated code formatter that helps maintain consistent code style across the project. It automatically formats the code according to predefined rules, reducing manual formatting efforts and ensuring a clean and consistent codebase.

- Testing Library: I have used the Testing Library for testing the application. Testing Library is a set of utilities that facilitate testing React components in a user-centric way. It provides a simple and intuitive API for interacting with components and asserting their behavior. With Testing Library, I can write comprehensive and reliable tests to ensure the quality and correctness of my application.

- Vitest: I have used Vite Test Utils as a Vite-native unit test framework. It provides utilities for testing components created with Vite in an easy and efficient manner. Vite Test Utils allows for simulating interactions with components, performing assertions, and evaluating results in unit tests specifically designed for Vite-based projects.

- Docker: I have used Docker for containerization of the application. Docker allows me to package the application and its dependencies into a lightweight and portable container, ensuring consistency and reproducibility across different environments. With Docker, I can easily deploy and run the application in any environment that supports Docker containers.

## Coverage

- I have achieved 80% code coverage, the remaining 20% is due to the code of the service methods, which will be tested with contract tests (Pact) and the remaining code of the components with end-to-end tests (E2E).