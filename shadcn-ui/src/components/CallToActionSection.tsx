import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, TrendingUp, Shield, Zap } from "lucide-react";

export default function CallToActionSection() {
  const benefits = [
    {
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      text: "Reduce production bugs by up to 80%"
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      text: "Faster time-to-market with automated testing"
    },
    {
      icon: <Shield className="h-5 w-5 text-purple-500" />,
      text: "Enhanced security and compliance"
    },
    {
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      text: "Improved team productivity and confidence"
    }
  ];

  const services = [
    "Test Strategy & Planning",
    "Automated Testing Implementation",
    "API Testing & Validation",
    "Performance Testing",
    "Security Testing",
    "Quality Process Improvement",
    "Team Training & Mentoring",
    "CI/CD Integration"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Improve Your Software Quality?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to build robust, reliable software that your users will love and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Me?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {benefit.icon}
                    <span className="text-gray-200">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Services Offered</h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 flex items-center gap-2"
              onClick={() => window.open('https://calendly.com/osama-azhar963', '_blank')}
            >
              <Clock className="h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              ✓ 100% Success Rate
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              ✓ 4+ Years Experience
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              ✓ Multiple Certifications
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              ✓ Agile & DevOps Ready
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}