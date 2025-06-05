import Link from "next/link"
import { ArrowRight, CheckCircle, Play, Users, Zap, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">AkaChat</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Try Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AkaChat – Faster, Smarter Team
                <span className="text-blue-600"> Collaboration</span> Without the Hassle!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A professional chat solution designed to streamline team communication, integrate with your favorite
                tools, and boost your company's productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Try It Free Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="flex items-center justify-center text-gray-600 hover:text-gray-900">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Free for 30 days • No credit card required</p>
            </div>

            <div className="relative">
              <div className="animate-float">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Team collaboration illustration showing people working together with chat bubbles and digital tools"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-pulse">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Teams Choose AkaChat</h2>
            <p className="text-xl text-gray-600">Everything you need for seamless collaboration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Real-time communication illustration"
                  className="w-24 h-24 mx-auto mb-4 animate-pulse-slow"
                />
              </div>
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Communication</h3>
              <p className="text-gray-600">Instant messaging, voice/video calls, and file sharing in one platform.</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Integration tools illustration"
                  className="w-24 h-24 mx-auto mb-4 animate-pulse-slow"
                />
              </div>
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Integrations</h3>
              <p className="text-gray-600">
                Connect with Slack, Google Workspace, Microsoft Teams, and other productivity tools.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Project management illustration"
                  className="w-24 h-24 mx-auto mb-4 animate-pulse-slow"
                />
              </div>
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smooth Project Management</h3>
              <p className="text-gray-600">
                Create dedicated team channels, assign tasks, and track progress without switching apps.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Security shield illustration"
                  className="w-24 h-24 mx-auto mb-4 animate-pulse-slow"
                />
              </div>
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-600">End-to-end encryption and advanced admin controls to keep your data safe.</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="All teams working together illustration"
                  className="w-24 h-24 mx-auto mb-4 animate-pulse-slow"
                />
              </div>
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Built for All Teams</h3>
              <p className="text-gray-600">
                From HR to Engineering, AkaChat helps every department work smarter together.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="24/7 support illustration"
                  className="w-24 h-24 mx-auto mb-4 animate-pulse-slow"
                />
              </div>
              <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it with our dedicated support team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Andi Wijaya profile illustration"
                className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white shadow-lg animate-float"
              />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
              "Since using AkaChat, we've cut meetings by 40%—everything gets discussed efficiently in organized chats.
              The integrations save us hours!"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-semibold text-gray-900">Andi Wijaya</p>
                <p className="text-gray-600">Head of Operations at TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Every Team</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Remote team collaboration illustration showing people working from different locations"
                  className="w-40 h-40 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Remote Teams</h3>
              <p className="text-gray-600">Stay connected no matter where your team is located.</p>
            </div>

            <div className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Project management illustration showing task boards and team coordination"
                  className="w-40 h-40 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Project Managers</h3>
              <p className="text-gray-600">Track deadlines, delegate tasks, and discuss details in one place.</p>
            </div>

            <div className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sales and marketing team illustration showing collaboration and campaign coordination"
                  className="w-40 h-40 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Sales & Marketing</h3>
              <p className="text-gray-600">Coordinate quickly, share campaign assets, and get real-time updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Showcase */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See Your Team's Productivity
                <span className="text-blue-600"> Soar</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Watch as your team transforms from scattered communication to seamless collaboration. AkaChat brings
                everyone together in one powerful platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">40% reduction in meetings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">60% faster project completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">90% team satisfaction rate</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="animate-float-slow">
                <img
                  src="/placeholder.svg?height=600&width=700"
                  alt="Large team collaboration illustration showing multiple people working together with various digital tools, chat interfaces, and project boards"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Animated floating elements */}
              <div className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg animate-bounce-slow">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">5 online</span>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">New message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your team's collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Start for free today and see the difference AkaChat makes!</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Sign Up Now – 30-Day Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AkaChat</h3>
              <p className="text-gray-400">Built for Teams, Designed for Productivity.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AkaChat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
