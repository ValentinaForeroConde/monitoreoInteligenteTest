# Monorepo: Application and Component Library

## Monitoreo Inteligente - Technical Assessment

This monorepo was developed as part of a technical assessment for the Frontend Senior Developer role at Monitoreo Inteligente Company. It includes a React application and a reusable component library built with TypeScript, Zustand, and Tailwind CSS, showcasing the ability to manage and develop modular and maintainable code in a monorepo structure.

This monorepo contains two projects:

- **Project 1**: A React application that serves as the main app.
- **Project 2**: A React component library used by `Project 1`.

## Table of Contents

- [Overview](#overview)
- [Monorepo Structure](#monorepo-structure)
- [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Running Projects](#running-projects)

- [Project 1: Application](#project-1-application)
- [Project 2: Component Library](#project-2-component-library)

## Overview

This repository is structured as a monorepo containing two interconnected projects:

- **Project 1**: The main React application that uses components from `Project 2`.
- **Project 2**: A reusable component library built with React.

The monorepo setup allows for shared dependencies and streamlined development across both projects.

## Monorepo Structure

```bash {"id":"01J6SQYVCHZXAGF83GYTP7QC1J"}
monorepo-root/
├── project1/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── project2/
│   ├── src/
│   ├── lib/
│   ├── package.json
│   └── README.md
│
├── node_modules/
├── package.json
├── yarn.lock
└── README.md
```

## Getting Started

### Installation

1. **Clone the repository**:

```bash {"id":"01J6SQYVCHZXAGF83GYW9KXGT9"}
git clone git@github.com:ValentinaForeroConde/monitoreoInteligenteTest.git
cd monitoreoInteligenteTest
```

2. **Install dependencies**:

   `yarn install`
   This will install all dependencies for both project1 and project2 as specified in their respective package.json files.

### Running Projects

Each project can be run independently:

**Running project1**:
`yarn --cwd project1 start`

**Running project2**:
`yarn --cwd project2 start`

## Project 1: Application

Project 1 is the main application within this monorepo. It uses components from Project 2 to build its UI.

For more details, see the [Project 1 README](/project1/README.md).

## Project 2: Component Library

Project 2 is a React component library that provides reusable UI components for Project 1.

For more details, see the [Project 2 README](/project2/README.md).

### Summary of the Root README

- **Overview**: Provides a general introduction to the monorepo, explaining its structure and purpose.
- **Monorepo Structure**: Visual representation of the directory structure, highlighting the relationship between `project1` and `project2`.
- **Getting Started**: Instructions for cloning the repository, installing dependencies, and running each project.
- **Project-Specific Details**: Links to the respective README files for `project1` and `project2`.

This README serves as the central documentation hub for the entire monorepo, directing users and contributors to the relevant project-specific information as needed.