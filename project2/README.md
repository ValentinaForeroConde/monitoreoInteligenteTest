# Project 2: React Component Library

This project is a React component library that provides reusable UI components for `Project 1`. The library is built with TypeScript and uses Yarn for package management. Changes in this project are automatically tested using GitHub Actions.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Building the Library](#building-the-library)
- [Continuous Integration](#continuous-integration)
- [Using the Library](#using-the-library)


## Overview

`Project 2` is a library of reusable React components designed to be used in `Project 1` and other React-based projects. The library is written in TypeScript for type safety and is managed with Yarn. The primary goal of this project is to create a modular, maintainable, and reusable component library.

## Technologies Used

- **React**: For building the components.
- **TypeScript**: For static type checking.
- **Yarn**: For dependency management.
- **GitHub Actions**: For continuous integration and testing.

## Getting Started

### Installation

To get started with `Project 2`, follow these steps:

1. **Install dependencies**:
   `yarn install`

2. **Building the Library**:
   `yarn build`

## Continuous Integration
This project uses GitHub Actions to automatically run tests whenever a change is pushed to the repository. The workflow is triggered on pull requests and pushes to ensure that the library remains stable.

### GitHub Actions Workflow
Trigger: The tests are automatically triggered on any push or pull request to the repository, specifically when changes are made to the project2 directory.
Actions: The workflow runs the tests defined in the project to ensure that any changes do not break the existing functionality.

## Using the Component Library
Once built, the library can be used in Project 1 or any other React project. To import and use a component from Project 2:

```bash 
   import { MyComponent } from 'project2';
```

### Exporting Components
Ensure that all components are properly exported in the index.ts file located in the src directory. This will make them available for use in other projects. For example:

```bash 
   //index.tsx
   import { MyComponent } from "./MyComponent";

   export { MyComponent };
```