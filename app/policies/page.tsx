import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CreditCard, RefreshCw, AlertTriangle, Shield, Heart, CheckCircle } from "lucide-react"

export default function PoliciesPage() {
  const policies = [
    {
      title: "Booking & Appointment Policy",
      icon: <Calendar className="w-6 h-6" />,
      content: [
        "All appointments must be booked in advance through our booking system or WhatsApp",
        "A 50% deposit is required to secure your appointment slot",
        "Appointments are confirmed only after deposit payment is received",
        "We do not accept walk-ins to ensure dedicated time for each client",
        "Appointment confirmations will be sent 24 hours before your scheduled time",
      ],
    },
    {
      title: "Cancellation Policy",
      icon: <RefreshCw className="w-6 h-6" />,
      content: [
        "Cancellations with 24+ hours notice: Full refund of deposit",
        "Cancellations with 12-24 hours notice: 50% deposit retention",
        "Cancellations with less than 12 hours notice: Full deposit forfeiture",
        "Emergency cancellations will be reviewed on a case-by-case basis",
        "Rescheduling is allowed once without penalty with 24+ hours notice",
      ],
    },
    {
      title: "Late Arrival & No-Show Policy",
      icon: <Clock className="w-6 h-6" />,
      content: [
        "Please arrive 10 minutes before your scheduled appointment",
        "Late arrivals (15+ minutes) may result in shortened service time",
        "Late arrivals (30+ minutes) may need to reschedule and forfeit deposit",
        "No-shows result in full deposit forfeiture",
        "Repeated no-shows may result in booking restrictions",
      ],
    },
    {
      title: "Payment Policy",
      icon: <CreditCard className="w-6 h-6" />,
      content: [
        "50% deposit required at booking via Paystack, Flutterwave, or bank transfer",
        "Remaining balance due at appointment completion",
        "We accept cash, bank transfer, and mobile payments",
        "All prices are in Nigerian Naira (₦)",
        "Payment receipts will be provided for all transactions",
      ],
    },
    {
      title: "Refund Policy",
      icon: <RefreshCw className="w-6 h-6" />,
      content: [
        "Refunds are processed according to our cancellation policy",
        "Dissatisfaction refunds are reviewed case-by-case",
        "Complimentary touch-ups offered within 6-8 weeks if unsatisfied",
        "Refunds take 3-5 business days to process",
        "Bank charges may apply for refund transactions",
      ],
    },
    {
      title: "Health & Safety Policy",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "All tools are properly sterilized between clients",
        "Single-use items are disposed of after each client",
        "Please inform us of any allergies or medical conditions",
        "Patch tests available 48 hours before service if requested",
        "We reserve the right to refuse service for health reasons",
      ],
    },
  ]

  const importantNotes = [
    {
      title: "Touch-Up Policy",
      description:
        "Complimentary touch-ups are offered 4-8 weeks after initial service for brows, and 2-3 weeks for lashes.",
      badge: "Included",
    },
    {
      title: "Aftercare Instructions",
      description: "Detailed aftercare instructions will be provided. Following these is crucial for best results.",
      badge: "Required",
    },
    {
      title: "Age Requirement",
      description: "Clients must be 18+ or accompanied by a parent/guardian for services.",
      badge: "Important",
    },
    {
      title: "Consultation",
      description: "All first-time clients receive a complimentary consultation to discuss expectations.",
      badge: "Free",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-pink-100 rounded-full">
              <Shield className="w-8 h-8 text-pink-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Policies & Terms</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read our policies carefully to ensure a smooth and pleasant experience for everyone
          </p>
        </div>

        {/* Important Alert */}
        <Alert className="mb-8 border-pink-200 bg-pink-50">
          <AlertTriangle className="h-4 w-4 text-pink-500" />
          <AlertDescription className="text-pink-700">
            <strong>Please Note:</strong> By booking an appointment, you agree to all policies listed below. These
            policies help us provide the best service while protecting both our clients and business.
          </AlertDescription>
        </Alert>

        {/* Policies Grid */}
        <div className="space-y-8 mb-12">
          {policies.map((policy, index) => (
            <Card key={index} className="border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-gray-800">
                  <div className="p-2 bg-pink-100 rounded-full text-pink-500">{policy.icon}</div>
                  <span>{policy.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {policy.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <Card className="mb-8 border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-xl text-gray-800">
              <div className="p-2 bg-pink-100 rounded-full text-pink-500">
                <Heart className="w-6 h-6" />
              </div>
              <span>Important Notes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {importantNotes.map((note, index) => (
                <div key={index} className="p-4 bg-pink-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{note.title}</h4>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        note.badge === "Free"
                          ? "bg-green-100 text-green-700"
                          : note.badge === "Required"
                            ? "bg-red-100 text-red-700"
                            : note.badge === "Important"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-pink-100 text-pink-700"
                      }`}
                    >
                      {note.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{note.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact for Questions */}
        <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About Our Policies?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have any questions about our policies or need clarification on any terms, please don't hesitate to
              reach out. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                Instagram DM
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>These policies are subject to change. Clients will be notified of any updates.</p>
        </div>
      </div>
    </div>
  )
}
