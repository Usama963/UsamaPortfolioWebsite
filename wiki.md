# Project Summary
This project is a professional portfolio website for Usama Azhar, a Senior SQA Automation Engineer. It showcases his skills and experience in software quality assurance (SQA), particularly in test automation and CI/CD processes. The site features a projects page, a blog for insights, a contact form, and a dark/light mode toggle for user accessibility. Recent updates include improved functionality, aesthetics, a fully integrated scheduling option with Calendly, and deployment capabilities on Vercel.

# Project Module Description
The project includes the following functional modules:
- **Hero Section**: Displays key statistics and a summary of Usama Azhar's profile.
- **About Me Section**: Highlights core skills, certifications, and professional journey.
- **Professional Experience Section**: Lists work history and achievements.
- **Key Projects Section**: Showcases significant testing projects with methodologies.
- **Projects Page**: Features detailed project descriptions with search and filter capabilities.
- **Blog Section**: Contains articles on various QA topics with enhanced navigation and share functionality.
- **Contact Section**: Simplified form for potential employers or collaborators to reach out.
- **Client Testimonials Section**: Displays feedback from clients and colleagues.
- **Call-to-Action Section**: Encourages users to schedule consultations, now linked to Calendly.
- **Resume Download Button**: Allows users to download Usama Azhar's resume.
- **Dark/Light Mode Toggle**: Users can switch themes for improved accessibility.
- **Global Search**: Searches across projects and blog posts.
- **Project Detail Pages**: Provides comprehensive information about individual projects.
- **Blog Detail Pages**: Displays individual blog articles with comprehensive content and images.

# Directory Tree
```
shadcn-ui/
├── README.md                 # Project overview and documentation
├── components.json           # Component definitions
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── public/                   # Public assets
│   ├── favicon.svg           # Favicon for the website
│   └── Osama_Azhar_Resume.pdf # Updated resume for download
├── src/                      # Source files
│   ├── App.css               # Main CSS styles
│   ├── App.tsx               # Main application component, wrapped with ThemeProvider
│   ├── components/ui/        # UI components
│   ├── components/CallToActionSection.tsx # Updated Call-to-Action component
│   ├── components/ContactForm.tsx # Updated contact form component
│   ├── components/GlobalSearch.tsx # Global search component
│   ├── hooks/                # Custom hooks
│   │   └── useTheme.tsx      # Hook for theme management
│   ├── pages/                # Application pages
│   │   ├── Blog.tsx          # Blog page with articles and share functionality
│   │   ├── BlogDetail.tsx    # Individual blog detail page
│   │   ├── Index.tsx         # Home page with updated content
│   │   ├── Projects.tsx      # Projects page with details
│   │   ├── ProjectDetail.tsx  # Individual project detail pages
│   ├── lib/                  # Utility functions
│   ├── index.css             # Global styles
│   └── main.tsx              # Entry point of the application
├── tailwind.config.ts        # Tailwind CSS configuration
├── template_config.json      # Template configuration
├── tsconfig.*                # TypeScript configuration files
├── vercel.json               # Vercel configuration file
├── .vercelignore             # Files to exclude from deployment
└── vite.config.ts            # Vite configuration
```

# File Description Inventory
- **README.md**: Contains project documentation and instructions.
- **components.json**: Defines reusable UI components.
- **eslint.config.js**: Configuration for code linting.
- **index.html**: The main HTML structure of the application.
- **package.json**: Lists project dependencies and scripts for building and running the application.
- **postcss.config.js**: Configuration for PostCSS processing.
- **public/**: Contains static assets, including the updated resume PDF.
- **src/**: Contains all source code, including components, hooks, pages, and styles.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **template_config.json**: Configuration for the project template.
- **tsconfig.*.json**: TypeScript configuration files for different environments.
- **vercel.json**: Configuration file for Vercel deployment.
- **.vercelignore**: Specifies files and directories to ignore during Vercel deployment.
- **vite.config.ts**: Configuration for Vite, the build tool used.

# Technology Stack
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for modern web projects.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.
- **ESLint**: Tool for identifying and fixing problems in JavaScript code.

# Usage
To get started with the project, follow these steps:
1. Download your files locally:
   ```bash
   mkdir usama-portfolio
   cd usama-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install -g pnpm
   pnpm install
   ```
3. Build the project:
   ```bash
   pnpm run build
   ```
4. Run the application:
   ```bash
   pnpm run dev
   ```
5. **Deployment to Vercel**:
   - Create a GitHub repository and push your local project.
   - Go to Vercel, sign up/login, and create a new project using your GitHub repository.
   - Vercel will auto-detect the framework and build settings. Click "Deploy".
