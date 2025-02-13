"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/bg.jpg')` }}>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center bg-black bg-opacity-50 p-6 md:p-12 rounded-lg">
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Doodle Freaks</h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300">We are a team of Freelancers specializing in stunning visuals, creative designs and cutting edge solutions</p>
            <a href="#portfolio" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">View our Works</a>
          </div>
          <div className="md:w-1/2 text-center">
            <Image src="/dc.jpg" alt="Phantom" width={400} height={400} className="rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100 dark:text-gray-200" style={{ background: 'linear-gradient(to right, #1F2937, rgb(49 46 129))' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">About Us</h2>
          <div className={`${isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-full'}`}>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              Welcome to DoodleFreak Studios, where creativity meets precision! We are a premier graphic design and video editing agency dedicated to transforming your vision into captivating visuals and compelling stories. Our team of talented designers and editors thrives on innovation, crafting unique and engaging content tailored to your brand's needs.<br /><br />

              At DoodleFreak Studios, we understand the power of visual communication in today’s fast-paced digital landscape. Our expertise spans a wide array of services, including brand identity development, promotional materials, social media content, and immersive video experiences. Whether you need a stunning logo, an eye-catching infographic, or a dynamic video production, we bring your ideas to life with a blend of artistry and technical proficiency.<br /><br />

              We pride ourselves on our collaborative approach, working closely with you to ensure every project not only meets but exceeds your expectations. Our commitment to quality, attention to detail, and passion for design and storytelling make us the perfect partner for businesses looking to make a lasting impression.<br /><br />

              Let DoodleFreak Studios elevate your brand with visuals that captivate and videos that resonate. Welcome to a world where your creative vision becomes reality.
            </p>
          </div>
          <button onClick={toggleCollapse} className="text-white hover:underline bg-blue-600 focus:outline-none mt-4 p-2 rounded">
            {isCollapsed ? 'Read' : 'Collapse'}
          </button>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* Your portfolio section code here */}
    </div>
  );
}
