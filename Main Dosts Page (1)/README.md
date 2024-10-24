# NativeScript Chat Application

A mobile chat application built with NativeScript and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [NativeScript CLI](https://docs.nativescript.org/setup/)
- For iOS development: macOS with Xcode
- For Android development: Android SDK

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Preview the application:
```bash
ns preview
```

4. Run on devices:
- Android: `ns run android`
- iOS: `ns run ios`

## Project Structure

```
├── app/
│   ├── pages/           # Application pages
│   ├── app.ts           # Application entry point
│   ├── app.css          # Global styles
│   └── app-root.xml     # Root component
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Features

- Chat interface with voice notes
- Profile management
- Conversation history
- Multiple chat personalities (Dosts)

## Development

- Use `ns preview` for rapid development
- Use `ns run android` or `ns run ios` for device testing

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request