import React from 'react';

const PropertyDetails = ({ details }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md w-full sm:w-64 md:w-72 lg:w-80">
      {details.map((detail, index) => (
        <div key={index} className="mb-4">
          <span className="text-gray-500 block">{detail.label}</span>
          <span className="text-black text-lg font-bold">{detail.value}</span>
        </div>
      ))}
    </div>
  );
};

const PropertyInfo = () => {
  return (
    <div className="bg-transparent rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Extra Info About Property</h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
      </p>
      <p className="text-gray-600 mb-4">
        When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
      </p>
      <button className="flex items-center justify-center bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300">
        <span className="material-icons mr-2">calendar_today</span>
        Schedule Visit
      </button>
    </div>
  );
};

const PropertyLayout = () => {
  const propertyDetails = [
    { label: 'Total Flat Space', value: '185 m2' },
    { label: 'Floor number', value: '26th' },
    { label: 'Number of rooms', value: '4' },
    { label: 'Parking Available', value: 'Yes' },
    { label: 'Payment Process', value: 'Bank' },
  ];

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col md:flex-row p-4 md:p-10 gap-6">
      {/* Sidebar with property details */}
      <div className="flex-none">
        <PropertyDetails details={propertyDetails} />
      </div>

      {/* Main content with image and additional info */}
      <div className="flex-grow flex flex-col lg:flex-row gap-6">
        <div className="flex-grow rounded-lg overflow-hidden shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(images/single-property.jpg)' }}>
          {/* You can replace the above URL with your image path */}
        </div>
        {/* <PropertyInfo /> */}
      </div>
    </div>
  );
};

export default PropertyLayout;
