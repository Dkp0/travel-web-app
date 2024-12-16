import React from 'react';

interface Deal {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
}

const deals: Deal[] = [
  {
    id: 1,
    title: 'Early Bird Special',
    description: 'Book 3 months in advance and save 20% on your dream vacation',
    discount: '20% OFF',
    validUntil: '2024-12-31'
  },
  {
    id: 2,
    title: 'Last Minute Getaway',
    description: 'Special rates for last-minute bookings within the next 2 weeks',
    discount: 'Up to 30% OFF',
    validUntil: '2024-12-31'
  },
  {
    id: 3,
    title: 'Family Package',
    description: 'Kids stay free when traveling with two adults',
    discount: 'Kids Free',
    validUntil: '2024-12-31'
  }
];

export default function DealsPage() {
  return (
    <div className="pt-16" id="deals">
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Special Deals</h1>
          <p className="text-xl">Don't miss out on these amazing offers</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold mb-4">
                    {deal.discount}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <div className="text-sm text-gray-500">
                    Valid until: {deal.validUntil}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}