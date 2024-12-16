import React from 'react';
import type { Destination } from '../../data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={destination.image}
          alt={destination.title}
          className="object-cover w-full h-64 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{destination.title}</h3>
        <p className="text-white mb-2">{destination.description}</p>
        <p className="text-white">
          Starting from <span className="text-xl font-bold">₹{destination.price}</span>
        </p>
      </div>
    </div>
  );
}