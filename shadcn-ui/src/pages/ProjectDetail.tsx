import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import GlobalSearch from "../components/GlobalSearch";

export default function ProjectDetail() {
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setProjectId(urlParams.get('id'));
  }, []);

  interface ProjectData {
    id: number;
    name: string;
    category: string;
    description: string;
    detailedDescription: string;
    technologies: string[];
    duration: string;
    teamSize: string;
    date: string;
    achievements: string[];
    challenges: string[];
    methodology: string[];
    results: string[];
  }

  const projectData: {[key: string]: ProjectData} = {
    "1": {
      id: 1,
      name: "Blue Ocean Web Application QA",
      category: "Web Automation",
      description: "Led end-to-end QA automation for the Blue Ocean web application with comprehensive CI/CD integration.",
      detailedDescription: "Led comprehensive end-to-end QA automation for the Blue Ocean web application at Lantro Tech. This project involved building robust Cypress automation suites integrated with CI/CD pipelines to ensure rapid, reliable deployments while maintaining high quality standards.",
      technologies: ["Cypress", "JavaScript", "GitHub Actions", "Postman", "Node.js", "Jest"],
      duration: "8 months",
      teamSize: "3 members",
      date: "2025",
      achievements: [
        "Reduced regression testing time by 40%",
        "Achieved 95% test coverage across all modules",
        "Streamlined CI/CD pipeline with automated test execution",
        "Improved release confidence with zero critical post-release bugs",
        "Created comprehensive test documentation and reporting systems"
      ],
      challenges: [
        "Handling complex user workflows",
        "Integration testing with multiple backend services",
        "Cross-browser compatibility validations",
        "Managing test data and environment configurations",
        "Coordinating with development teams for continuous integration"
      ],
      methodology: [
        "Implemented Cypress test automation framework from ground up",
        "Integrated automated tests with GitHub Actions CI/CD pipeline",
        "Created comprehensive test suites covering critical user journeys",
        "Established automated regression and smoke testing procedures",
        "Implemented test reporting and monitoring for quality metrics"
      ],
      results: [
        "40% reduction in regression testing time through automation",
        "Zero critical production bugs achieved post-implementation",
        "95% test coverage across all application modules",
        "Streamlined release process with automated quality gates"
      ]
    },
    "2": {
      id: 2,
      name: "Napkin Database Certification Module",
      category: "Web & Database QA",
      description: "Comprehensive QA for employee certification workflows and scheduler modules in Napkin Database.",
      detailedDescription: "Led comprehensive QA efforts for the Napkin Database employee certification module, focusing on functional, UI, and integration testing. This project involved testing complex certification workflows, scheduler modules, and database interactions to ensure data integrity and user experience quality.",
      technologies: ["Jira", "Postman", "Cypress", "SQL", "Database Testing", "Test Management"],
      duration: "6 months",
      teamSize: "3 members",
      date: "2024",
      achievements: [
        "Tracked and reported 100% of test cases",
        "Enhanced test reporting and defect tracking",
        "Enhanced test coverage across certification workflows",
        "Improved database integrity validation processes",
        "Streamlined certification approval workflows"
      ],
      challenges: [
        "Testing through remote database access",
        "Testing under tight deadlines",
        "Complex certification workflow validations",
        "Database performance testing with large datasets",
        "Integration testing across multiple system components"
      ],
      methodology: [
        "Comprehensive functional testing of certification workflows",
        "Database integration testing using SQL queries and validations",
        "API testing using Postman for backend service validation",
        "UI testing with Cypress for user interface functionality",
        "Systematic defect tracking and reporting using Jira"
      ],
      results: [
        "100% test case execution and tracking achieved",
        "Enhanced defect detection and resolution efficiency",
        "Improved certification workflow reliability",
        "Successful validation of database integrity and performance"
      ]
    },
    "3": {
      id: 3,
      name: "Crew App Mobile Automation Testing",
      category: "Mobile Testing",
      description: "Implemented robust testing for the Crew App on iOS and Android platforms.",
      detailedDescription: "Led comprehensive mobile automation testing for the Crew App, focusing on iOS and Android platform compatibility. Implemented mobile test automation using React Native testing frameworks to validate core functionalities including user onboarding, team collaboration, and offline syncing capabilities.",
      technologies: ["React Native", "Jira", "Postman", "Mobile Testing", "iOS", "Android"],
      duration: "6 months",
      teamSize: "3 members",
      date: "2024",
      achievements: [
        "Increased test coverage by 60%",
        "Reduced production issues by 35%",
        "Automated smoke tests for all mobile releases",
        "Ensured cross-platform compatibility and consistent user experience",
        "Implemented comprehensive mobile testing framework"
      ],
      challenges: [
        "Testing on multiple OS versions",
        "Simulating offline/online scenarios",
        "Complex mobile UI workflows",
        "Device-specific behavior and performance variations",
        "Managing test data and app state across different scenarios"
      ],
      methodology: [
        "Implemented React Native testing framework for mobile automation",
        "Created comprehensive test suites for user onboarding workflows",
        "Established cross-platform testing procedures for iOS and Android",
        "Developed offline/online scenario testing approaches",
        "Integrated mobile testing with continuous integration workflows"
      ],
      results: [
        "60% increase in test coverage across both mobile platforms",
        "35% reduction in production issues through comprehensive testing",
        "Successful automation of smoke tests for faster releases",
        "Improved app quality with reliable mobile testing framework"
      ]
    },
    "4": {
      id: 4,
      name: "LantroTech Corporate Website QA",
      category: "Web Testing",
      description: "Led QA efforts for LantroTech's corporate website redesign with focus on cross-browser testing and responsiveness.",
      detailedDescription: "Led comprehensive QA efforts for LantroTech's corporate website redesign project. This involved designing detailed test cases, performing functional and UI testing, and ensuring performance optimization across multiple browsers and devices. The project focused on delivering a responsive, high-performance website with excellent user experience.",
      technologies: ["Cypress", "WordPress", "GitHub Actions", "Jira", "Performance Testing", "Cross-browser Testing"],
      duration: "3 months",
      teamSize: "2 members",
      date: "2024",
      achievements: [
        "Delivered bug-free website launch",
        "Ensured 100% cross-browser compatibility",
        "Improved website load performance by 25%",
        "Achieved responsive design validation across all devices",
        "Implemented comprehensive performance monitoring"
      ],
      challenges: [
        "Responsive UI testing across multiple devices",
        "Frequent design updates requiring retesting",
        "Cross-browser compatibility validation",
        "Performance optimization testing",
        "WordPress integration testing with custom themes"
      ],
      methodology: [
        "Comprehensive cross-browser testing using Cypress automation",
        "Responsive design testing across multiple device configurations",
        "Performance testing and optimization validation",
        "WordPress functionality and integration testing",
        "Continuous integration testing with GitHub Actions"
      ],
      results: [
        "Successful bug-free website launch with zero critical issues",
        "100% cross-browser compatibility achieved across major browsers",
        "25% improvement in website load performance",
        "Excellent responsive design implementation across all devices"
      ]
    },
    "5": {
      id: 5,
      name: "ProCon Desktop & Mobile Application",
      category: "Desktop & Mobile QA",
      description: "Functional and regression testing for ProCon's desktop and mobile applications.",
      detailedDescription: "Led comprehensive QA efforts for ProCon application, managing both Desktop and Mobile versions. This project involved creating detailed test cases, managing QA documentation, and performing functional and regression testing across multiple platforms to ensure consistent user experience and application reliability.",
      technologies: ["Selenium", "Jira", "Postman", "Microsoft 365", "Functional Testing", "Regression Testing"],
      duration: "7 months",
      teamSize: "3 members",
      date: "2024",
      achievements: [
        "Maintained 99% test pass rate across releases",
        "Reduced critical post-release defects by 20%",
        "Streamlined release note documentation",
        "Ensured seamless cross-platform functionality",
        "Established robust QA processes and documentation"
      ],
      challenges: [
        "Coordinating testing across desktop and mobile versions",
        "Frequent feature updates requiring regression cycles",
        "Complex application features requiring thorough functional testing",
        "Managing comprehensive test documentation and release processes",
        "Ensuring consistent user experience across both platforms"
      ],
      methodology: [
        "Comprehensive test case design covering all functional areas",
        "Selenium automation for desktop application testing",
        "Systematic regression testing approach for both platforms",
        "Microsoft 365 integration for documentation and workflow management",
        "Structured release management with detailed testing reports"
      ],
      results: [
        "99% test pass rate maintained across all releases",
        "20% reduction in critical post-release defects",
        "Successful delivery of both Desktop and Mobile versions",
        "Well-documented QA processes and testing procedures"
      ]
    },
    "6": {
      id: 6,
      name: "Polio Eradication - GCSS Project",
      category: "Enterprise QA",
      description: "Release management and QA for a critical health project with multi-team collaboration.",
      detailedDescription: "Led QA efforts for the Polio Eradication GCSS Project, a critical health initiative requiring meticulous release management and quality assurance. This enterprise-level project involved coordinating with multiple teams, managing complex release cycles, and ensuring defect-free deployments through comprehensive functional and regression testing.",
      technologies: ["Jira", "Postman", "Cypress", "ClickUp", "Enterprise Testing", "Release Management"],
      duration: "18 months",
      teamSize: "8 members",
      date: "2022",
      achievements: [
        "Ensured timely delivery of multiple releases",
        "Zero critical bugs in production environment",
        "Coordinated testing efforts across multiple teams",
        "Established enterprise-level QA best practices",
        "Successfully managed complex health data validation"
      ],
      challenges: [
        "Stakeholder alignment across distributed teams",
        "Tight release timelines with frequent feature changes",
        "Complex health data validation requirements",
        "Multi-team coordination and communication",
        "Critical system reliability requirements for health applications"
      ],
      methodology: [
        "Enterprise-level release management and coordination",
        "Comprehensive functional testing of health data workflows",
        "Multi-team collaboration using Jira and ClickUp",
        "API testing using Postman for backend service validation",
        "Systematic regression testing across all system components"
      ],
      results: [
        "Zero critical bugs achieved in production environment",
        "Successful timely delivery of all project releases",
        "Effective coordination across 8-member distributed team",
        "Established sustainable QA processes for ongoing health initiatives"
      ]
    },
    "7": {
      id: 7,
      name: "PES Portal",
      category: "Web QA",
      description: "End-to-end testing for PES Portal with Agile methodology practices.",
      detailedDescription: "Led comprehensive end-to-end testing for the PES Portal project, implementing Agile methodology practices throughout the QA process. This project involved performing functional testing, regression testing, and managing project workflows using Jira and ClickUp while ensuring adherence to Agile principles and sprint-based delivery cycles.",
      technologies: ["Selenium", "Jira", "ClickUp", "Postman", "Agile Testing", "Web Automation"],
      duration: "10 months",
      teamSize: "6 members",
      date: "2023",
      achievements: [
        "Enhanced release quality with 90% test coverage",
        "Reduced testing cycle time by 30%",
        "Implemented Agile-based QA workflows",
        "Established efficient sprint-based testing cycles",
        "Improved team collaboration and communication"
      ],
      challenges: [
        "Complex feature integrations",
        "Requirement changes mid-sprint",
        "Agile sprint timeline management",
        "Cross-functional team coordination",
        "Balancing thorough testing with sprint deadlines"
      ],
      methodology: [
        "Agile-based testing approach with sprint planning and execution",
        "Selenium automation for comprehensive web application testing",
        "Continuous integration testing within sprint cycles",
        "Collaborative workflow management using Jira and ClickUp",
        "API testing using Postman for backend functionality validation"
      ],
      results: [
        "90% test coverage achieved with enhanced release quality",
        "30% reduction in testing cycle time through process optimization",
        "Successful implementation of Agile QA workflows",
        "Improved sprint delivery consistency and quality"
      ]
    },
    "8": {
      id: 8,
      name: "AI-Photos Project",
      category: "Web Testing",
      description: "QA for AI-based photo processing application focusing on API and functional testing.",
      detailedDescription: "Led QA efforts for an innovative AI-based photo processing application, focusing on API testing and functional validation. This project involved conducting weekly alignment meetings, managing risk mitigation plans, and performing end-to-end functional testing to ensure the AI algorithms and photo processing workflows functioned correctly.",
      technologies: ["Postman", "Jira", "Cypress", "ClickUp", "API Testing", "AI Testing"],
      duration: "6 months",
      teamSize: "3 members",
      date: "2021",
      achievements: [
        "Improved API response validation efficiency",
        "Mitigated critical risks before release",
        "Automated core workflow test cases",
        "Validated AI photo processing accuracy",
        "Established comprehensive API testing framework"
      ],
      challenges: [
        "Frequent API changes affecting test scripts",
        "Handling large-scale image processing scenarios",
        "AI algorithm validation and accuracy testing",
        "Performance testing with high-volume image processing",
        "Managing test data for various image formats and sizes"
      ],
      methodology: [
        "Comprehensive API testing using Postman for all endpoints",
        "Automated workflow testing using Cypress for user interactions",
        "AI algorithm validation through systematic test case execution",
        "Risk mitigation planning and weekly alignment meetings",
        "Performance testing for large-scale image processing scenarios"
      ],
      results: [
        "Significantly improved API response validation efficiency",
        "Successful mitigation of critical risks before production release",
        "Comprehensive automation of core workflow test cases",
        "Validated AI photo processing accuracy and performance"
      ]
    },
    "9": {
      id: 9,
      name: "Portage - SigmaSight Project",
      category: "Enterprise QA",
      description: "Requirement gathering, stakeholder communication, and QA for SigmaSight platform.",
      detailedDescription: "Led comprehensive QA efforts for the Portage SigmaSight Project, focusing on requirement gathering, stakeholder communication, and quality assurance implementation. This enterprise project involved working closely with stakeholders to define requirements, implementing QA strategy, and mentoring QA team members while ensuring high-quality deliverables.",
      technologies: ["Jira", "Selenium", "Postman", "Microsoft 365", "Enterprise QA", "Stakeholder Management"],
      duration: "6 months",
      teamSize: "4 members",
      date: "2023",
      achievements: [
        "Established QA best practices for the project",
        "Streamlined requirement-to-test-case mapping",
        "Mentored junior QA engineers",
        "Improved stakeholder communication and alignment",
        "Successfully delivered enterprise-level quality standards"
      ],
      challenges: [
        "Requirement changes during development",
        "Cross-functional collaboration challenges",
        "Complex enterprise system integration testing",
        "Stakeholder alignment across different departments",
        "Managing QA team development and mentoring"
      ],
      methodology: [
        "Systematic requirement gathering and documentation",
        "Comprehensive QA strategy implementation",
        "Enterprise-level testing using Selenium automation",
        "API validation using Postman for system integrations",
        "Team mentoring and knowledge transfer sessions"
      ],
      results: [
        "Successfully established sustainable QA best practices",
        "Efficient requirement-to-test-case mapping process",
        "Improved team capabilities through effective mentoring",
        "Enhanced stakeholder satisfaction and project alignment"
      ]
    }
  };

  const project = projectId ? projectData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Usama Azhar
              </h1>
              <div className="flex gap-4 items-center">
                <Button variant="ghost" onClick={() => window.location.href = '/'}>
                  Home
                </Button>
                <Button variant="ghost" onClick={() => window.location.href = '/projects'}>
                  Projects
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
            <Button onClick={() => window.location.href = '/projects'}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
              <Button variant="ghost" onClick={() => window.location.href = '/'}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = '/projects'}>
                Projects
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => window.location.href = '/projects'}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-8">
          {/* Project Image */}
          <div className="mb-6">
            <img 
              src={`https://images.unsplash.com/photo-${project.id === 1 ? '1581091226033-2bd02316f044' : project.id === 2 ? '1460925895917-afdab827c52f' : '1563013544-824ae1b704d3'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80`}
              alt={project.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline">{project.category}</Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  {project.date}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  {project.teamSize}
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Challenges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Challenges Faced
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  Methodology & Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.methodology.map((method: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Duration</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Team Size</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.teamSize}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Year</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => window.location.href = '/projects'}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = '/#contact'}>
            Discuss This Project
          </Button>
        </div>
      </div>

      {/* Global Search */}
      <GlobalSearch isOpen={isGlobalSearchOpen} onClose={() => setIsGlobalSearchOpen(false)} />
    </div>
  );
}