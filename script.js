/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --bg-tertiary: #1a1a1a;
    --text-primary: #e4e4e7;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --accent-primary: #00d9ff;
    --accent-secondary: #7c3aed;
    --accent-tertiary: #f59e0b;
    --border-color: #27272a;
    --success: #10b981;
    --warning: #f59e0b;
    --error: #ef4444;
    
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-glow: 0 0 20px rgba(0, 217, 255, 0.3);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Custom Cursor */
.cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
}

.cursor-follower {
    width: 8px;
    height: 8px;
    background: var(--accent-primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.3s ease;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: var(--transition);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 600;
}

.logo-bracket {
    color: var(--accent-primary);
}

.logo-text {
    color: var(--text-primary);
    margin: 0 0.2rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    position: relative;
    transition: var(--transition);
}

.nav-link:hover {
    color: var(--accent-primary);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-primary);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.hamburger span {
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: var(--transition);
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.terminal-window {
    background: var(--bg-secondary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    max-width: 600px;
    margin: 0 auto;
}

.terminal-header {
    background: var(--bg-tertiary);
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid var(--border-color);
}

.terminal-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.btn.red { background: var(--error); }
.btn.yellow { background: var(--warning); }
.btn.green { background: var(--success); }

.terminal-title {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.terminal-body {
    padding: 2rem;
    font-family: var(--font-mono);
}

.terminal-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.prompt {
    color: var(--accent-primary);
    font-weight: 600;
}

.command {
    color: var(--text-primary);
}

.terminal-output {
    margin: 2rem 0;
    padding-left: 1.5rem;
}

.name-output {
    font-size: 3rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.role-output {
    font-size: 1.2rem;
    color: var(--text-secondary);
    font-family: var(--font-mono);
}

.typing-animation {
    animation: typing 3s steps(12) infinite;
}

.cursor-blink {
    animation: blink 1s infinite;
    color: var(--accent-primary);
}

@keyframes typing {
    0%, 50% { width: 0; }
    100% { width: 100%; }
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Sections */
.section {
    padding: 6rem 0;
    position: relative;
}

.section:nth-child(even) {
    background: var(--bg-secondary);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.section-number {
    font-family: var(--font-mono);
    font-size: 1.2rem;
    color: var(--accent-primary);
    font-weight: 400;
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

.about-stats {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: var(--accent-primary);
    font-family: var(--font-mono);
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.code-block {
    background: var(--bg-tertiary);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    overflow: hidden;
}

.code-header {
    background: var(--bg-secondary);
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.code-content {
    padding: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
}

.code-line {
    margin-bottom: 0.5rem;
}

.keyword { color: #c792ea; }
.variable { color: #82aaff; }
.property { color: #ffcb6b; }
.string { color: #c3e88d; }
.boolean { color: #ff5370; }

/* Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.skill-category {
    background: var(--bg-tertiary);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: var(--transition);
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
}

.skill-category h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: var(--accent-primary);
    font-family: var(--font-mono);
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.skill-tag {
    background: var(--bg-secondary);
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid var(--border-color);
    transition: var(--transition);
}

.skill-tag:hover {
    background: var(--accent-primary);
    color: var(--bg-primary);
    transform: scale(1.05);
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-tertiary);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.project-header h3 {
    font-size: 1.3rem;
    color: var(--text-primary);
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    color: var(--accent-primary);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    transition: var(--transition);
}

.project-link:hover {
    color: var(--accent-secondary);
}

.project-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: var(--bg-secondary);
    color: var(--accent-primary);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    border: 1px solid var(--border-color);
}

/* Contact Section */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-text p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-label {
    font-family: var(--font-mono);
    color: var(--text-muted);
    min-width: 80px;
}

.contact-link {
    color: var(--accent-primary);
    text-decoration: none;
    transition: var(--transition);
}

.contact-link:hover {
    color: var(--accent-secondary);
}

/* Form Styles */
.form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    position: relative;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group textarea {
    min-height: 120px;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
}

.form-group label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: var(--text-muted);
    font-size: 1rem;
    pointer-events: none;
    transition: var(--transition);
}

.form-group input:focus + label,
.form-group input:valid + label,
.form-group textarea:focus + label,
.form-group textarea:valid + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.8rem;
    color: var(--accent-primary);
    background: var(--bg-primary);
    padding: 0 0.5rem;
}

.submit-btn {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: var(--bg-primary);
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.submit-btn:active {
    transform: translateY(0);
}

/* Footer */
.footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    padding: 2rem 0;
    text-align: center;
}

.footer p {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: var(--transition);
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 1rem 0;
    }
    
    .nav-link {
        font-size: 1.2rem;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .section {
        padding: 4rem 0;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .name-output {
        font-size: 2rem;
    }
    
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .about-stats {
        justify-content: center;
    }
    
    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .terminal-body {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .nav-container {
        padding: 0 1rem;
    }
    
    .terminal-window {
        margin: 0 1rem;
    }
    
    .name-output {
        font-size: 1.5rem;
    }
    
    .about-stats {
        flex-direction: column;
        gap: 1rem;
    }
}

/* Scroll Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

/* Selection */
::selection {
    background: var(--accent-primary);
    color: var(--bg-primary);
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--accent-secondary);
}
