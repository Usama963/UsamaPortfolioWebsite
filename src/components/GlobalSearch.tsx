import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, X, Calendar, ExternalLink, BookOpen } from "lucide-react";

interface SearchResult {
  id: number;
  title: string;
  description: string;
  type: 'project' | 'blog';
  category: string;
  tags?: string[];
  date?: string;
  url: string;
}

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data - in a real app, this would come from your data source
  const searchData: SearchResult[] = [
    // Projects
    {
      id: 1,
      title: "E-commerce Platform Testing",
      description: "Comprehensive testing of a multi-vendor e-commerce platform with payment integration, inventory management, and user authentication.",
      type: "project",
      category: "Web Testing",
      tags: ["Selenium", "TestNG", "Maven", "Jenkins", "SQL"],
      url: "/project?id=1"
    },
    {
      id: 2,
      title: "Mobile Banking App QA",
      description: "End-to-end testing of a mobile banking application focusing on security, performance, and user experience.",
      type: "project",
      category: "Mobile Testing",
      tags: ["Appium", "Charles Proxy", "OWASP ZAP", "JMeter"],
      url: "/project?id=2"
    },
    {
      id: 3,
      title: "API Testing Framework",
      description: "Developed a comprehensive API testing framework for microservices architecture with automated reporting.",
      type: "project",
      category: "Automation",
      tags: ["REST Assured", "Python", "Pytest", "Allure", "Docker"],
      url: "/project?id=3"
    },
    // Blog posts
    {
      id: 101,
      title: "The Evolution of Test Automation: From Scripts to AI-Powered Testing",
      description: "Exploring how test automation has transformed over the years and what the future holds with AI and machine learning integration.",
      type: "blog",
      category: "Automation",
      tags: ["Automation", "AI", "Machine Learning", "Future of Testing"],
      date: "2024-01-15",
      url: "/blog-detail?id=1"
    },
    {
      id: 102,
      title: "API Testing Best Practices: A Comprehensive Guide",
      description: "Learn essential strategies for effective API testing, including test design patterns, data management, and automation techniques.",
      type: "blog",
      category: "API Testing",
      tags: ["API Testing", "REST", "GraphQL", "Best Practices"],
      date: "2024-01-10",
      url: "/blog-detail?id=2"
    },
    {
      id: 103,
      title: "Security Testing in Agile Environments: Shifting Left",
      description: "How to integrate security testing early in the development lifecycle and build security-conscious quality assurance processes.",
      type: "blog",
      category: "Security Testing",
      tags: ["Security", "Shift-Left", "Agile", "DevSecOps"],
      date: "2024-01-05",
      url: "/blog-detail?id=3"
    }
  ];

  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const filtered = searchData.filter(item => {
        const searchLower = searchTerm.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.category.toLowerCase().includes(searchLower) ||
          item.tags?.some(tag => tag.toLowerCase().includes(searchLower))
        );
      });
      
      setResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b dark:border-slate-700">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search projects, articles, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1 h-8 w-8 p-0"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 max-h-96 overflow-y-auto">
          {searchTerm.length < 2 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Start typing to search across projects and articles...</p>
            </div>
          ) : isSearching ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p>Searching...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <p>No results found for "{searchTerm}"</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </div>
              {results.map((result) => (
                <Card 
                  key={`${result.type}-${result.id}`} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleResultClick(result.url)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant={result.type === 'project' ? 'default' : 'secondary'}>
                          {result.type === 'project' ? 'Project' : 'Article'}
                        </Badge>
                        <Badge variant="outline">{result.category}</Badge>
                      </div>
                      {result.type === 'project' ? (
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <CardTitle className="text-lg">{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 line-clamp-2">
                      {result.description}
                    </CardDescription>
                    {result.tags && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {result.tags.slice(0, 4).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {result.tags.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{result.tags.length - 4} more
                          </Badge>
                        )}
                      </div>
                    )}
                    {result.date && (
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {new Date(result.date).toLocaleDateString()}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between">
            <span>Press <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">Esc</kbd> to close</span>
            <span>{results.length > 0 && `${results.length} result${results.length !== 1 ? 's' : ''}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}