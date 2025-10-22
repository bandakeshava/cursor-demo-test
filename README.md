# Angular Cursor Demo 2

A modern Angular application built with TypeScript, featuring authentication modules, dashboard components, and following Angular best practices for scalable web development.

## 🚀 Features

- **Authentication System**: Complete login and sign-up functionality with form validation
- **Dashboard**: Protected dashboard area with logout functionality
- **Modern Angular Architecture**: Built with Angular 16+ using standalone components
- **TypeScript**: Full type safety with strict typing
- **SCSS Styling**: Modern styling with SCSS preprocessor
- **Bootstrap Integration**: Responsive UI components with Bootstrap 5.3.8
- **Reactive Forms**: Form handling with Angular Reactive Forms
- **Signals**: Modern reactive state management using Angular signals
- **Service Injection**: Modern dependency injection with `inject()` function

## 🛠️ Tech Stack

- **Angular**: 16.2.0
- **TypeScript**: 5.1.3
- **Bootstrap**: 5.3.8
- **RxJS**: 7.8.0
- **SCSS**: For styling
- **Angular CLI**: 16.2.16

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── dashboard/
│   │       ├── dashboard.component.html
│   │       ├── dashboard.component.scss
│   │       └── dashboard.component.ts
│   ├── modules/
│   │   └── auth/
│   │       ├── components/
│   │       │   ├── login/
│   │       │   │   ├── login.component.html
│   │       │   │   ├── login.component.scss
│   │       │   │   ├── login.component.spec.ts
│   │       │   │   └── login.component.ts
│   │       │   └── sign-up/
│   │       │       ├── sign-up.component.html
│   │       │       ├── sign-up.component.scss
│   │       │       └── sign-up.component.ts
│   │       ├── services/
│   │       │   └── auth.service.ts
│   │       ├── auth-routing.module.ts
│   │       └── auth.module.ts
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── favicon.ico
├── index.html
├── main.ts
└── styles.scss
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-cursor-demo2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## 🏗️ Architecture

### Components

- **AppComponent**: Root component with routing configuration
- **LoginComponent**: Authentication form with reactive validation
- **SignUpComponent**: User registration form
- **DashboardComponent**: Protected dashboard area

### Services

- **AuthService**: Handles authentication logic, login, logout, and user state management

### Modules

- **AuthModule**: Feature module containing authentication-related components and services
- **AppModule**: Root module with application-wide configurations

## 🔧 Development Guidelines

### Code Standards

- **File Naming**: kebab-case for all files (e.g., `user-profile.component.ts`)
- **TypeScript**: Strict typing, avoid `any` type
- **Immutability**: Use pure functions and immutable data structures
- **Component Composition**: Favor composition over inheritance
- **Signals**: Use Angular signals for reactive state management
- **Service Injection**: Use `inject()` function for dependency injection

### Best Practices

- Use standalone components where appropriate
- Implement proper error handling
- Follow Angular style guide conventions
- Use reactive forms with validation
- Apply proper change detection strategies
- Utilize Angular's built-in sanitization for security

## 🧪 Testing

Run the test suite using:

```bash
npm test
```

The project uses Jasmine and Karma for unit testing with Angular's testing utilities.

## 📦 Build

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build --configuration=production
```

## 🚀 Deployment

The built files will be in the `dist/` directory. Deploy the contents of this directory to your web server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🆘 Support

For support and questions, please contact the development team.

---

**Built with ❤️ using Angular and TypeScript**