# React Template

[React Template](react-template)

###### By Daniel Daza

<br/>
<br/>

## Content

1. [Project Description](#ProjectDescription)
2. [Installation](#Installation)
3. [Scripts](#Scripts)
4. [Project Structure](#ProjectStructure)

    4.1. [Application](#Application)

    4.2. [Infrastructure](#Infrastructure)

    4.3. [Presentation](#Presentation)

5. [Testing](#Testing)

<br/>
<br/>

## 1. <a name='ProjectDescription'></a>Project Description

Project description here ...

The project is structure with the following technologies:

1. [React](https://facebook.github.io/react/)
2. [TypeScript](https://www.typescriptlang.org/)
3. [Create React App](https://create-react-app.dev/)
4. [React Router](https://reactrouter.com/)
5. [SASS](http://sass-lang.com/)
6. [Jest](https://facebook.github.io/jest/)
7. [Enzyme](https://enzymejs.github.io/enzyme/)

## 2. <a name='Installation'></a>Installation

To install the project dependencies, run the following command:

1. nvm use
2. npm i

## 3. <a name='Scripts'></a>Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Launches the test runner to generate a code coverage report.

### `npm run test:snapshot`

Launches the test runner to generate code snapshots.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Launch linter to review and analyze the code.

### `npm run lint-fix`

Launch linter to review and analyze the code and fix the code.

## 4. <a name='ProjectStructure'></a>Project Structure

The project is structured using clean architecture with the following layers:

### 4.1. <a name='Application'></a>Application

The application layer of the proyect is manage in the API folder, to manage all the connection and requests with external services.

### 4.2. <a name='Infrastructure'></a>Infrastructure

The infrastructure layer of the proyect is manage in the Repositories folder, to manage all the bussiness logic of the application.

### 4.3. <a name='Presentation'></a>Presentation

The Presentation layer of the proyect is manage with the templates and pages folders, to manage all the UI section.

## 5. <a name='Testing'></a>Testing

Each component should manage its own .spec file to cover the appropiate unit tests
