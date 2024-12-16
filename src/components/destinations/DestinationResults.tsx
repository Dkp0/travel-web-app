import React from 'react';
import { Destination } from '../../data/destinations';
import DestinationCard from '../ui/DestinationCard';

interface DestinationResultsProps {
  destinations: Destination[];
}

export default function DestinationResults({ destinations }: DestinationResultsProps) {
  if (destinations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No destinations found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}