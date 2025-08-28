import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Search, Filter, BookOpen, TrendingUp, Heart, MessageSquare, Share2 } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Test Automation: From Scripts to AI-Powered Testing",
      excerpt: "Exploring how test automation has transformed over the years and what the future holds with AI and machine learning integration in quality assurance.",
      content: "Test automation has come a long way since the early days of record-and-playbook tools. Today, we're witnessing a paradigm shift towards intelligent testing solutions...",
      category: "Automation",
      date: "2024-01-15",
      readTime: "8 min read",
      author: "SQA Engineer",
      tags: ["Automation", "AI", "Machine Learning", "Future of Testing"],
      likes: 124,
      comments: 18,
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "API Testing Best Practices: A Comprehensive Guide",
      excerpt: "Learn essential strategies for effective API testing, including test design patterns, data management, and automation techniques.",
      content: "API testing forms the backbone of modern application testing strategies. With microservices architecture becoming prevalent...",
      category: "API Testing",
      date: "2024-01-10",
      readTime: "12 min read",
      author: "SQA Engineer",
      tags: ["API Testing", "REST", "GraphQL", "Best Practices"],
      likes: 89,
      comments: 12,
      featured: false
    },
    {
      id: 3,
      title: "Security Testing in Agile Environments: Shifting Left",
      excerpt: "How to integrate security testing early in the development lifecycle and build security-conscious quality assurance processes.",
      content: "Security can no longer be an afterthought in software development. The shift-left approach to security testing...",
      category: "Security Testing",
      date: "2024-01-05",
      readTime: "10 min read",
      author: "SQA Engineer",
      tags: ["Security", "Shift-Left", "Agile", "DevSecOps"],
      likes: 156,
      comments: 23,
      featured: true
    },
    {
      id: 4,
      title: "Performance Testing Strategies for Modern Web Applications",
      excerpt: "Understanding different types of performance testing and how to implement effective performance testing strategies for web applications.",
      content: "Performance testing is crucial for ensuring applications can handle expected user loads and perform optimally under stress...",
      category: "Performance Testing",
      date: "2023-12-28",
      readTime: "15 min read",
      author: "SQA Engineer",
      tags: ["Performance Testing", "Load Testing", "JMeter", "Web Applications"],
      likes: 92,
      comments: 15,
      featured: false
    },
    {
      id: 5,
      title: "Building Quality Culture in Development Teams",
      excerpt: "Strategies for fostering a quality-first mindset across development teams and creating collaborative testing environments.",
      content: "Quality is everyone's responsibility, not just the QA team's. Building a quality culture requires intentional effort...",
      category: "Quality Culture",
      date: "2023-12-20",
      readTime: "7 min read",
      author: "SQA Engineer",
      tags: ["Quality Culture", "Team Collaboration", "Leadership", "Process Improvement"],
      likes: 78,
      comments: 9,
      featured: false
    },
    {
      id: 6,
      title: "Mobile Testing Challenges and Solutions in 2024",
      excerpt: "Navigating the complexities of mobile testing including device fragmentation, network conditions, and user experience validation.",
      content: "Mobile testing presents unique challenges that web testing doesn't face. From device fragmentation to varying network conditions...",
      category: "Mobile Testing",
      date: "2023-12-15",
      readTime: "11 min read",
      author: "SQA Engineer",
      tags: ["Mobile Testing", "Device Testing", "User Experience", "Appium"],
      likes: 103,
      comments: 17,
      featured: false
    },
    {
      id: 7,
      title: "Test Data Management: Strategies for Complex Applications",
      excerpt: "Effective approaches to managing test data across environments while ensuring data privacy and test reliability.",
      content: "Test data management is often overlooked but is crucial for reliable and maintainable test automation...",
      category: "Test Management",
      date: "2023-12-08",
      readTime: "9 min read",
      author: "SQA Engineer",
      tags: ["Test Data", "Data Management", "Privacy", "Test Environment"],
      likes: 67,
      comments: 11,
      featured: false
    },
    {
      id: 8,
      title: "The ROI of Quality Assurance: Measuring Testing Effectiveness",
      excerpt: "How to demonstrate the value of QA activities and measure the return on investment of quality assurance initiatives.",
      content: "Demonstrating the ROI of QA activities is essential for securing resources and support from stakeholders...",
      category: "QA Metrics",
      date: "2023-12-01",
      readTime: "13 min read",
      author: "SQA Engineer",
      tags: ["ROI", "QA Metrics", "Business Value", "Cost of Quality"],
      likes: 134,
      comments: 20,
      featured: true
    },
    {
      id: 9,
      title: "Continuous Testing in DevOps: Integration Strategies",
      excerpt: "Best practices for implementing continuous testing in DevOps pipelines and achieving faster feedback loops.",
      content: "Continuous testing is a cornerstone of successful DevOps implementations, enabling teams to deliver quality software at speed...",
      category: "DevOps",
      date: "2024-01-20",
      readTime: "14 min read",
      author: "SQA Engineer",
      tags: ["DevOps", "Continuous Testing", "CI/CD", "Automation"],
      likes: 98,
      comments: 16,
      featured: false
    },
    {
      id: 10,
      title: "Exploratory Testing: The Art of Software Investigation",
      excerpt: "Understanding the value of exploratory testing and how to structure unscripted testing sessions for maximum impact.",
      content: "Exploratory testing combines learning, test design, and test execution in a dynamic, investigative approach...",
      category: "Manual Testing",
      date: "2024-01-18",
      readTime: "9 min read",
      author: "SQA Engineer",
      tags: ["Exploratory Testing", "Manual Testing", "Test Design", "Investigation"],
      likes: 76,
      comments: 12,
      featured: false
    },
    {
      id: 11,
      title: "Accessibility Testing: Building Inclusive Software",
      excerpt: "Essential approaches to accessibility testing ensuring your software is usable by everyone, including users with disabilities.",
      content: "Accessibility testing ensures that software applications can be used by people with various disabilities...",
      category: "Accessibility",
      date: "2024-01-12",
      readTime: "11 min read",
      author: "SQA Engineer",
      tags: ["Accessibility", "WCAG", "Inclusive Design", "User Experience"],
      likes: 145,
      comments: 25,
      featured: true
    },
    {
      id: 12,
      title: "Test Environment Management: Best Practices",
      excerpt: "Strategies for managing test environments effectively, including provisioning, maintenance, and data management.",
      content: "Effective test environment management is crucial for reliable and consistent testing outcomes...",
      category: "Test Management",
      date: "2024-01-08",
      readTime: "12 min read",
      author: "SQA Engineer",
      tags: ["Test Environment", "Infrastructure", "Configuration Management", "Best Practices"],
      likes: 89,
      comments: 14,
      featured: false
    }
  ];

  const categories = ["all", "Automation", "API Testing", "Security Testing", "Performance Testing", "Quality Culture", "Mobile Testing", "Test Management", "QA Metrics", "DevOps", "Manual Testing", "Accessibility"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "all" || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleShare = async (blogId: number, title: string) => {
    const url = `${window.location.origin}/blog-detail?id=${blogId}`;
    
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
  };

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
              <Button variant="ghost" className="bg-blue-100 dark:bg-blue-900">
                Blog
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quality Assurance Insights</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Sharing knowledge, best practices, and insights from the world of software quality assurance and testing.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">Featured</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {post.comments}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.location.href = `/blog-detail?id=${post.id}`}
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles, topics, or tags..."
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
          
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-500" />
            All Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{post.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {post.comments}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex items-center gap-1"
                        onClick={() => handleShare(post.id, post.title)}
                        title="Share this blog"
                      >
                        <Share2 className="h-3 w-3" />
                        Share
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex items-center gap-1"
                        onClick={() => window.location.href = `/blog-detail?id=${post.id}`}
                      >
                        <BookOpen className="h-3 w-3" />
                        Read Article
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 text-lg">No articles found matching your criteria.</div>
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