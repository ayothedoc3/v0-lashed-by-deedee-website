import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Award,
  Users,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  DollarSign,
  Heart,
  Sparkles,
} from "lucide-react"

export default function TrainingPage() {
  const courses = [
    {
      title: "Ombré Brows Masterclass",
      duration: "2 Days",
      price: "₦150,000",
      level: "Beginner to Advanced",
      students: "Max 4 students",
      description: "Master the art of ombré powder brows with hands-on training and lifetime support.",
      includes: [
        "Complete theory and anatomy",
        "Live model practice",
        "Professional kit included",
        "Certificate of completion",
        "6 months mentorship",
        "Business setup guidance",
      ],
      nextDate: "March 15-16, 2024",
      popular: true,
    },
    {
      title: "Microblading Certification",
      duration: "3 Days",
      price: "₦180,000",
      level: "Beginner",
      students: "Max 3 students",
      description: "Learn the precise art of microblading with comprehensive training and ongoing support.",
      includes: [
        "Microblading theory & techniques",
        "Practice on synthetic skin",
        "Live model sessions",
        "Professional tools kit",
        "Certification",
        "3 months follow-up support",
      ],
      nextDate: "April 20-22, 2024",
      popular: false,
    },
    {
      title: "Volume Lash Extensions",
      duration: "2 Days",
      price: "₦120,000",
      level: "Intermediate",
      students: "Max 5 students",
      description: "Advanced volume lashing techniques for creating dramatic, full lash looks.",
      includes: [
        "Volume theory & application",
        "Fan-making techniques",
        "Live model practice",
        "Lash extension kit",
        "Certificate",
        "Online support group access",
      ],
      nextDate: "May 10-11, 2024",
      popular: false,
    },
    {
      title: "Complete Beauty Package",
      duration: "5 Days",
      price: "₦350,000",
      level: "All Levels",
      students: "Max 3 students",
      description: "Comprehensive training covering brows, lashes, and business development.",
      includes: [
        "All brow techniques",
        "All lash techniques",
        "Business development",
        "Marketing strategies",
        "Complete professional kits",
        "1 year mentorship program",
      ],
      nextDate: "June 5-9, 2024",
      popular: true,
    },
  ]

  const testimonials = [
    {
      name: "Favour Okechukwu",
      course: "Ombré Brows Masterclass",
      rating: 5,
      review:
        "Deedee is an amazing teacher! Her patience and attention to detail helped me master the technique. I'm now running my own successful brow business!",
      location: "Lagos",
    },
    {
      name: "Chidinma Eze",
      course: "Complete Beauty Package",
      rating: 5,
      review:
        "Best investment I've made! The comprehensive training and ongoing support have been invaluable. Highly recommend!",
      location: "Abuja",
    },
    {
      name: "Sandra Okafor",
      course: "Volume Lash Extensions",
      rating: 5,
      review:
        "Professional training with hands-on experience. Deedee's expertise and teaching style made learning enjoyable and effective.",
      location: "Port Harcourt",
    },
  ]

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Certification",
      description: "Receive industry-recognized certificates upon completion",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 5 students per class",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Mentorship and support even after course completion",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Professional Kits",
      description: "Complete starter kits included with all courses",
    },
  ]

  const CourseCard = ({ course }: { course: any }) => (
    <Card
      className={`border-pink-200 hover:shadow-lg transition-shadow ${course.popular ? "ring-2 ring-pink-300" : ""}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
          {course.popular && <Badge className="bg-pink-500 text-white">Most Popular</Badge>}
        </div>
        <p className="text-gray-600">{course.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-pink-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-pink-500" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-4 h-4 text-pink-500" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-pink-500" />
            <span>{course.nextDate}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
          <ul className="space-y-1">
            {course.includes.map((item: string, index: number) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-pink-500">{course.price}</span>
            <p className="text-xs text-gray-500">Payment plans available</p>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">Enroll Now</Button>
        </div>
      </CardContent>
    </Card>
  )

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-pink-100 rounded-full">
              <GraduationCap className="w-8 h-8 text-pink-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Professional Training</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the art of lash and brow services with comprehensive, hands-on training from an experienced
            professional
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our Training?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-pink-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Available Courses</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-pink-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <StarRating rating={testimonial.rating} />
                    <Badge variant="outline" className="border-pink-300 text-pink-600 text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment & Booking Info */}
        <section className="mb-16">
          <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-pink-500" />
                      <span>Flexible payment plans available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-pink-500" />
                      <span>Multiple course dates throughout the year</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-pink-500" />
                      <span>Industry-recognized certification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <span>Lifetime support and mentorship</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Secure your spot with a ₦50,000 deposit. Full payment due before course start date.
                  </p>
                  <div className="space-y-3">
                    <Button size="lg" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                      Book Consultation Call
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-pink-300 text-pink-600 hover:bg-pink-50"
                    >
                      Download Course Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Training */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Have Questions About Training?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Not sure which course is right for you? Let's chat! I'm here to help you choose the perfect training program
            for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white">WhatsApp for Training Info</Button>
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
