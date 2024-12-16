import React from 'react';
import SearchBar from './ui/SearchBar';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          Discover Incredible India
        </h1>
        <p className="text-xl text-white text-center mb-8 max-w-2xl">
          Experience the rich culture, stunning landscapes, and unforgettable adventures across India
        </p>
        
        <SearchBar />
      </div>
    </div>
  );
}