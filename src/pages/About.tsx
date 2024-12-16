import React from 'react';
import { Globe, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About WanderTour</h1>
          <p className="text-xl">Your trusted travel companion since 1970</p>
        </div>
      </div>

      <section className="py-16" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Operating in over 100 countries, bringing you the best destinations worldwide
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Professional travel experts with years of experience in crafting perfect trips
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Safe Travel</h3>
              <p className="text-gray-600">
                Your safety is our priority with 24/7 support and travel insurance options
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 1970, Wandertour has been at the forefront of innovative travel experiences. 
                What started as a small family-owned business has grown into a global travel company, 
                helping millions of travelers create unforgettable memories.
              </p>
              <p className="text-gray-600">
                Our mission is to make travel accessible, enjoyable, and sustainable for everyone. 
                We believe that travel has the power to transform lives, bridge cultures, and create 
                lasting positive impact on communities around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}