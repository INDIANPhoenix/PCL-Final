"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitQuote } from "../actions/quote"

interface FormData {
  services: string[]
  propertyType: string
  projectSize: string
  timeline: string
  budget: string
  name: string
  email: string
  phone: string
  address: string
  details: string
}

const services = [
  "Concreting",
  "Landscaping",
  "Artificial Grass",
  "Driveway Construction",
  "Exposed Concrete",
  "Garden Maintenance",
  "Garden Design",
  "Landscaping Design",
  "Letterbox Installation",
  "Mulching",
]

export default function QuotePage() {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const [formData, setFormData] = useState<FormData>({
    services: [],
    propertyType: "",
    projectSize: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    details: "",
  })

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(async () => {
      const result = await submitQuote(formData)
      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      })

      if (result.success) {
        setFormData({
          services: [],
          propertyType: "",
          projectSize: "",
          timeline: "",
          budget: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          details: "",
        })
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h1>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll provide you with a detailed quote
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us give you an accurate quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Services */}
                <div>
                  <Label className="text-base font-medium">Services Required *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <Label className="text-base font-medium">Property Type *</Label>
                  <RadioGroup
                    value={formData.propertyType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, propertyType: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="residential" id="residential" />
                      <Label htmlFor="residential">Residential</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="commercial" id="commercial" />
                      <Label htmlFor="commercial">Commercial</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Project Size */}
                <div>
                  <Label htmlFor="projectSize" className="text-base font-medium">
                    Project Size *
                  </Label>
                  <Select
                    value={formData.projectSize}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, projectSize: value }))}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (Under 50m²)</SelectItem>
                      <SelectItem value="medium">Medium (50-200m²)</SelectItem>
                      <SelectItem value="large">Large (200-500m²)</SelectItem>
                      <SelectItem value="extra-large">Extra Large (500m²+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Timeline */}
                <div>
                  <Label htmlFor="timeline" className="text-base font-medium">
                    Preferred Timeline *
                  </Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div>
                  <Label htmlFor="budget" className="text-base font-medium">
                    Budget Range *
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="over-50k">Over $50,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-base font-medium">
                      Property Address *
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <Label htmlFor="details" className="text-base font-medium">
                    Additional Details
                  </Label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData((prev) => ({ ...prev, details: e.target.value }))}
                    placeholder="Please provide any additional details about your project..."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                {message && (
                  <div
                    className={`p-4 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                  >
                    {message.text}
                  </div>
                )}

                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Submitting..." : "Submit Quote Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
