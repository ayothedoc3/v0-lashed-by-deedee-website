import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Award, Clock, Users, Sparkles, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const achievements = [
    { icon: <Users className="w-5 h-5" />, text: "200+ Happy Clients" },
    { icon: <Clock className="w-5 h-5" />, text: "3+ Years Experience" },
    { icon: <Award className="w-5 h-5" />, text: "Certified Professional" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Premium Techniques" },
  ]

  const values = [
    {
      title: "Precision & Detail",
      description: "Every stroke, every lash placement is done with meticulous attention to detail.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Client Comfort",
      description: "Your comfort and satisfaction are my top priorities throughout the entire process.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Professional Excellence",
      description: "Continuous learning and using only the highest quality products and techniques.",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-100 rounded-full">
              <Heart className="w-10 h-10 text-pink-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet Deedee - Your trusted beauty professional specializing in precision lash and brow artistry
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <div className="flex justify-center">
            <Card className="overflow-hidden shadow-xl border-pink-200">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center w-full max-w-md">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-pink-200 rounded-full flex items-center justify-center">
                      <Heart className="w-16 h-16 text-pink-500" />
                    </div>
                    <p className="text-gray-600 font-medium">Deedee's Photo</p>
                    <p className="text-sm text-gray-500">Professional headshot here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, I'm Deedee! 👋</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to my world of beauty and precision! I'm a passionate lash and brow artist based in the heart
                  of Rumuodara, Port Harcourt, where I've been transforming faces and boosting confidence for over 3
                  years.
                </p>
                <p>
                  My journey into the beauty industry started with a simple belief: every person deserves to feel
                  beautiful and confident in their own skin. What began as a passion project has grown into a thriving
                  business built on trust, precision, and genuine care for each client.
                </p>
                <p>
                  I specialize in advanced techniques like Ombré brows, microblading, and various lash extension
                  methods. My cozy home studio provides a comfortable, private environment where you can relax while I
                  work my magic.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-pink-600">
                  {achievement.icon}
                  <span className="text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Sets Me Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-pink-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Studio Section */}
        <section className="mb-16">
          <Card className="border-pink-200 bg-white/70">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-pink-500" />
                    <span>My Studio</span>
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Located in the peaceful area of Rumuodara, Port Harcourt, my home studio offers a private,
                      comfortable environment where you can relax and enjoy your beauty transformation.
                    </p>
                    <p>
                      The studio is equipped with professional-grade tools and maintains the highest standards of
                      cleanliness and hygiene. Every surface is sanitized, and all tools are properly sterilized between
                      clients.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                        Private & Comfortable
                      </Badge>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                        Fully Sanitized
                      </Badge>
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                        Professional Equipment
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Card className="overflow-hidden shadow-lg border-pink-200">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center w-full">
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto mb-4 bg-pink-200 rounded-full flex items-center justify-center">
                            <MapPin className="w-10 h-10 text-pink-500" />
                          </div>
                          <p className="text-gray-600 font-medium">Studio Photos</p>
                          <p className="text-sm text-gray-500">Showcase your beautiful studio</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications & Training */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Certifications & Training</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-pink-500" />
                  <h4 className="text-lg font-semibold text-gray-800">Professional Certifications</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Certified Microblading Artist</li>
                  <li>• Ombré Powder Brow Specialist</li>
                  <li>• Volume Lash Extension Certified</li>
                  <li>• Health & Safety Certified</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                  <h4 className="text-lg font-semibold text-gray-800">Continuous Learning</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regular technique workshops</li>
                  <li>• Latest trend training</li>
                  <li>• Product knowledge updates</li>
                  <li>• Industry conference attendance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Look?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's work together to create the perfect brows and lashes that enhance your natural beauty and boost your
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full">
                Book Your Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
