import React, { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string;
  timestamp: Date;
  isTyping?: boolean;
  typingSpeed?: number;
}

interface ConsoleProps {
  initialCommands?: string[];
}

const Console: React.FC<ConsoleProps> = ({ initialCommands = [] }) => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const initialCommandsRun = useRef(false);
  const [typingCommands, setTypingCommands] = useState<Command[]>([]);

  const fileSystem = {
    'about.txt': `JOSEPH HUGHES - FULL STACK DEVELOPER
====================================

Hello! I'm Joseph Hughes, a passionate Full Stack Developer with expertise in modern web technologies.

EXPERIENCE:
- 5+ years in full-stack development
- Specialized in React, Node.js, and cloud technologies
- Experience with Web3 and blockchain development
- Led development teams and managed technical projects

CURRENT ROLE:
- CTO at Townesquare (Web3 Social Media Platform)
- Building innovative solutions for the decentralized web

PASSION:
I love creating elegant solutions to complex problems and mentoring other developers. 
When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.

TECHNICAL FOCUS:
- Modern JavaScript/TypeScript ecosystems
- Cloud-native architecture and microservices
- Blockchain and Web3 technologies
- Open source contribution and community building

EDUCATION:
- Computer Science background with focus on software engineering
- Continuous learning through online courses and certifications
- Active in developer communities and tech meetups`,

    'experience.txt': `PROFESSIONAL EXPERIENCE
====================

CTO - Townesquare (2023 - Present)
- Leading technical strategy for Web3 social media platform
- Managing development team and technical architecture
- Implementing blockchain integration and smart contracts
- Building scalable microservices architecture
- Key Achievements: Launched MVP, onboarded 1000+ users, secured $2M funding

SENIOR FULL STACK DEVELOPER - TechCorp (2020 - 2023)
- Developed and maintained multiple web applications
- Led frontend architecture using React and TypeScript
- Implemented CI/CD pipelines and DevOps practices
- Mentored junior developers and conducted code reviews
- Key Achievements: Improved app performance by 40%, reduced deployment time by 60%

FULL STACK DEVELOPER - StartupXYZ (2018 - 2020)
- Built MVP applications from concept to deployment
- Worked with React, Node.js, and various databases
- Collaborated with design team on user experience
- Participated in agile development processes
- Key Achievements: Built 3 successful MVPs, led team of 4 developers

TECHNICAL CONSULTANT - Freelance (2017 - 2018)
- Provided technical consulting for various startups
- Built custom web applications and APIs
- Conducted technical due diligence for investors
- Key Achievements: Helped 5 startups raise $10M+ in funding`,

    'skills.txt': `TECHNICAL SKILLS
===============

FRONTEND DEVELOPMENT:
- React, Next.js, TypeScript (5+ years)
- HTML5, CSS3, JavaScript (ES6+) (6+ years)
- Material-UI, Styled Components, Tailwind CSS
- Redux, Context API, Zustand
- Webpack, Vite, Parcel
- Testing: Jest, React Testing Library, Cypress

BACKEND DEVELOPMENT:
- Node.js, Express.js (5+ years)
- Python, Django, Flask (3+ years)
- RESTful APIs, GraphQL (4+ years)
- Microservices architecture (3+ years)
- Database design and optimization (5+ years)

DATABASES & STORAGE:
- PostgreSQL, MongoDB (5+ years)
- Redis, Elasticsearch (3+ years)
- Database migration and optimization
- Data modeling and schema design

DEVOPS & CLOUD:
- AWS (EC2, S3, Lambda, RDS) (4+ years)
- Azure, Google Cloud Platform (2+ years)
- Docker, Kubernetes (3+ years)
- CI/CD pipelines (GitHub Actions, Jenkins)
- Linux server administration (5+ years)
- Monitoring and logging (Prometheus, Grafana)

WEB3 & BLOCKCHAIN:
- Solidity, Web3.js, Ethers.js (2+ years)
- Smart contract development and auditing
- DeFi protocols and yield farming
- NFT marketplaces and tokenization
- IPFS integration and decentralized storage

PROGRAMMING LANGUAGES:
- JavaScript/TypeScript (Expert)
- Python (Advanced)
- Solidity (Intermediate)
- Go (Beginner)
- Rust (Learning)`,

    'projects.txt': `FEATURED PROJECTS
===============

TOWNESQUARE (Web3 Social Media Platform)
- Role: CTO & Lead Developer (2023 - Present)
- Tech: React, Next.js, TypeScript, Solidity, IPFS, Node.js
- Description: Decentralized social media platform with NFT integration
- Features: User profiles, content creation, token rewards, governance
- Impact: 1000+ users, $2M funding raised, 50+ smart contracts deployed
- GitHub: github.com/townesquare/platform

E-COMMERCE PLATFORM
- Role: Full Stack Developer (2021 - 2022)
- Tech: Next.js, Node.js, PostgreSQL, Stripe, Redis
- Description: High-performance e-commerce solution for retail clients
- Features: Product catalog, payment processing, admin dashboard, analytics
- Impact: 10,000+ products, $500K+ in transactions processed
- Performance: 99.9% uptime, <2s page load times

TASK MANAGEMENT APP
- Role: Lead Developer (2020 - 2021)
- Tech: React, Express, MongoDB, Socket.io, Docker
- Description: Collaborative project management tool for remote teams
- Features: Real-time updates, team collaboration, file sharing, time tracking
- Impact: 500+ teams using the platform, 50,000+ tasks managed
- Awards: "Best Productivity App" at TechCrunch Disrupt

API GATEWAY SERVICE
- Role: Backend Developer (2019 - 2020)
- Tech: Node.js, Express, Redis, Docker, Kubernetes
- Description: Microservices API gateway for enterprise clients
- Features: Rate limiting, authentication, load balancing, monitoring
- Impact: 1M+ requests/day, 99.99% uptime, 50% cost reduction
- Architecture: Handles 100+ microservices, 10+ client applications

BLOCKCHAIN ANALYTICS DASHBOARD
- Role: Full Stack Developer (2022 - 2023)
- Tech: React, D3.js, Web3.js, Python, FastAPI
- Description: Real-time analytics dashboard for DeFi protocols
- Features: Live data visualization, portfolio tracking, yield farming
- Impact: 5,000+ users, $10M+ in tracked assets
- Innovation: First real-time DeFi analytics platform`,

    'contact.txt': `CONTACT INFORMATION
=================

EMAIL: joseph.hughes@example.com
PHONE: +1 (555) 123-4567
LOCATION: London, UK
LINKEDIN: linkedin.com/in/josephhughes
GITHUB: github.com/josephhughes
TWITTER: @josephhughes_dev
WEBSITE: josephhughes.dev

AVAILABILITY:
- Open to new opportunities
- Available for freelance projects
- Interested in Web3 and blockchain roles
- Remote work preferred
- Part-time consulting available

RESPONSE TIME:
- Email: Within 24 hours
- LinkedIn: Within 48 hours
- GitHub: Check commits for activity

RESUME: Download my latest resume
CV: View my detailed CV online

PREFERRED CONTACT METHODS:
1. Email (best for detailed discussions)
2. LinkedIn (professional networking)
3. GitHub (technical collaboration)
4. Twitter (quick updates and tech discussions)`,

    'help.txt': `AVAILABLE COMMANDS
=================

FILE OPERATIONS:
ls                    - List all available files
cat <filename>        - Display file contents
tree                  - Show directory structure

NAVIGATION:
pwd                   - Show current directory
whoami                - Display current user
date                  - Show current date and time
uptime                - Show system uptime

CONTENT PAGES:
about                 - Show about information
experience            - Show work experience
skills                - Show technical skills
projects              - List all projects
contact               - Show contact details

SOCIAL LINKS:
github                - Open GitHub profile
linkedin              - Open LinkedIn profile
email                 - Show email address
social                - Show all social media links
resume/cv             - Download resume

SYSTEM COMMANDS:
version               - Show version information
neofetch              - Display system information
status                - Show portfolio status
intro/welcome         - Show welcome message
clear                 - Clear the console
help                  - Show this help message

EXAMPLES:
$ cat about.txt
$ ls
$ neofetch
$ github
$ social
$ status
$ clear`,

    'README.md': `JOSEPH HUGHES - PORTFOLIO
========================

Welcome to my interactive console portfolio!

This is a terminal-style CV website built with Next.js and TypeScript.

QUICK START
-----------
- Type 'help' to see available commands
- Use 'ls' to list all files
- Use 'cat <filename>' to read files
- Type 'clear' to reset the console

NAVIGATION
----------
- about.txt      - Personal information
- experience.txt - Work history
- skills.txt     - Technical skills
- projects.txt   - Featured projects
- contact.txt    - Contact information

Enjoy exploring! 🚀`
  };

  const executeCommand = (input: string): string => {
    const cmd = input.trim().toLowerCase();
    const parts = input.trim().split(' ');

    switch (parts[0]) {
      case 'ls':
        return Object.keys(fileSystem)
          .map(filename => `${getFileIcon(filename)} ${filename}`)
          .join('\n');
      
      case 'cat':
        if (parts[1]) {
          const filename = parts[1];
          if (fileSystem[filename as keyof typeof fileSystem]) {
            return fileSystem[filename as keyof typeof fileSystem];
          }
          return `cat: ${filename}: No such file or directory`;
        }
        return 'cat: missing file operand';
      
      case 'clear':
        setCommands([]);
        return '';
      
      case 'help':
        return fileSystem['help.txt'];
      
      case 'whoami':
        return 'joseph-hughes';
      
      case 'pwd':
        return '/home/joseph-hughes/portfolio';
      
      case 'date':
        return new Date().toString();
      
      case 'projects':
        return fileSystem['projects.txt'];
      
      case 'skills':
        return fileSystem['skills.txt'];
      
      case 'experience':
        return fileSystem['experience.txt'];
      
      case 'about':
        return fileSystem['about.txt'];
      
      case 'contact':
        return fileSystem['contact.txt'];
      
      case 'resume':
      case 'cv':
        return `Opening resume...\n\n📄 Resume.pdf - Click to download\n\nAlternatively, use 'cat contact.txt' for contact information.`;
      
      case 'github':
        return `Opening GitHub profile...\n\n🔗 https://github.com/josephhughes\n\nCheck out my repositories and contributions!`;
      
      case 'linkedin':
        return `Opening LinkedIn profile...\n\n🔗 https://linkedin.com/in/josephhughes\n\nConnect with me on LinkedIn!`;
      
      case 'email':
        return `📧 joseph.hughes@example.com\n\nFeel free to reach out for opportunities or collaboration!`;
      
      case 'version':
        return `Console Portfolio v1.0.0\nBuilt with Next.js, TypeScript, and React\nLast updated: ${new Date().toLocaleDateString()}`;
      
      case 'uptime':
        const uptime = Date.now() - (window.performance.timing.navigationStart || 0);
        const seconds = Math.floor(uptime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        return `System uptime: ${hours}h ${minutes % 60}m ${seconds % 60}s`;
      
      case 'neofetch':
        return `    ███████╗██╗   ██╗███████╗████████╗███████╗██╗
    ██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔════╝██║
    █████╗  ██║   ██║███████╗   ██║   █████╗  ██║
    ██╔══╝  ██║   ██║╚════██║   ██║   ██╔══╝  ╚═╝
    ██║     ╚██████╔╝███████║   ██║   ███████╗██╗
    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝

OS: Portfolio Console v1.0.0
Host: joseph-hughes-portfolio
Kernel: Next.js 13.2.4
Uptime: ${Math.floor((Date.now() - (window.performance.timing.navigationStart || 0)) / 1000)}s
Shell: Interactive Console
Terminal: Web Browser
CPU: JavaScript Engine
Memory: Dynamic
Theme: 8-bit Green
Icons: ASCII`;

      case 'intro':
      case 'welcome':
        return `Welcome to Joseph Hughes' Interactive Portfolio!\n\nThis is a terminal-style CV built with Next.js and TypeScript.\n\nQuick Navigation:\n- Type 'ls' to see all available files\n- Type 'cat <filename>' to read content\n- Type 'help' for all available commands\n- Type 'neofetch' for system information\n\nEnjoy exploring! 🚀`;

      case 'status':
        return `Portfolio Status: ONLINE ✅\nLast Updated: ${new Date().toLocaleDateString()}\nTotal Commands: ${commands.length}\nSystem: Running smoothly\nTheme: 8-bit Green Terminal\n\nReady for your next command!`;

      case 'social':
        return `SOCIAL MEDIA & LINKS
====================

GitHub: github.com/josephhughes
LinkedIn: linkedin.com/in/josephhughes
Twitter: @josephhughes_dev
Website: josephhughes.dev
Email: joseph.hughes@example.com

Follow me for updates on my latest projects and tech insights!`;

      case 'tree':
        return `portfolio/
├── [FILE] about.txt
├── [FILE] experience.txt
├── [FILE] skills.txt
├── [FILE] projects.txt
├── [FILE] contact.txt
├── [FILE] help.txt
└── [FILE] README.md

0 directories, 7 files`;
      
      case '':
        return '';
      
      default:
        return `Command not found: ${parts[0]}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const input = currentInput;
    const output = executeCommand(input);
    
    // Add command to history immediately
    setCommandHistory(prev => [...prev, input]);
    setCurrentInput('');
    setHistoryIndex(-1);

    // Use typing animation for better UX
    await addTypingCommand(input, output, 15);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const typeText = async (text: string, delay: number = 30) => {
    setIsTyping(true);
    let i = 0;
    while (i < text.length) {
      await new Promise(resolve => setTimeout(resolve, delay));
      i++;
    }
    setIsTyping(false);
  };

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  const addTypingCommand = async (input: string, output: string, speed: number = 20) => {
    const newCommand: Command = {
      input,
      output: '',
      timestamp: new Date(),
      isTyping: true,
      typingSpeed: speed
    };
    
    setCommands(prev => [...prev, newCommand]);
    setTypingCommands(prev => [...prev, newCommand]);
    
    // Type out the output
    let typedOutput = '';
    for (let i = 0; i < output.length; i++) {
      typedOutput += output[i];
      setCommands(prev => 
        prev.map((cmd, index) => 
          index === prev.length - 1 
            ? { ...cmd, output: typedOutput, isTyping: i < output.length - 1 }
            : cmd
        )
      );
      
      // Scroll to bottom during typing
      setTimeout(() => scrollToBottom(), 0);
      
      await new Promise(resolve => setTimeout(resolve, speed));
    }
    
    setTypingCommands(prev => prev.slice(1));
    
    // Final scroll to ensure we're at the bottom
    setTimeout(() => scrollToBottom(), 100);
  };

  const getFileIcon = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'txt':
        return '[TXT]';
      case 'md':
        return '[MD] ';
      case 'js':
      case 'ts':
      case 'tsx':
        return '[JS] ';
      case 'json':
        return '[JSON]';
      case 'css':
        return '[CSS]';
      case 'html':
        return '[HTML]';
      default:
        return '[FILE]';
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [commands, typingCommands]);

  useEffect(() => {
    if (initialCommands.length > 0 && !initialCommandsRun.current) {
      initialCommandsRun.current = true;
      const runInitialCommands = async () => {
        for (const cmd of initialCommands) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          const output = executeCommand(cmd);
          await addTypingCommand(cmd, output, 20);
        }
      };
      runInitialCommands();
    }
  }, [initialCommands]);

  return (
    <div 
      className="console-container scanlines terminal-flicker" 
      ref={consoleRef}
      style={{
        backgroundColor: '#000000',
        color: '#00ff00',
        fontFamily: 'Press Start 2P, monospace',
        border: '3px solid #00ff00',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 255, 0, 0.1)',
        height: '100vh',
        width: '100vw',
        padding: '15px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="console-header" style={{ 
        color: '#00ff00', 
        borderBottom: '3px solid #00ff00', 
        paddingBottom: '10px',
        textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
        boxShadow: '0 5px 15px rgba(0, 255, 0, 0.3)',
        flexShrink: 0
      }}>
        <div className="ascii-art" style={{
          fontFamily: 'Press Start 2P, monospace',
          fontSize: '10px',
          color: '#00ff00',
          textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          whiteSpace: 'pre',
          margin: '10px 0',
          letterSpacing: '2px'
        }}>
{`JOSEPH HUGHES - BLOCKCHAIN ENTHUSIAST`}
        </div>
        <div style={{ 
          fontSize: '10px', 
          color: '#00ff00', 
          marginTop: '10px', 
          opacity: 0.9,
          textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00'
        }}>
          INTERACTIVE PORTFOLIO CONSOLE v1.0.0
        </div>
        <div style={{ 
          fontSize: '8px', 
          color: '#00ff00', 
          marginTop: '5px', 
          opacity: 0.7,
          textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00'
        }}>
          Type 'help' for available commands • Press ↑/↓ for command history
        </div>
      </div>
      
      <div 
        ref={contentRef}
        style={{ 
          flex: 1,
          overflowY: 'auto',
          marginBottom: '10px',
          paddingRight: '5px'
        }}>
        {commands.map((command, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <div className="command-line" style={{
              display: 'flex',
              alignItems: 'center',
              margin: '5px 0',
              padding: '8px 0',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid transparent',
              transition: 'all 0.2s'
            }}>
              <span style={{ 
                color: '#00ff00', 
                fontWeight: 'normal',
                userSelect: 'none',
                textShadow: '0 0 5px #00ff00'
              }}>joseph@portfolio:~$</span>
              <span style={{ 
                color: '#00ff00', 
                marginLeft: '10px',
                textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00'
              }}>{command.input}</span>
            </div>
            {command.output && (
              <div style={{
                color: '#00ff00',
                margin: '10px 0',
                whiteSpace: 'pre-wrap',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                padding: '15px',
                border: '2px solid #00ff00',
                marginLeft: '20px',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.5), inset 0 0 10px rgba(0, 255, 0, 0.1)',
                textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00'
              }}>
                {command.output}
                {command.isTyping && (
                  <span style={{
                    animation: 'blink 1s infinite',
                    color: '#00ff00',
                    fontWeight: 'bold'
                  }}>█</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ flexShrink: 0 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          margin: '5px 0',
          padding: '8px 0',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid transparent',
          transition: 'all 0.2s'
        }}>
          <span style={{ 
            color: '#00ff00', 
            fontWeight: 'normal',
            userSelect: 'none',
            textShadow: '0 0 5px #00ff00'
          }}>joseph@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #00ff00',
              color: '#00ff00',
              fontFamily: 'Press Start 2P, monospace',
              fontSize: '12px',
              outline: 'none',
              width: '100%',
              marginLeft: '10px',
              caretColor: '#00ff00',
              textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3), inset 0 0 10px rgba(0, 255, 0, 0.1)',
              padding: '5px 10px'
            }}
            placeholder="Type a command..."
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default Console;
