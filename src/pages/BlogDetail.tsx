import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User, Heart, MessageSquare, Share2, BookOpen, Eye, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function BlogDetail() {
  const [blogId, setBlogId] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setBlogId(urlParams.get('id'));
  }, []);

  interface BlogArticle {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
    author: string;
    date: string;
    readTime: string;
    featured: boolean;
    likes: number;
    comments: number;
  }

  const blogData: {[key: string]: BlogArticle} = {
    "1": {
      id: 1,
      title: "The Evolution of Test Automation: From Scripts to AI-Powered Testing",
      excerpt: "Exploring how test automation has transformed over the years and what the future holds with AI and machine learning integration in quality assurance.",
      content: `Test automation has come a long way since the early days of record-and-playbook tools. Today, we're witnessing a paradigm shift towards intelligent testing solutions powered by artificial intelligence and machine learning.

## The Journey from Simple Scripts to Intelligence

The journey from simple script-based automation to AI-driven testing represents one of the most significant transformations in software quality assurance. This evolution has been driven by the increasing complexity of modern applications, the need for faster release cycles, and the demand for higher quality software.

### The Early Days: Record and Playback

In the early 2000s, test automation primarily consisted of record-and-playbook tools that captured user interactions and replayed them. While revolutionary at the time, these tools were:

- **Brittle** - Breaking with minor UI changes
- **Maintenance-heavy** - Requiring constant updates  
- **Limited in scope** - Unable to handle dynamic content

As applications became more dynamic and complex, the limitations of these approaches became apparent.

## The Framework Revolution

The introduction of frameworks like **Selenium** marked a significant step forward, providing more robust and flexible automation capabilities. These frameworks offered:

> "A more programmatic approach to test automation, giving testers the flexibility to create sophisticated test scenarios."

However, even with advanced frameworks, traditional automation still required significant manual effort in:

1. Test case creation
2. Script maintenance
3. Result analysis
4. Failure investigation

## The AI-Powered Present

Today's AI-powered testing tools are changing this landscape dramatically. Machine learning algorithms can now:

- **Analyze application behavior** and identify patterns
- **Generate test cases automatically** based on user interactions
- **Adapt to changes** in the application interface
- **Reduce maintenance burden** through self-healing capabilities

### Key Benefits of AI-Powered Testing

**Intelligent Test Generation**
- Automatic creation based on user behavior patterns
- Natural language processing for requirements-to-tests conversion

**Self-Healing Capabilities**
- Automatic script repair when UI elements change
- Reduced maintenance overhead

**Predictive Analytics**
- Risk assessment for optimal test coverage
- High-risk area identification

**Visual Intelligence**
- UI anomaly detection
- Cross-browser visual validation

## The Future Landscape

Looking forward, we can expect even more sophisticated AI integration in testing tools:

### Autonomous Testing Systems
Future testing platforms will require minimal human intervention, automatically:
- Discovering new application features
- Creating comprehensive test coverage
- Executing tests based on risk assessment
- Reporting actionable insights

### Advanced Risk Assessment
AI algorithms will provide:
- **Dynamic risk scoring** based on application changes
- **Optimal test coverage** recommendations
- **Intelligent test prioritization** for CI/CD pipelines

### Seamless Integration
The future holds promise for:
- **Continuous quality assurance** integrated with development workflows
- **Personalized testing strategies** based on application usage patterns
- **Real-time feedback loops** between development and testing

## The Human Element Remains Crucial

> "The most effective testing strategies will combine the efficiency of AI with the critical thinking and domain knowledge that only human testers can provide."

As we embrace this AI-driven future, it's important to remember that human expertise remains crucial in:

- **Strategic thinking** about test scenarios
- **Domain knowledge** application
- **Edge case identification**
- **User experience validation**

## Preparing for the Future

To stay relevant in this evolving landscape, QA professionals should:

1. **Embrace AI tools** while maintaining testing fundamentals
2. **Develop programming skills** for advanced automation
3. **Focus on strategy** rather than just execution
4. **Continuously learn** about emerging technologies

## Conclusion

The evolution of test automation continues, and those who adapt to these new technologies will be best positioned to deliver high-quality software in an increasingly fast-paced development environment.

The future of testing is not about replacing human testers with AI, but about augmenting human capabilities with intelligent tools that can handle routine tasks, identify patterns, and provide insights that humans might miss.

As we move forward, the combination of human creativity and AI efficiency will define the next generation of software quality assurance.`,
      category: "Automation",
      tags: ["AI", "Machine Learning", "Test Automation", "Future of Testing"],
      author: "Usama Azhar",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true,
      likes: 124,
      comments: 18
    },
    "2": {
      id: 2,
      title: "API Testing Best Practices: A Comprehensive Guide",
      excerpt: "A practical guide for ensuring API reliability, security, and performance in modern microservices architectures.",
      content: `APIs are the central nervous system of modern applications. Whether you're dealing with mobile apps, SaaS products, or large-scale enterprise systems, APIs connect services, exchange data, and power user experiences. But with great power comes great responsibility — ensuring APIs work reliably, securely, and efficiently is critical.

## Why API Testing Matters

A single broken API endpoint can cause system-wide failures. For instance, in 2020, a major ride-sharing app experienced a 4-hour outage because of a failed API deployment, costing thousands in revenue and user trust.

API testing validates:

- **Functionality**: Does it work as expected?
- **Performance**: Can it handle high loads?
- **Security**: Is data transmission protected?

## Best Practices for API Testing

### 1. Automate Functional Tests

Tools like Postman for quick tests and REST Assured or Karate for CI/CD pipelines speed up API validation.

### 2. Validate Security Early

Check for:

- Authentication flaws (e.g., missing tokens)
- Authorization leaks (e.g., users accessing others' data)
- Encryption gaps (e.g., HTTP vs. HTTPS)

### 3. Test for Performance Under Load

Use JMeter or k6 to simulate thousands of requests per second and analyze response times, latency, and error rates.

### 4. Use Contract Testing

Frameworks like Pact ensure API changes don't break consumer applications.

## Real-World Example

An e-commerce platform automated API regression tests for 150+ endpoints. Within 3 months:

- Integration issues dropped by 60%
- Mean time to detect defects improved by 35%
- CI/CD deployments became 50% faster

## Future of API Testing

**Service Virtualization**: Mock APIs before real services are ready.

**AI-Powered Monitoring**: Detect anomalies in API traffic patterns automatically.

## Conclusion

API testing ensures your application ecosystem remains stable, secure, and scalable — even as systems grow more complex.`,
      category: "API Testing",
      tags: ["API", "REST", "Automation", "Best Practices"],
      author: "Usama Azhar",
      date: "2024-01-10",
      readTime: "12 min read",
      featured: false,
      likes: 89,
      comments: 12
    },
    "3": {
      id: 3,
      title: "Security Testing in Agile Environments: Shifting Left",
      excerpt: "Exploring how security testing can be seamlessly integrated into the Agile development process, enabling teams to catch vulnerabilities early, reduce risks, and build user trust.",
      content: `Exploring how security testing can be seamlessly integrated into the Agile development process, enabling teams to catch vulnerabilities early, reduce risks, and build user trust.

## The Changing Face of Software Security

In the era of Agile and DevOps, rapid release cycles have become the norm. However, speed often comes at the cost of security. High-profile breaches like Equifax and SolarWinds have shown us what happens when security is treated as an afterthought.

That's why modern teams are adopting the "shift-left" approach — moving security testing earlier in the software development lifecycle to identify and fix vulnerabilities before they reach production.

## Why Shift Security Left?

Traditional security reviews happened late in the cycle, usually before a major release. This caused:

**Delays**: Critical vulnerabilities discovered too late to fix quickly.

**Higher Costs**: Fixing security flaws in production costs 5–10x more than during development.

**Risk Exposure**: Vulnerabilities could remain undetected for months.

By shifting left, teams integrate security from day one — during coding, unit testing, and CI/CD stages.

## Key Strategies for Agile Security Testing

### 1. Static Application Security Testing (SAST)

Analyze source code for vulnerabilities before running the application. Tools like SonarQube help automate code scanning directly in CI pipelines.

### 2. Dynamic Application Security Testing (DAST)

Simulate real-world attacks on a running application using tools like OWASP ZAP to identify runtime vulnerabilities.

### 3. Dependency Scanning

Third-party libraries often contain known vulnerabilities. Integrate tools like Snyk to automatically detect and fix them.

### 4. Security Unit Tests

Developers can write unit tests for authentication, authorization, and data validation — ensuring critical logic remains secure.

## Real-World Example

A fintech startup integrated SAST and DAST scans into every GitHub pull request using GitHub Actions.

**Results after 3 months:**

- 90% reduction in security issues before production.
- Faster release cycles with fewer last-minute vulnerabilities.
- Higher customer trust after passing independent security audits.

## The Role of DevSecOps

DevSecOps extends DevOps by embedding security throughout the pipeline:

- Automated security gates for every commit.
- Real-time threat intelligence integrations.
- Continuous compliance checks for regulations like GDPR or PCI DSS.

This ensures security isn't a one-time activity but a continuous process.

## Preparing Teams for Success

**Security Awareness Training**: Every developer should understand OWASP Top 10 vulnerabilities.

**Toolchain Integration**: Use CI/CD plugins for automated scanning and reporting.

**Cross-Functional Collaboration**: Security specialists, developers, and testers must work together from the start.

## Future Trends in Agile Security Testing

**AI-Powered Vulnerability Detection**: Faster, smarter threat identification.

**Zero Trust Architecture**: Continuous authentication and access validation.

**Security-as-Code**: Security configurations stored as code for version control and automation.

## Conclusion

Shifting security left transforms it from a roadblock into a business enabler. By adopting DevSecOps practices and integrating security into every sprint, Agile teams can deliver fast, secure, and reliable software without compromising on speed or quality.

The sooner we catch vulnerabilities, the cheaper and safer it is — making shift-left security testing a must-have for modern development.`,
      category: "Security Testing",
      tags: ["Security", "Agile", "Shift-Left", "DevSecOps"],
      author: "Usama Azhar",
      date: "2024-01-05",
      readTime: "10 min read",
      featured: true,
      likes: 156,
      comments: 23
    },
    "4": {
      id: 4,
      title: "Performance Testing Strategies for Modern Web Applications",
      excerpt: "Understanding different types of performance testing and how to implement effective performance testing strategies for web applications.",
      content: `Speed is no longer a luxury — it's a business requirement. Studies show that a 1-second delay in page load time can result in a 7% drop in conversions. Performance testing ensures applications handle real-world traffic without breaking.

## Why Performance Testing Is Critical

**User Expectations**: Modern users expect apps to load within 3 seconds.

**Business Impact**: Faster sites see higher engagement and sales.

**Scalability Needs**: Apps must survive traffic surges like Black Friday or product launches.

## Types of Performance Testing

**Load Testing**: Measures performance under expected traffic conditions.

**Stress Testing**: Pushes the system to its breaking point.

**Spike Testing**: Sudden bursts of traffic simulation.

**Endurance Testing**: Monitors performance over extended periods.

## Tools for Performance Testing

**JMeter**: Open-source and widely used.

**Gatling**: Developer-friendly with CI/CD integrations.

**k6**: Cloud-ready for large-scale testing.

## Real-World Example

A global streaming platform simulated 1M concurrent users before launch, fixing memory leaks and optimizing database queries. Result? Zero downtime on launch day.

## Future Trends

**Cloud-native Load Testing** to scale globally.

**AI-driven Performance Optimization** for predictive tuning.

## Conclusion

Performance testing ensures your application remains fast, stable, and user-friendly, even when traffic spikes unexpectedly.`,
      category: "Performance Testing",
      tags: ["Performance Testing", "Load Testing", "JMeter", "Web Applications"],
      author: "Usama Azhar",
      date: "2023-12-28",
      readTime: "15 min read",
      featured: false,
      likes: 92,
      comments: 15
    },
    "5": {
      id: 5,
      title: "Building Quality Culture in Development Teams",
      excerpt: "Strategies for fostering a quality-first mindset across development teams and creating collaborative testing environments.",
      content: `Quality is not the QA team's job alone — it's everyone's responsibility. A true quality culture ensures every team member, from developers to product managers, takes ownership of product reliability.

## Why Quality Culture Matters

Companies with a quality-first mindset release software faster, encounter fewer production issues, and have happier customers. It shifts focus from "just fixing bugs" to "building better products."

## Steps to Build Quality Culture

**Shift-Left Testing**: Developers write unit tests; QA focuses on strategy.

**Peer Code Reviews**: Catch defects before code hits QA.

**Blameless Post-Mortems**: Focus on learning, not finger-pointing.

**Celebrate Quality Wins**: Recognize teams for bug-free releases.

## Real-World Example

At Red Buffer, introducing daily standups and peer reviews reduced production defects by 30% in three sprints.

## Conclusion

A strong quality culture creates faster, more reliable releases and fosters collaboration across teams.`,
      category: "Quality Culture",
      tags: ["Quality Culture", "Team Collaboration", "Leadership", "Process Improvement"],
      author: "Usama Azhar",
      date: "2023-12-20",
      readTime: "7 min read",
      featured: false,
      likes: 78,
      comments: 9
    },
    "6": {
      id: 6,
      title: "Mobile Testing Challenges and Solutions in 2024",
      excerpt: "Navigating the complexities of mobile testing including device fragmentation, network conditions, and user experience validation.",
      content: `Mobile apps face unique challenges like device fragmentation, unstable networks, and frequent OS updates. Testing strategies must evolve to meet these complexities.

## Key Challenges

**Thousands of device-OS combinations**

**Battery consumption issues on older phones**

**Apps breaking after iOS/Android updates**

## Solutions

**Cloud Device Farms**: BrowserStack or Sauce Labs for real-device testing.

**Automated Regression Tests**: Appium and Detox for cross-platform coverage.

**Network Condition Testing**: Simulate 3G, 4G, and 5G environments.

## Real-World Example

A ride-hailing app automated smoke tests on 50+ device types, reducing production crashes by 50% post-release.

## Future Trends

**AI-generated test cases** for UI automation.

**5G performance testing** for ultra-low latency apps.

## Conclusion

Proactive mobile testing ensures apps remain reliable, fast, and user-friendly across devices and networks.`,
      category: "Mobile Testing",
      tags: ["Mobile Testing", "Device Testing", "User Experience", "Appium"],
      author: "Usama Azhar",
      date: "2023-12-15",
      readTime: "11 min read",
      featured: false,
      likes: 103,
      comments: 17
    },
    "7": {
      id: 7,
      title: "Test Data Management: Strategies for Complex Applications",
      excerpt: "Effective approaches to managing test data across environments while ensuring data privacy and test reliability.",
      content: `Reliable test data is the backbone of stable testing pipelines. Without it, even the best automation frameworks produce flaky results.

## Challenges in Test Data Management

**Stale data causing false positives**

**Privacy concerns with real customer data**

**Difficulty in maintaining consistency across environments**

## Best Practices

**Synthetic Data Generation**: GDPR-compliant fake data tools like Mockaroo.

**Automated Data Refresh**: Keep test databases aligned with production snapshots.

**Data Masking Pipelines**: Hide sensitive customer information in test environments.

## Real-World Example

A banking application automated test data provisioning with CI/CD, reducing test preparation time by 70%.

## Conclusion

Proper test data management ensures reliable test results and compliance with data regulations.`,
      category: "Test Management",
      tags: ["Test Data", "Data Management", "Privacy", "Test Environment"],
      author: "Usama Azhar",
      date: "2023-12-08",
      readTime: "9 min read",
      featured: false,
      likes: 67,
      comments: 11
    },
    "8": {
      id: 8,
      title: "The ROI of Quality Assurance: Measuring Testing Effectiveness",
      excerpt: "Exploring how QA teams can demonstrate their value by using metrics that align with business outcomes and drive better decision-making.",
      content: `Quality Assurance (QA) has moved beyond simple bug detection — it is now a critical investment in product success. Companies are constantly seeking ways to justify QA budgets, and ROI (Return on Investment) provides a clear business perspective. But how exactly do we measure QA's value? Let's break it down.

## Why QA ROI Matters

Traditionally, QA was viewed as a cost rather than a strategic asset. Leaders would often question:

"If the software works fine, why spend so much on testing?"

However, QA prevents costly post-release defects, improves user satisfaction, and enables faster, safer releases.

Consider this: fixing a bug in production can cost up to 10x more than fixing it during development. For large-scale systems, that cost multiplies quickly. Measuring QA ROI allows teams to showcase how testing impacts revenue, reliability, and reputation.

## Key Metrics for Measuring QA ROI

### 1. Defect Leakage Rate (DLR)

This metric answers: How many bugs escaped into production?

A lower DLR means your test coverage is effective.

Teams often aim for DLR < 5% in critical applications.

### 2. Test Coverage Percentage

This measures coverage across:

- Code (e.g., unit tests)
- Functional workflows
- End-to-end scenarios

### 3. Automation ROI

Automation efforts should save time in:

- Regression testing
- Repetitive manual workflows
- Cross-browser or cross-device tests

### 4. Mean Time to Detect (MTTD) & Resolve (MTTR)

Shorter MTTD and MTTR = faster feedback loops and quicker recovery from incidents.

## Real-World Example

A fintech company automated 70% of regression tests using Cypress and Playwright. As a result:

- Post-release defects dropped by 45%.
- Release cycles reduced from 3 weeks to 5 days.
- They saved $60K annually in testing costs.

These numbers made it easy for the leadership team to justify increasing QA investment for future projects.

## Presenting ROI to Stakeholders

Data is powerful only when it's visible. QA leads can:

- Use dashboards in Jira or TestRail to display defect trends, coverage, and automation ROI.
- Highlight business impact metrics, e.g., "20 fewer production bugs = 10% higher customer retention."
- Provide predictive insights on defect-prone areas using historical data.

## Future of QA ROI

The next wave of QA will use AI-powered analytics to predict:

- Which modules are most likely to fail
- How defect trends correlate with customer churn or revenue loss
- Where automation yields the highest ROI

## Conclusion

Measuring QA ROI transforms QA from a support function to a strategic enabler. It helps stakeholders understand that quality directly impacts customer satisfaction, brand reputation, and business growth — not just code correctness.`,
      category: "QA Metrics",
      tags: ["ROI", "QA Metrics", "Business Value", "Cost of Quality"],
      author: "Usama Azhar",
      date: "2023-12-01",
      readTime: "13 min read",
      featured: true,
      likes: 134,
      comments: 20
    },
    "9": {
      id: 9,
      title: "Continuous Testing in DevOps: Integration Strategies",
      excerpt: "Best practices for implementing continuous testing in DevOps pipelines and achieving faster feedback loops.",
      content: `Continuous Testing brings quality checks to every stage of DevOps pipelines — from code commit to production monitoring.

## Strategies for Integration

**Shift Left & Shift Right**: Test early and monitor after release.

**Parallel Test Execution**: Run tests across environments simultaneously.

**Containerization**: Docker ensures reproducible test environments.

## Real-World Example

A healthcare platform integrated Cypress tests into Jenkins pipelines, cutting feedback time from 3 hours to 20 minutes.

## Conclusion

Continuous testing ensures speed and quality coexist in modern DevOps workflows.`,
      category: "DevOps",
      tags: ["DevOps", "Continuous Testing", "CI/CD", "Automation"],
      author: "Usama Azhar",
      date: "2024-01-20",
      readTime: "14 min read",
      featured: false,
      likes: 98,
      comments: 16
    },
    "10": {
      id: 10,
      title: "Exploratory Testing: The Art of Software Investigation",
      excerpt: "Understanding the value of exploratory testing and how to structure unscripted testing sessions for maximum impact.",
      content: `Exploratory testing combines human intuition with real-time learning, uncovering issues automation might miss.

## Why Exploratory Testing Matters

**Finds usability issues and edge cases**

**Reveals unexpected user behaviors**

**Complements automated testing**

## Tips for Effective Exploratory Testing

**Use charters to guide test sessions.**

**Map findings visually using mind maps.**

**Pair manual exploration with quick automation scripts.**

## Conclusion

Exploratory testing brings human creativity into testing, finding defects automation tools overlook.`,
      category: "Manual Testing",
      tags: ["Exploratory Testing", "Manual Testing", "Test Design", "Investigation"],
      author: "Usama Azhar",
      date: "2024-01-18",
      readTime: "9 min read",
      featured: false,
      likes: 76,
      comments: 12
    },
    "11": {
      id: 11,
      title: "Accessibility Testing: Building Inclusive Software",
      excerpt: "Essential approaches to accessibility testing ensuring your software is usable by everyone, including users with disabilities.",
      content: `Accessibility ensures software works for everyone, including users with disabilities.

## Key Testing Areas

**Screen Readers**: NVDA, VoiceOver

**Keyboard Navigation**: Full functionality without a mouse

**Color Contrast & Font Size**: WCAG 2.1 compliance

## Real-World Example

A government portal implemented automated accessibility scans, improving compliance scores by 40% in two quarters.

## Conclusion

Accessibility testing makes software inclusive, compliant, and user-friendly for all audiences.`,
      category: "Accessibility",
      tags: ["Accessibility", "WCAG", "Inclusive Design", "User Experience"],
      author: "Usama Azhar",
      date: "2024-01-12",
      readTime: "11 min read",
      featured: true,
      likes: 145,
      comments: 25
    },
    "12": {
      id: 12,
      title: "Test Environment Management: Best Practices",
      excerpt: "Strategies for managing test environments effectively, including provisioning, maintenance, and data management.",
      content: `Stable environments prevent false failures and ensure consistent testing outcomes.

## Challenges

**Version drift across environments**

**Limited monitoring and alerting**

**Resource contention among teams**

## Best Practices

**Infrastructure as Code (IaC)**: Tools like Terraform for provisioning.

**Monitoring Tools**: Prometheus + Grafana dashboards.

**Version Control**: Track configurations in Git.

## Conclusion

Reliable environments mean fewer surprises, smoother releases, and accurate test results.`,
      category: "Test Management",
      tags: ["Test Environment", "Infrastructure", "Configuration Management", "Best Practices"],
      author: "Usama Azhar",
      date: "2024-01-08",
      readTime: "12 min read",
      featured: false,
      likes: 89,
      comments: 14
    }
  };

  const article = blogId ? blogData[blogId] : null;

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = article?.title || '';
    
    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        try {
          await navigator.clipboard.writeText(url);
          alert('Blog URL copied to clipboard!');
        } catch (err) {
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('Blog URL copied to clipboard!');
        }
        return;
    }
    
    window.open(shareUrl, '_blank');
  };

  const renderContent = (content: string) => {
    // First, handle code blocks before splitting by paragraphs
    const parts = [];
    let currentIndex = 0;
    
    // Find all code blocks
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let match;
    
    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add content before code block
      if (match.index > currentIndex) {
        parts.push({
          type: 'text',
          content: content.substring(currentIndex, match.index).trim()
        });
      }
      
      // Add code block
      parts.push({
        type: 'code',
        language: match[1] || '',
        content: match[2]
      });
      
      currentIndex = match.index + match[0].length;
    }
    
    // Add remaining content
    if (currentIndex < content.length) {
      parts.push({
        type: 'text',
        content: content.substring(currentIndex).trim()
      });
    }
    
    // Render all parts
    return parts.map((part, partIndex) => {
      if (part.type === 'code') {
        return (
          <div key={partIndex} className="my-6">
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
              <code className={`language-${part.language}`}>
                {part.content}
              </code>
            </pre>
          </div>
        );
      }
      
      // Handle text content
      return part.content
      .split('\n\n')
        .filter(paragraph => paragraph.trim() !== '')
      .map((paragraph, index) => {
          const key = `${partIndex}-${index}`;
          
        if (paragraph.startsWith('## ')) {
          return (
              <h2 key={key} className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 leading-tight">
              {paragraph.substring(3)}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
              <h3 key={key} className="text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4 leading-tight">
              {paragraph.substring(4)}
            </h3>
          );
        }
        if (paragraph.startsWith('> ')) {
          return (
              <blockquote key={key} className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300 text-lg bg-gray-50 dark:bg-gray-800 py-4 rounded-r-lg">
              {paragraph.substring(2)}
            </blockquote>
          );
        }
        if (paragraph.includes('**') && paragraph.includes('**')) {
          const processedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>');
          return (
              <p key={key} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6" dangerouslySetInnerHTML={{__html: processedText}} />
          );
        }
        if (paragraph.match(/^- /)) {
          const items = paragraph.split('\n').filter(item => item.startsWith('- '));
          return (
              <ul key={key} className="list-disc pl-6 mb-6 space-y-2">
              {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{
                    __html: item.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }} />
              ))}
            </ul>
          );
        }
        if (paragraph.match(/^\d+\./)) {
          const items = paragraph.split('\n').filter(item => item.match(/^\d+\./));
          return (
              <ol key={key} className="list-decimal pl-6 mb-6 space-y-2">
              {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{
                    __html: item.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
                  }} />
              ))}
            </ol>
          );
        }
        return (
            <p key={key} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            {paragraph}
          </p>
        );
      });
    }).flat();
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Usama Azhar
              </h1>
              <div className="flex gap-4 items-center">
                <Button variant="ghost" onClick={() => window.location.href = '/'}>
                  Home
                </Button>
                <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                  Blog
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog Article Not Found</h1>
            <Button onClick={() => window.location.href = '/blog'}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Usama Azhar
            </h1>
            <div className="flex gap-4 items-center">
              <Button variant="ghost" onClick={() => window.location.href = '/'}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => window.location.href = '/blog'}>
                Blog
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            onClick={() => window.location.href = '/blog'}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="outline" className="text-sm">{article.category}</Badge>
            {article.featured && (
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm">
                Featured
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-serif">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author and Meta Info */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                UA
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">{article.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Senior SQA Automation Engineer
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {article.readTime}
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Heart className="h-4 w-4" />
                {article.likes}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MessageSquare className="h-4 w-4" />
                {article.comments}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Eye className="h-4 w-4" />
                {Math.floor(Math.random() * 1000) + 500}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleShare('copy')}
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleShare('linkedin')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          {renderContent(article.content)}
        </div>

        {/* Tags */}
        <div className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              UA
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold dark:text-white mb-2">Usama Azhar</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Senior SQA Automation Engineer with 4+ years of experience in ensuring software quality 
                across web, mobile, and enterprise applications. Passionate about test automation, 
                CI/CD pipelines, and building robust QA processes that help teams deliver reliable software.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://www.linkedin.com/in/usama-azhar/', '_blank')}
                >
                  Follow on LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = '/blog'}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold dark:text-white mb-6">More from Usama Azhar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/blog-detail?id=2'}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  API Testing Best Practices: A Comprehensive Guide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Learn essential strategies for effective API testing, including test design patterns, data management, and automation techniques.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>12 min read</span>
                  <span>Jan 10, 2024</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/blog-detail?id=3'}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  Security Testing in Agile Environments: Shifting Left
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  How to integrate security testing early in the development lifecycle and build security-conscious quality assurance processes.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>10 min read</span>
                  <span>Jan 5, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  );
}