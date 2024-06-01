// components/Services.js
import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">My Services</h2>
        <p className="mt-4 text-lg md:text-xl">Explore the wide range of services I offer to help your brand stand out.</p>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Graphic Design Service */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img src="https://mondo.com/wp-content/uploads/2022/12/does-canva-take-the-place-of-a-graphic-designer-2022.jpg-.jpg" alt="Graphic Design" width={400} height={300} className="" layout="responsive" />
            <div className="p-6 mt-12">
              <h3 className="text-xl font-bold mt-10">Graphic Design</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                I create visually stunning designs that capture your brand's essence, including logos, brochures, business cards, and more.
              </p>
            </div>
          </div>
          
          {/* Motion Graphics (GFX) Service */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img src="https://cdn.dribbble.com/users/623359/screenshots/3061757/rocket_launch.gif" alt="Motion Graphics" width={400} height={300} layout="responsive" />
            <div className="p-6">
              <h3 className="text-xl font-bold">Motion Graphics (GFX)</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                I specialize in creating dynamic and engaging motion graphics to bring your ideas to life, from explainer videos to animated logos.
              </p>
            </div>
          </div>

          {/* Additional Service Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*ff-9irq-QaUppJImHfuaJQ.jpeg" alt="Branding" width={400} height={300} layout="responsive" />
            <div className="p-6 mt-4">
              <h3 className="text-xl font-bold">Branding</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Comprehensive branding solutions to ensure your brand has a consistent and professional look across all platforms and materials.
              </p>
            </div>
          </div>

          {/* Add more services as needed */}
        </div>
      </div>
    </section>
  );
}
