import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Image,
  Zap,
  Users,
  Star,
  Check,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activePlan, setActivePlan] = useState("pro");

  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "AI Powered",
      description: "Generate high-quality thumbnails instantly using AI.",
    },
    {
      icon: <Image size={32} />,
      title: "HD Quality",
      description: "Get crisp and eye-catching thumbnails for YouTube.",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Generation",
      description: "Create thumbnails in seconds with optimized AI.",
    },
    {
      icon: <Users size={32} />,
      title: "Community Creations",
      description: "Explore and get inspired by other creators.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "YouTuber",
      content:
        "Thumblify helped me boost my CTR dramatically. Amazing results!",
      avatar: "R",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      content:
        "The AI-generated thumbnails are incredibly professional.",
      avatar: "S",
      rating: 5,
    },
    {
      name: "David Lee",
      role: "Gaming Streamer",
      content:
        "Fast, simple, and powerful. Best thumbnail tool I’ve used.",
      avatar: "D",
      rating: 5,
    },
  ];

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$9",
      credits: "50 Credits",
      features: [
        "50 Thumbnail Generations",
        "HD Downloads",
        "Community Access",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$19",
      credits: "200 Credits",
      popular: true,
      features: [
        "200 Thumbnail Generations",
        "Priority AI Speed",
        "Premium Templates",
        "HD Downloads",
      ],
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "$49",
      credits: "Unlimited Credits",
      features: [
        "Unlimited Generations",
        "Premium Templates",
        "Team Access",
        "Priority Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950 text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                🚀 AI Thumbnail Generator
              </div>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
                Create Stunning
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {" "}YouTube Thumbnails
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl">
                Generate eye-catching thumbnails with AI in seconds.
                Increase clicks, boost engagement, and grow your audience.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/generate")}
                  className="rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
                >
                  Generate Now
                </button>

                <button
                  onClick={() => navigate("/community")}
                  className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  View Creations
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                  Thumbnail Preview
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/30">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Powerful Features
            </h2>
            <p className="mt-4 text-gray-400">
              Everything you need to create viral thumbnails.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 ${
                  hoveredCard === index
                    ? "scale-105 border-purple-500 shadow-lg shadow-purple-500/20"
                    : ""
                }`}
              >
                <div className="mb-4 text-purple-400">
                  {feature.icon}
                </div>

                <h3 className="mb-2 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Loved by Creators
            </h2>
            <p className="mt-4 text-gray-400">
              Thousands of creators trust Thumblify.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-6 text-gray-300">
                  “{testimonial.content}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16 bg-black/50">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Pricing Plans
            </h2>
            <p className="mt-4 text-gray-400">
              Choose the perfect plan for your content creation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`relative cursor-pointer rounded-2xl border p-8 transition duration-300 ${
                  activePlan === plan.id
                    ? "border-purple-500 bg-purple-500/10 scale-105"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-4 text-5xl font-bold">
                  {plan.price}
                  <span className="text-lg text-gray-400">
                    /month
                  </span>
                </div>

                <p className="mt-2 text-purple-300">
                  {plan.credits}
                </p>

                <button className="mt-6 w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500">
                  Get Started
                </button>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Check size={18} className="text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-12 text-center backdrop-blur-xl">

            <h2 className="text-4xl font-bold">
              Ready to Create Viral Thumbnails?
            </h2>

            <p className="mt-4 text-lg text-gray-300">
              Start generating AI-powered thumbnails today and grow your channel faster.
            </p>

            <button
              onClick={() => navigate("/generate")}
              className="mt-8 rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold transition hover:bg-purple-500"
            >
              Generate Your First Thumbnail
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}