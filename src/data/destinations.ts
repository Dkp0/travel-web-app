export interface Destination {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    title: 'Taj Mahal, Agra',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    price: '15,999',
    description: 'Experience the magnificent Taj Mahal, a UNESCO World Heritage site and symbol of eternal love.'
  },
  {
    id: 2,
    title: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '24,999',
    description: 'Cruise through serene backwaters on a traditional houseboat in God\'s Own Country.'
  },
  {
    id: 3,
    title: 'Varanasi Ghats',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    price: '12,999',
    description: 'Experience the spiritual essence of India at the ancient ghats of Varanasi.'
  },
  {
    id: 4,
    title: 'Jaipur Pink City',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '18,999',
    description: 'Explore the majestic palaces and forts of Rajasthan\'s pink city.'
  },
  {
    id: 5,
    title: 'Goa Beaches',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    price: '21,999',
    description: 'Relax on pristine beaches and enjoy the vibrant nightlife of Goa.'
  },
  {
    id: 6,
    title: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '32,999',
    description: 'Adventure through the stunning landscapes of the Himalayan desert.'
  },
  {
    id: 7,
    title: 'Rann of Kutch',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '16,999',
    description: 'Experience the mesmerizing white desert and vibrant cultural festivals.'
  },
  {
    id: 8,
    title: 'Darjeeling',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    price: '19,999',
    description: 'Visit tea plantations and enjoy spectacular views of the Himalayas.'
  }
];