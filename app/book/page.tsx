"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CreditCard, MessageSquare } from "lucide-react"

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const services = [
    { name: "Ombré Brows", price: "₦50,000", duration: "2.5 hours" },
    { name: "Microblading", price: "₦45,000", duration: "2 hours" },
    { name: "Combo Brows", price: "₦55,000", duration: "3 hours" },
    { name: "Classic Lashes", price: "₦35,000", duration: "2 hours" },
    { name: "Volume Lashes", price: "₦45,000", duration: "2.5 hours" },
    { name: "Hybrid Lashes", price: "₦40,000", duration: "2.5 hours" },
    { name: "Brow Touch-Up", price: "₦20,000", duration: "1.5 hours" },
    { name: "Lash Fill", price: "₦25,000", duration: "1.5 hours" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Book an Appointment</h1>
          <p className="text-xl text-gray-600">
            Select a service, pick a date, and secure your spot with a 50% deposit. Pay with Paystack, Flutterwave, or
            upload transfer proof.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-pink-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-pink-500" />
                  <span>Booking Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Service Selection */}
                <div>
                  <Label htmlFor="service" className="text-base font-medium">
                    Select Service *
                  </Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose your service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.name}>
                          {service.name} - {service.price} ({service.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div>
                  <Label htmlFor="date" className="text-base font-medium">
                    Preferred Date *
                  </Label>
                  <Input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="mt-2"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <Label htmlFor="time" className="text-base font-medium">
                    Preferred Time *
                  </Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Choose your time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time, index) => (
                        <SelectItem key={index} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input id="name" placeholder="Your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number *
                    </Label>
                    <Input id="phone" placeholder="+234 XXX XXX XXXX" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                </div>

                {/* Special Notes */}
                <div>
                  <Label htmlFor="notes" className="text-base font-medium">
                    Special Notes
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or notes (e.g., 'I want natural-looking brows')"
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="border-pink-200 sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedService && (
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{selectedService}</h4>
                    <p className="text-sm text-gray-600">
                      {services.find((s) => s.name === selectedService)?.duration}
                    </p>
                    <p className="text-lg font-bold text-pink-500">
                      {services.find((s) => s.name === selectedService)?.price}
                    </p>
                  </div>
                )}

                {selectedDate && (
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedDate).toLocaleDateString()}</span>
                  </div>
                )}

                {selectedTime && (
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>{selectedTime}</span>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <CreditCard className="w-4 h-4" />
                    <span>50% deposit required</span>
                  </div>
                  {selectedService && (
                    <p className="text-lg font-bold text-gray-800">
                      Deposit:{" "}
                      {services.find((s) => s.name === selectedService)?.price
                        ? `₦${(
                            Number.parseInt(
                              services
                                .find((s) => s.name === selectedService)!
                                .price.replace("₦", "")
                                .replace(",", ""),
                            ) / 2
                          ).toLocaleString()}`
                        : "₦0"}
                    </p>
                  )}
                </div>

                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                  disabled={!selectedService || !selectedDate || !selectedTime}
                >
                  Proceed to Payment
                </Button>

                <div className="text-xs text-gray-500 text-center">
                  <p>Payment methods:</p>
                  <p>Paystack • Flutterwave • Bank Transfer</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border-pink-200 mt-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-pink-500 mb-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-medium">Need Help?</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Have questions about your booking? Contact us directly.</p>
                <Button variant="outline" size="sm" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
