import React from 'react'
import PropertyLayout from '../Pages/PropertyLayout'


const PropertyDetail = () => {
  return (
    <div>
      <div className="relative w-full h-72 bg-gray-900">
    <img
      src="images\single-property.jpg"
      alt="Property background"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    <div className="absolute inset-0 bg-opacity-40"></div>

    <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
      <p className="text-sm uppercase mb-2">Home / Properties</p>
      <h1 className="text-4xl font-bold">Properties</h1>
    </div>
    <div>
    </div>
      
  <PropertyLayout />
  <div className="p-4 sm:p-8 w-2/3 bg-gray-50">
      
      <div className="mb-8">
        <p className="text-gray-800 text-lg sm:text-xl">
          Get the{" "}
          <span className="font-semibold text-gray-900">best villa agency</span>{" "}
          HTML CSS Bootstrap Template for your company website. TemplateMo
          provides you the{" "}
          <a href="#" className="text-blue-500 underline">
            best free CSS templates
          </a>{" "}
          in the world. Please tell your friends about it. Thank you. Cloud
          bread kogi bitters pitchfork shoreditch tumblr yr succulents
          single-origin coffee schlitz enamel pin you probably haven't heard of
          them ugh hella.
        </p>
        <p className="mt-4 text-gray-800 text-lg sm:text-xl">
          When you look for free CSS templates, you can simply type TemplateMo
          in any search engine website. In addition, you can type TemplateMo
          Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
          +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
          PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </p>
      </div>

      
      <div className="bg-white shadow-lg w-2/3  rounded-lg p-6 sm:p-8">
        <h3 className="text-orange-500 text-lg font-semibold mb-4">
          Best useful links?
        </h3>
        <p className="text-gray-700 mb-4">
          Dolor <span className="font-bold">almesit amet</span>, consectetur
          adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan
          crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice,
          chillwave vexillologist incididunt ut labore consectetur{" "}
          <span className="text-pink-500">adipiscing</span> elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="space-y-2">
          <li className="text-gray-800 font-semibold">How does this work?</li>
          <li className="text-gray-800 font-semibold">
            Why is Villa the best?
          </li>
        </ul>
      </div>
    </div>
   </div>
  </div>
  )
}

export default PropertyDetail