import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Instagram, MessageSquare, Mail, Clock, Heart, Send } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick responses for bookings and questions",
      contact: "+234 XXX XXX XXXX",
      action: "Message Now",
      color: "bg-green-500 hover:bg-green-600",
      primary: true,
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "See our latest work and DM us",
      contact: "@lashedbydeedee",
      action: "Follow & DM",
      color: "bg-pink-500 hover:bg-pink-600",
      primary: true,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "For detailed inquiries",
      contact: "hello@lashedbydeedee.com",
      action: "Send Email",
      color: "bg-gray-500 hover:bg-gray-600",
      primary: false,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "Call during business hours",
      contact: "+234 XXX XXX XXXX",
      action: "Call Now",
      color: "bg-blue-500 hover:bg-blue-600",
      primary: false,
    },
  ]

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-pink-100 rounded-full">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to book your appointment or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Methods</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`border-pink-200 ${method.primary ? "ring-2 ring-pink-200" : ""}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full text-white ${method.color}`}>{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <p className="font-medium text-gray-800 mb-3">{method.contact}</p>
                        <Button size="sm" className={`${method.color} text-white`}>
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center space-x-2">
                  <Send className="w-5 h-5 text-pink-500" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+234 XXX XXX XXXX" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." className="mt-1" rows={4} />
                  </div>

                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Lashed by Deedee Studio</strong>
                    <br />
                    Rumuodara, Port Harcourt
                    <br />
                    Rivers State, Nigeria
                  </p>
                  <p className="text-sm text-gray-600">
                    *Exact address provided after booking confirmation for privacy and security.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-pink-500" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className={`text-sm ${schedule.hours === "Closed" ? "text-red-500" : "text-gray-600"}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                  <p className="text-xs text-pink-700">
                    <strong>Note:</strong> We work by appointment only. Please book in advance to secure your preferred
                    time slot.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-800 mb-4">Ready to Book?</h3>
                <p className="text-sm text-gray-600 mb-4">Skip the contact form and book your appointment directly!</p>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white mb-3">Book Appointment</Button>
                <Button variant="outline" size="sm" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                  View Services & Prices
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-pink-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Need Immediate Help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  For urgent booking changes or questions on the day of your appointment:
                </p>
                <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Emergency WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have questions about our services? Check out our FAQ page for quick answers.
          </p>
          <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
            View Frequently Asked Questions
          </Button>
        </div>
      </div>
    </div>
  )
}
