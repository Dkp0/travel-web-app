import React from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface DestinationFiltersProps {
  selectedPrice: string;
  onPriceChange: (value: string) => void;
}

const priceRanges: FilterOption[] = [
  { value: 'all', label: 'All Prices' },
  { value: 'budget', label: 'Budget (< ₹15,000)' },
  { value: 'moderate', label: 'Moderate (₹15,000 - ₹25,000)' },
  { value: 'luxury', label: 'Luxury (> ₹25,000)' },
];

export default function DestinationFilters({ selectedPrice, onPriceChange }: DestinationFiltersProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700">Price Range:</label>
      <select
        value={selectedPrice}
        onChange={(e) => onPriceChange(e.target.value)}
        className="block w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
      >
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
}