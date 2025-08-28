import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, CheckCircle, Bug, TestTube, Shield, Users, Award, BookOpen, Search } from "lucide-react";
import TestimonialSection from "../components/TestimonialSection";
import CallToActionSection from "../components/CallToActionSection";
import ContactForm from "../components/ContactForm";
import ThemeToggle from "../components/ThemeToggle";
import GlobalSearch from "../components/GlobalSearch";
import { useState } from "react";

export default function SQAPortfolio() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const skills = [
    "Test Automation", "Cypress", "Playwright", "Detox", "Selenium", "Katalon Studio",
    "JavaScript", "Python", "SQL", "Node.js", "React", "Express.js",
    "CI/CD Integration", "GitHub Actions", "Jenkins", "Postman", "OWASP ZAP",
    "Jira", "ClickUp", "AWS", "DBeaver", "Agile/Scrum", "Release Management"
  ];

  const experiences = [
    {
      title: "Senior SQA Automation Engineer",
      company: "Lantro Tech",
      period: "2024 - Present",
      responsibilities: [
        "Designed end-to-end test automation for web applications",
        "Built Cypress automation suites integrated with CI/CD pipelines, reducing regression testing time by 60%",
        "Optimized regression and smoke testing to ensure quick, reliable deployments",
        "Collaborated with developers, product teams, and stakeholders to enhance software quality standards"
      ]
    },
    {
      title: "Software Quality Assurance Engineer",
      company: "Red Buffer",
      period: "2021 - 2024",
      responsibilities: [
        "Improved testing coverage and reduced post-release defects by 20%",
        "Led cross-functional QA initiatives and onboarded new team members",
        "Implemented automation frameworks like Cypress to speed up release cycles",
        "Successfully mentored 6+ new QA engineers on best practices and testing standards"
      ]
    },
    {
      title: "Software Tester (Freelance)",
      company: "Upwork",
      period: "2020 - 2021",
      responsibilities: [
        "Sharpened manual testing skills working on diverse client projects",
        "Performed functional, regression, and smoke testing across various domains",
        "Created detailed test documentation and bug reports",
        "Built strong foundation in QA methodologies and testing best practices"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Blue Ocean Web Application QA",
      description: "End-to-end QA automation for the Blue Ocean web application with CI/CD integration and regression testing.",
      technologies: ["Cypress", "JavaScript", "GitHub Actions", "Postman"],
      achievements: [
        "Reduced regression testing time by 40%",
        "Achieved 95% test coverage across all modules",
        "Improved release confidence with zero critical post-release bugs"
      ]
    },
    {
      id: 4,
      name: "LantroTech Corporate Website QA",
      description: "Led QA efforts for LantroTech's corporate website redesign with focus on cross-browser testing and responsiveness.",
      technologies: ["Cypress", "WordPress", "GitHub Actions", "Jira"],
      achievements: [
        "Delivered bug-free website launch",
        "Ensured 100% cross-browser compatibility",
        "Improved website load performance by 25%"
      ]
    },
    {
      id: 6,
      name: "Polio Eradication - GCSS Project",
      description: "Release management and QA for a critical health project with multi-team collaboration.",
      technologies: ["Jira", "Postman", "Cypress", "ClickUp"],
      achievements: [
        "Ensured timely delivery of multiple releases",
        "Zero critical bugs in production environment",
        "Coordinated testing efforts across multiple teams"
      ]
    }
  ];

  const certifications = [
    "GitHub Actions for Testing – TestAutomationU",
    "QA Engineer Certificate – MANGTAS",
    "Software Quality Assurance – TestDome",
    "Web Element Locator Strategies – TestAutomationU",
    "Cypress Automation – TestAutomationU",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Usama Azhar
            </h1>
            <div className="flex gap-4 items-center">
              <Button variant="ghost" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                About
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                Experience
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = '/projects'}>
                Projects
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                Blog
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Senior SQA Automation Engineer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Passionate about delivering bug-free, reliable software through advanced test automation, 
              CI/CD integration, and comprehensive QA processes that accelerate development cycles.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Osama_Azhar_Resume.pdf';
                  link.download = 'Osama_Azhar_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get in Touch
              </Button>
            </div>
            
            {/* Additional CTA buttons for client attraction */}
            <div className="flex gap-4 justify-center mt-6">
              <Button size="sm" variant="ghost" onClick={() => window.location.href = '/projects'} className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                View Success Stories
              </Button>
              <Button size="sm" variant="ghost" onClick={() => window.location.href = '/blog'} className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Read Insights
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  <Bug className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-2xl font-bold dark:text-white">60%</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Testing Time Reduced</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  <TestTube className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold dark:text-white">90%</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Test Coverage Increased</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold dark:text-white">70%</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Post-Release Defects Reduced</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold dark:text-white">4+</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm Usama Azhar, a passionate Senior SQA Automation Engineer with over 4 years of experience 
                ensuring software quality across web, mobile, and enterprise applications. My career journey 
                has been shaped by a deep interest in test automation, CI/CD pipelines, and building robust 
                QA processes that help teams deliver bug-free, reliable, and high-performing software products.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I focus on designing end-to-end test automation, optimizing regression testing for quick deployments, 
                implementing CI/CD workflows for continuous testing, and collaborating with cross-functional teams 
                to enhance software quality standards. My expertise includes reducing testing time by 40% through 
                automation and successfully mentoring 6+ QA engineers.
              </p>
              

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://github.com/Usama963', '_blank')}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://www.linkedin.com/in/usama-azhar/', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://medium.com/@osama.azhar963', '_blank')}
                >
                  <BookOpen className="h-4 w-4" />
                  Medium
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Core Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
              

              
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 dark:text-white">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 dark:text-white">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.location.href = `/project?id=${project.id}`}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => window.location.href = '/projects'} className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">Automation</Badge>
                  <Badge className="bg-blue-100 text-blue-700">New</Badge>
                </div>
                <CardTitle className="text-lg">The Evolution of Test Automation</CardTitle>
                <CardDescription>Exploring how test automation has transformed with AI and machine learning integration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Jan 15, 2024</span>
                  <span>8 min read</span>
                </div>
                <Button size="sm" className="w-full" onClick={() => window.location.href = `/blog-detail?id=1`}>
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">API Testing</Badge>
                </div>
                <CardTitle className="text-lg">API Testing Best Practices</CardTitle>
                <CardDescription>Essential strategies for effective API testing, including test design patterns and automation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Jan 10, 2024</span>
                  <span>12 min read</span>
                </div>
                <Button size="sm" className="w-full" onClick={() => window.location.href = `/blog-detail?id=2`}>
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">Security Testing</Badge>
                </div>
                <CardTitle className="text-lg">Security Testing in Agile</CardTitle>
                <CardDescription>How to integrate security testing early in the development lifecycle.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Jan 5, 2024</span>
                  <span>10 min read</span>
                </div>
                <Button size="sm" className="w-full" onClick={() => window.location.href = `/blog-detail?id=3`}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={() => window.location.href = '/blog'} className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Read All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Usama Azhar. Built with passion for quality.</p>
        </div>
      </footer>

      {/* Global Search */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}