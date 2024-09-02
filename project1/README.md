# Project 1: React Application

This project is a React application that leverages `Project 2` as a component library. It is built using TypeScript, Zustand for state management, Tailwind CSS for styling, and Yarn as the package manager. The project also includes tests to verify core functionality, and it uses Husky to enforce code quality by running tests before commits.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Testing](#testing)
- [Using the Component Library](#using-the-component-library)
- [Deployment](#deployment)

## Overview

`Project 1` is a React application that utilizes components from `Project 2`, a custom component library. The project is designed with TypeScript for type safety, Zustand for state management, and Tailwind CSS for rapid UI development.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For static type checking.
- **Zustand**: For state management.
- **Tailwind CSS**: For styling the application.
- **Yarn**: For dependency management.
- **Jest**: For running tests.
- **Husky**: For running pre-commit hooks to ensure code quality.

## Getting Started


To get started with the project, follow these steps:

1. **Install dependencies**:
   `yarn install`

2. **Running the Project**:
   `yarn start`

3. **Testing**:
   `yarn test:nowatch`
    This command will execute the tests without entering watch mode.

## Using the Component Library
`Project 1` relies on `Project 2` for its UI components. Ensure that `Project 2` is built before running or building `Project 1`.

To import and use a component from `Project 2`:

```bash 
   import { MyComponent } from 'project2';
```

## Deployment

This project is automatically deployed to Vercel whenever changes are merged to the main branch.

**Steps for Automatic Deployment**
- Merge to main branch: Whenever changes are pushed to the main branch, Vercel will automatically trigger a deployment.

**Deployed URL** : [https://monitoreo-inteligente-test-awtj5i4c0.vercel.app/](https://monitoreo-inteligente-test-awtj5i4c0.vercel.app/)