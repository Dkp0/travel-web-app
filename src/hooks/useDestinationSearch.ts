import { useState, useMemo } from 'react';
import { Destination } from '../data/destinations';

export default function useDestinationSearch(destinations: Destination[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch = destination.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (!matchesSearch) return false;
      
      const price = parseInt(destination.price.replace(/,/g, ''));
      switch (priceFilter) {
        case 'budget':
          return price < 15000;
        case 'moderate':
          return price >= 15000 && price <= 25000;
        case 'luxury':
          return price > 25000;
        default:
          return true;
      }
    });
  }, [destinations, searchQuery, priceFilter]);

  return {
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter,
    filteredDestinations,
  };
}