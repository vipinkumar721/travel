
import React, { useState } from 'react';

const PropertyFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Show All');
  const filters = ['Show All', 'Apartment', 'Villa House', 'Penthouse'];

  return (
    <div className="flex space-x-4 mt-8 justify-center pt-20 rounded-5">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded text-white font-semibold ${
            activeFilter === filter ? 'bg-orange-500' : 'bg-gray-900'
          } hover:bg-orange-500 transition`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default PropertyFilter;