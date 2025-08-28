import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Saad Ali Shujaat",
      role: "Product and Engineering Lead at QGT || Co-Founder at Calosync",
      company: "QuantumGrove Technologies",
      content: "Usama is hands down one the most creative QA engineers i have worked with, he is capable of finding all the nasty bugs in our projects by going beyond the limits of the product. He always research about the target audience of the product before he digs into it which helps him to understand how our customers will abuse our product. He is also good in delivering thoes bugs which is in my opinion as a developer, is as important as finding them. All in all he truly does care about the products.",
      rating: 5,
      project: "Mobile Applications"
    },
    {
      name: "Danyal Azhar",
      role: "Senior DevOps Engineer | CKA | AWS Certified Solutions Architect | Terraform Certified",
      company: "Tkxel",
      content: "Usama is knowledgeable, motivated and was a pleasure work with. He is not only reliable and forward thinking but capable of adapting to new working environments for the projects we worked on. His knowledge and expertise related to QA are astonishing. ",
      rating: 5,
      project: "AI-Powered Software Solutions"
    },
    {
      name: "Farhan Salam",
      role: "Head of Engineering",
      company: "Red Buffer",
      content: "It is not very often that you come across a standout talent like Usama. He is ridiculously efficient and extremely competent. I was particularly impressed by Usama’s ability to handle multiple projects/threads effortlessly. That skill often takes years to develop among customer service professionals, but it seemed to come perfectly naturally to him. He is also a great mentor who can show you the ropes. His communication skills are outstanding and I am sure he will go places with all the great qualities he possess.",
      rating: 5,
      project: "Full Stack Applications"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Client Testimonials</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Don't just take my word for it - here's what clients and colleagues say about working with me
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-yellow-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                  <Badge variant="outline" className="mt-2 text-xs">
                    Project: {testimonial.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}