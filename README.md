# Joseph Hughes - Console Portfolio

An interactive terminal-style portfolio website built with Next.js, TypeScript, and React. This project transforms a traditional portfolio into a command-line interface experience.

## Features

- **Interactive Console Interface**: Navigate using terminal commands
- **Command History**: Use arrow keys to navigate through previous commands
- **File System Simulation**: Browse portfolio content as if it were files
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Terminal Aesthetics**: Dark theme with syntax highlighting

## Available Commands

### File Operations
- `ls` - List all available files
- `cat <filename>` - Display file contents
- `tree` - Show directory structure

### Navigation
- `pwd` - Show current directory
- `whoami` - Display current user
- `date` - Show current date and time
- `uptime` - Show system uptime

### Content
- `about` - Show about information
- `experience` - Show work experience
- `skills` - Show technical skills
- `projects` - List all projects
- `contact` - Show contact details

### Social Links
- `github` - Open GitHub profile
- `linkedin` - Open LinkedIn profile
- `email` - Show email address
- `resume/cv` - Download resume

### System
- `version` - Show version information
- `neofetch` - Display system information
- `clear` - Clear the console
- `help` - Show this help message

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- **Next.js 13.2.4** - React framework
- **TypeScript** - Type safety
- **React 18** - UI library
- **CSS3** - Styling with custom terminal theme
- **JetBrains Mono** - Monospace font for terminal feel

## Customization

To customize the portfolio content, edit the `fileSystem` object in `src/components/Console.tsx`. Each key represents a file that can be viewed with the `cat` command.

## Deployment

The application can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Heroku

## License

This project is open source and available under the [MIT License](LICENSE).