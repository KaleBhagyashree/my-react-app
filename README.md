# React CI/CD Demo App

A simple React.js application demonstrating CI/CD pipeline with GitHub Actions.

## Features

- React 18 with functional components and hooks
- Comprehensive test suite with Jest and React Testing Library
- Automated CI/CD pipeline with GitHub Actions
- Code coverage reporting
- Security vulnerability scanning
- Automatic deployment to GitHub Pages

## Getting Started

### Prerequisites
- Node.js 18.x or 20.x
- npm

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Run tests: `npm test`
5. Build for production: `npm run build`

## CI/CD Pipeline

The pipeline includes:
- **Testing**: Runs on multiple Node.js versions (18.x, 20.x)
- **Linting**: ESLint code quality checks
- **Building**: Production build creation
- **Security**: Vulnerability scanning
- **Deployment**: Automatic deployment to GitHub Pages on main branch

## Coverage Requirements
- Minimum 80% coverage for branches, functions, lines, and statements