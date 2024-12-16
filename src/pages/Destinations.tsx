import React from 'react';
import { destinations } from '../data/destinations';
import SearchInput from '../components/ui/SearchInput';
import DestinationFilters from '../components/destinations/DestinationFilters';
import DestinationResults from '../components/destinations/DestinationResults';
import useDestinationSearch from '../hooks/useDestinationSearch';

export default function DestinationsPage() {
  const {
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter,
    filteredDestinations,
  } = useDestinationSearch(destinations);

  return (
    <div className="pt-16" id="destination">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-xl mb-8">Discover amazing places around the world</p>
          
          <div className="max-w-2xl">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search destinations..."
            />
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <DestinationFilters
              selectedPrice={priceFilter}
              onPriceChange={setPriceFilter}
            />
          </div>

          <DestinationResults destinations={filteredDestinations} />
        </div>
      </section>
    </div>
  );
}