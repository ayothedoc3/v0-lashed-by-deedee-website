"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Instagram, MessageSquare, Camera, Quote } from "lucide-react"

export default function ReviewsPage() {
  const [showReviewForm, setShowReviewForm] = useState(false)

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Ombré Brows",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Absolutely OBSESSED with my new brows! Deedee is so talented and made me feel comfortable throughout the entire process. The shape is perfect and exactly what I wanted. Can't wait for my touch-up!",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      beforeAfter: true,
    },
    {
      name: "Michelle Adaora",
      service: "Volume Lashes",
      rating: 5,
      date: "1 month ago",
      review:
        "My lashes look absolutely stunning! I've gotten so many compliments. Deedee's attention to detail is incredible - each lash is perfectly placed. Will definitely be back for fills!",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      platform: "Instagram",
    },
    {
      name: "Grace Okoro",
      service: "Microblading",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Best decision ever! My brows look so natural and I wake up ready to go. Deedee explained everything step by step and the healing process was exactly as she described. Highly recommend! 💕",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
    {
      name: "Jennifer Eze",
      service: "Classic Lashes",
      rating: 5,
      date: "2 months ago",
      review:
        "Perfect natural look! I wanted something subtle for everyday wear and Deedee delivered exactly that. The lashes feel so light and comfortable. Amazing work!",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      platform: "WhatsApp",
    },
    {
      name: "Blessing Nwankwo",
      service: "Combo Brows",
      rating: 5,
      date: "1 month ago",
      review:
        "WOW! The combination technique gave me the most natural-looking brows. I was nervous about the process but Deedee made me feel so at ease. Her studio is clean and professional. 10/10!",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
      beforeAfter: true,
    },
    {
      name: "Chioma Peters",
      service: "Hybrid Lashes",
      rating: 5,
      date: "3 weeks ago",
      review:
        "The perfect balance of natural and glam! These hybrid lashes are exactly what I was looking for. Deedee is a true artist and so sweet. Already booked my next fill!",
      image: "/placeholder.svg?height=60&width=60",
      verified: true,
    },
  ]

  const stats = {
    totalReviews: 127,
    averageRating: 4.9,
    fiveStars: 124,
    fourStars: 3,
    threeStars: 0,
    twoStars: 0,
    oneStars: 0,
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
      ))}
    </div>
  )

  const ReviewCard = ({ testimonial }: { testimonial: any }) => (
    <Card className="border-pink-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <span>{testimonial.name}</span>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                      Verified
                    </Badge>
                  )}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </div>
              {testimonial.platform && (
                <div className="flex items-center space-x-1 text-pink-500">
                  {testimonial.platform === "Instagram" ? (
                    <Instagram className="w-4 h-4" />
                  ) : (
                    <MessageSquare className="w-4 h-4" />
                  )}
                  <span className="text-xs">{testimonial.platform}</span>
                </div>
              )}
            </div>

            <Badge variant="outline" className="mb-3 border-pink-300 text-pink-600">
              {testimonial.service}
            </Badge>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-6 h-6 text-pink-200" />
              <p className="text-gray-700 leading-relaxed pl-4">{testimonial.review}</p>
            </div>

            {testimonial.beforeAfter && (
              <div className="mt-4 flex items-center space-x-2 text-sm text-pink-600">
                <Camera className="w-4 h-4" />
                <span>Before & After photos available</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

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
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Client Reviews & Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our amazing clients have to say about their experience at Lashed by Deedee
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">{stats.averageRating}</div>
              <StarRating rating={5} />
              <p className="text-sm text-gray-600 mt-2">Average Rating</p>
            </CardContent>
          </Card>

          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">{stats.totalReviews}</div>
              <p className="text-sm text-gray-600">Total Reviews</p>
            </CardContent>
          </Card>

          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">98%</div>
              <p className="text-sm text-gray-600">5-Star Reviews</p>
            </CardContent>
          </Card>

          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </CardContent>
          </Card>
        </div>

        {/* Rating Breakdown */}
        <Card className="mb-12 border-pink-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Rating Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stars === 5 ? stats.fiveStars : stars === 4 ? stats.fourStars : 0
                const percentage = (count / stats.totalReviews) * 100

                return (
                  <div key={stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-20">
                      <span className="text-sm">{stars}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">{count}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <ReviewCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Featured Review */}
        <Card className="mb-12 border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
          <CardContent className="p-8">
            <div className="text-center">
              <Quote className="w-12 h-12 text-pink-300 mx-auto mb-4" />
              <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
                "I've been to several lash and brow artists, but Deedee is truly exceptional. Her attention to detail,
                professionalism, and artistic skill are unmatched. My brows have never looked better, and I constantly
                get compliments. She's not just an artist, she's a perfectionist who genuinely cares about her clients."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Victoria Okafor</p>
                  <p className="text-sm text-gray-600">Loyal Client • Ombré Brows & Volume Lashes</p>
                  <StarRating rating={5} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leave a Review Section */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 text-center">Share Your Experience</CardTitle>
            <p className="text-center text-gray-600">Had a great experience? We'd love to hear from you!</p>
          </CardHeader>
          <CardContent>
            {!showReviewForm ? (
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Your feedback helps us improve and helps other clients make informed decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setShowReviewForm(true)} className="bg-pink-500 hover:bg-pink-600 text-white">
                    Write a Review
                  </Button>
                  <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                    <Instagram className="w-4 h-4 mr-2" />
                    Review on Instagram
                  </Button>
                  <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp Review
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reviewName">Your Name *</Label>
                    <Input id="reviewName" placeholder="Your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="reviewService">Service Received *</Label>
                    <Input id="reviewService" placeholder="e.g., Ombré Brows" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Rating *</Label>
                  <div className="flex space-x-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" className="p-1 hover:scale-110 transition-transform">
                        <Star className="w-8 h-8 text-yellow-400 hover:fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="reviewText">Your Review *</Label>
                  <Textarea id="reviewText" placeholder="Tell us about your experience..." className="mt-2" rows={4} />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
                    Submit Review
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowReviewForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Follow us for more client transformations and reviews</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              <Instagram className="w-4 h-4 mr-2" />
              @lashedbydeedee
            </Button>
            <Button variant="outline" size="sm" className="border-green-300 text-green-600 hover:bg-green-50">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
