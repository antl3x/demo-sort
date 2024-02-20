# Package Sorting Function Documentation

## Overview

This repository contains the `sortPackage` function demo. The function is responsible for categorizing packages into different stacks based on their dimensions (width, height, length) and mass. This documentation outlines the function's logic and provides instructions for running tests both locally and online using StackBlitz.

## Logic

The `sortPackage` function categorizes packages based on the following criteria:

- **Bulky Package**: A package is considered bulky if its volume (calculated as Width x Height x Length) is greater than or equal to 1,000,000 cm³, or if any of its dimensions is greater or equal to 150 cm.
- **Heavy Package**: A package is considered heavy if its mass is greater or equal to 20 kg.

Based on these characteristics, packages are dispatched to the following stacks:

- **STANDARD**: Packages that are neither bulky nor heavy.
- **SPECIAL**: Packages that are either bulky or heavy, but not both.
- **REJECTED**: Packages that are both bulky and heavy.

The function performs validations to ensure all inputs are positive, finite numbers, throwing an error for any invalid input.

## Local Testing

### Prerequisites

- Node.js installed on your machine.
- A package manager like pnpm, npm or yarn.

### Setup

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run `pnpm install` or `npm install` or `yarn install` to install dependencies.

### Running Tests

To execute the tests, run the following command in the terminal at the root of the project:

```bash
pnpm test
```

# StackBlitz
Try the function online using StackBlitz by clicking [here](https://stackblitz.com/~/github.com/antl3x/demo-sort).

[https://stackblitz.com/~/github.com/antl3x/demo-sort](https://stackblitz.com/~/github.com/antl3x/demo-sort)