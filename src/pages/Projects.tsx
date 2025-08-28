import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Github, Calendar, Filter, Search, CheckCircle, Bug, Shield, Zap } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Blue Ocean Web Application QA",
      category: "Web Automation",
      description: "End-to-end QA automation for the Blue Ocean web application with CI/CD integration and regression testing.",
      detailedDescription: "Designed and implemented Cypress test suites integrated with CI/CD pipelines to automate regression and smoke tests, ensuring faster deployments and improved product stability.",
      technologies: ["Cypress", "JavaScript", "GitHub Actions", "Postman"],
      duration: "8 months",
      teamSize: "3 members",
      date: "2025",
      achievements: [
        "Reduced regression testing time by 40%",
        "Achieved 95% test coverage across all modules",
        "Streamlined CI/CD pipeline with automated test execution",
        "Improved release confidence with zero critical post-release bugs"
      ],
      challenges: [
        "Handling complex user workflows",
        "Integration testing with multiple backend services",
        "Cross-browser compatibility validations"
      ],
      githubUrl: "https://github.com/Usama963/BlueOceanAutomation",
      liveUrl: "https://blueocean.lantrotech.com"
    },
    {
      id: 2,
      name: "Napkin Database Certification Module",
      category: "Web & Database QA",
      description: "Comprehensive QA for employee certification workflows and scheduler modules in Napkin Database.",
      detailedDescription: "Performed functional, UI, and integration testing for employee certification features.",
      technologies: [ "Jira", "Postman", "Cypress"],
      duration: "6 months",
      teamSize: "3 members",
      date: "2024",
      achievements: [
        "Tracked and reported 100% of test cases",
        "Enhanced test reporting and defect tracking",
        "enhanced test coverage"
      ],
      challenges: [
        "Testing through the remote database access",
        "Testing under tight deadlines"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      name: "Crew App Mobile Automation Testing",
      category: "Mobile Testing",
      description: "Implemented robust testing for the Crew App on iOS and Android platforms.",
      detailedDescription: "Implemented mobile test automation using Detox and Jest to validate core functionalities including user onboarding, team collaboration, and offline syncing.",
      technologies: ["React Native", "Jira", "Postman"],
      duration: "6 months",
      teamSize: "3 members",
      date: "2024",
      achievements: [
        "Increased test coverage by 60%",
        "Reduced production issues by 35%",
        "Automated smoke tests for all mobile releases"
      ],
      challenges: [
        "Testing on multiple OS versions",
        "Simulating offline/online scenarios",
        "Complex mobile UI workflows"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      name: "LantroTech Corporate Website QA",
      category: "Web Testing",
      description: "Led QA efforts for LantroTech's corporate website redesign with focus on cross-browser testing and responsiveness.",
      detailedDescription: "Designed test cases, performed functional and UI testing, and ensured performance optimization across mobile and desktop platforms.",
      technologies: ["Cypress", "WordPress", "GitHub Actions", "Jira"],
      duration: "3 months",
      teamSize: "2 members",
      date: "2024",
      achievements: [
        "Delivered bug-free website launch",
        "Ensured 100% cross-browser compatibility",
        "Improved website load performance by 25%"
      ],
      challenges: [
        "Responsive UI testing across multiple devices",
        "Frequent design updates requiring retesting"
      ],
      githubUrl: "https://github.com/Usama963/LantroTechAutomation",
      liveUrl: "https://www.lantrotech.com/"
    },
    {
      id: 5,
      name: "ProCon Desktop & Mobile Application",
      category: "Desktop & Mobile QA",
      description: "Functional and regression testing for ProCon's desktop and mobile applications.",
      detailedDescription: "Created detailed test cases, managed QA documentation, and performed functional and regression testing across multiple platforms.",
      technologies: ["Selenium", "Jira", "Postman", "Microsoft 365"],
      duration: "7 months",
      teamSize: "3 members",
      date: "2024",
      achievements: [
        "Maintained 99% test pass rate across releases",
        "Reduced critical post-release defects by 20%",
        "Streamlined release note documentation"
      ],
      challenges: [
        "Coordinating testing across desktop and mobile versions",
        "Frequent feature updates requiring regression cycles"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 6,
      name: "Polio Eradication - GCSS Project",
      category: "Enterprise QA",
      description: "Release management and QA for a critical health project with multi-team collaboration.",
      detailedDescription: "Led QA efforts, managed release cycles, and ensured defect-free deployments through functional and regression testing.",
      technologies: ["Jira", "Postman", "Cypress","ClickUp","Postman"],
      duration: "18 months",
      teamSize: "8 members",
      date: "2022",
      achievements: [
        "Ensured timely delivery of multiple releases",
        "Zero critical bugs in production environment",
        "Coordinated testing efforts across multiple teams"
      ],
      challenges: [
        "Stakeholder alignment across distributed teams",
        "Tight release timelines with frequent feature changes"
      ],
      githubUrl: "",
      liveUrl: "https://www.endpolio.com.pk/"
    },
    {
      id: 7,
      name: "PES Portal",
      category: "Web QA",
      description: "End-to-end testing for PES Portal with Agile methodology practices.",
      detailedDescription: "Performed functional testing, regression testing, and managed project workflows in Jira and ClickUp.",
      technologies: ["Selenium", "Jira", "ClickUp", "Postman"],
      duration: "10 months",
      teamSize: "6 members",
      date: "2023",
      achievements: [
        "Enhanced release quality with 90% test coverage",
        "Reduced testing cycle time by 30%",
        "Implemented Agile-based QA workflows"
      ],
      challenges: [
        "Complex feature integrations",
        "Requirement changes mid-sprint"
      ],
      githubUrl: "#",
      liveUrl: "https://spill.premiumenvironmentalservices.com/?redirectAfterAuth=%2F"
    },
    {
      id: 8,
      name: "AI-Photos Project",
      category: "Web Testing",
      description: "QA for AI-based photo processing application focusing on API and functional testing.",
      detailedDescription: "Conducted weekly alignment meetings, managed risk mitigation plans, and performed end-to-end functional testing.",
      technologies: ["Postman","Jira","Cypress","ClickUp"],
      duration: "6 months",
      teamSize: "3 members",
      date: "2021",
      achievements: [
        "Improved API response validation efficiency",
        "Mitigated critical risks before release",
        "Automated core workflow test cases"
      ],
      challenges: [
        "Frequent API changes affecting test scripts",
        "Handling large-scale image processing scenarios"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 9,
      name: "Portage - SigmaSight Project",
      category: "Enterprise QA",
      description: "Requirement gathering, stakeholder communication, and QA for SigmaSight platform.",
      detailedDescription: "Worked closely with stakeholders to define requirements, led QA strategy implementation, and mentored QA team members.",
      technologies: ["Jira", "Selenium", "Postman", "Microsoft 365"],
      duration: "6 months",
      teamSize: "4 members",
      date: "2023",
      achievements: [
        "Established QA best practices for the project",
        "Streamlined requirement-to-test-case mapping",
        "Mentored junior QA engineers"
      ],
      challenges: [
        "Requirement changes during development",
        "Cross-functional collaboration challenges"
      ],
      githubUrl: "#",
      liveUrl: "https://www.sigmasight.net/auth/login/?returnUrl=/"
    }
  ];

  const categories = ["all", "Web Testing", "Mobile Testing", "Automation", "Healthcare", "IoT", "Cloud"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "all" || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Usama Azhar
            </h1>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => window.location.href = '/'}>
                Home
              </Button>
              <Button variant="ghost" className="bg-blue-100">
                Projects
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                Blog
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive showcase of my quality assurance projects across various domains and technologies.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-gray-600 mb-6">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <div className="text-sm text-gray-500">
                      Duration: {project.duration} • Team: {project.teamSize}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex items-center gap-1"
                        onClick={() => window.open(project.githubUrl !== '#' ? project.githubUrl : '#', '_blank')}
                        disabled={project.githubUrl === '#' || project.githubUrl === ''}
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => window.location.href = `/project?id=${project.id}`}
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No projects found matching your criteria.</div>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}