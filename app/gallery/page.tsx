"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Eye, Brush, Sparkles, Instagram } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Work", icon: <Camera className="w-4 h-4" /> },
    { id: "brows", name: "Brows", icon: <Brush className="w-4 h-4" /> },
    { id: "lashes", name: "Lashes", icon: <Eye className="w-4 h-4" /> },
    { id: "before-after", name: "Before & After", icon: <Sparkles className="w-4 h-4" /> },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "brows",
      service: "Ombré Brows",
      type: "before-after",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Natural ombré brows with perfect shape and color match",
      client: "Sarah J.",
    },
    {
      id: 2,
      category: "lashes",
      service: "Volume Lashes",
      type: "after",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Dramatic volume lashes for special occasion",
      client: "Michelle A.",
    },
    {
      id: 3,
      category: "brows",
      service: "Microblading",
      type: "before-after",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Hair-stroke microblading for natural fullness",
      client: "Grace O.",
    },
    {
      id: 4,
      category: "lashes",
      service: "Classic Lashes",
      type: "after",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Natural classic lashes for everyday elegance",
      client: "Jennifer E.",
    },
    {
      id: 5,
      category: "brows",
      service: "Combo Brows",
      type: "before-after",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Combination technique for the most natural look",
      client: "Blessing N.",
    },
    {
      id: 6,
      category: "lashes",
      service: "Hybrid Lashes",
      type: "after",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Perfect balance of natural and dramatic",
      client: "Chioma P.",
    },
  ]

  const filteredItems = galleryItems.filter(
    (item) =>
      selectedCategory === "all" ||
      item.category === selectedCategory ||
      (selectedCategory === "before-after" && item.type === "before-after"),
  )

  const GalleryCard = ({ item }: { item: any }) => (
    <Card
      className="overflow-hidden border-pink-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={() => setSelectedImage(item.id)}
    >
      <CardContent className="p-0">
        {item.type === "before-after" ? (
          <div className="grid grid-cols-2">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">BEFORE</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-xs text-pink-600 font-medium">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-2" />
              <p className="text-sm text-pink-600 font-medium">Beautiful Result</p>
            </div>
          </div>
        )}

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 text-xs">
              {item.service}
            </Badge>
            <span className="text-xs text-gray-500">{item.client}</span>
          </div>
          <p className="text-sm text-gray-600">{item.description}</p>
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
              <Camera className="w-8 h-8 text-pink-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-4">Gallery & Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful transformations and see the artistry behind every lash and brow service
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "border-pink-300 text-pink-600 hover:bg-pink-50"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">200+</div>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </CardContent>
          </Card>
          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
              <p className="text-sm text-gray-600">Transformations</p>
            </CardContent>
          </Card>
          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">3+</div>
              <p className="text-sm text-gray-600">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center border-pink-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">98%</div>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Instagram Feed Section */}
        <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Instagram className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow for Daily Inspiration</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See more of our work, client stories, and behind-the-scenes content on Instagram. Get inspired for your
              next beauty transformation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                <Instagram className="w-4 h-4 mr-2" />
                Follow @lashedbydeedee
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                View Latest Posts
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Booking CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for Your Transformation?</h3>
          <p className="text-gray-600 mb-6">Book your appointment and join our gallery of beautiful results!</p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full">
            Book Your Appointment
          </Button>
        </div>
      </div>
    </div>
  )
}
