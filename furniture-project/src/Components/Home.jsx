import React, { useState } from 'react';
import DummyData from './DummyData';
import CardDetails from './CardDetails';

const slides = [
    {
        id: 1,
        content: "HURRY! GET THE BEST VILLA FOR YOU",
        location: "Toronto, Canada",
        imageUrl: "images/banner-01.jpg",
    },
    {
        id: 2,
        content: "DISCOVER YOUR DREAM HOME",
        location: "Vancouver, Canada",
        imageUrl: "images/banner-02.jpg",
    },
    {
        id: 3,
        content: "FIND THE PERFECT PLACE",
        location: "Montreal, Canada",
        imageUrl: "images/banner-03.jpg",
    },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="w-full h-screen flex-shrink-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        >
                            <div className="w-1/2 h-full bg-black bg-opacity-20 flex flex-col justify-center items-start p-12">
                                <div>
                                    <span className="text-white text-xl mb-2 bg-red-600 px-2 py-1 rounded">
                                        {slide.location}
                                    </span>
                                    <h1 className="text-white text-4xl  md:text-6xl font-bold leading-tight">
                                        {slide.content}
                                    </h1>
                                </div>
                                <button className="bg-red-600 text-white text-sm px-6 py-3 mt-8 rounded-md hover:bg-red-700 transition ">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute bg-transparent top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg focus:outline-none"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute bg-transparent top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg focus:outline-none"
                >
                    &#10095;
                </button>
            </div>
            <DummyData />
            <CardDetails />
        </>
    );
};

export default Home;

