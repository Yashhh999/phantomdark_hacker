import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 text-gray-200" style={{background: 'linear-gradient(to right, #1F2937,rgb(49 46 129) )'}}>
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200">Our Services</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">Explore the wide range of services we offer to help your brand stand out.</p>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Graphic Design Service */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/vistaprint/image/upload/c_scale,w_448,h_278,dpr_2/f_auto,q_auto/v1706101108/ideas-and-advice-prod/en-us/2ac977f5-bff9-4ef0-aa92-38931ae8fe60-2-e1500740591149.png?_i=AA"
              alt="Graphic Design"
              width={400}
              height={300}
              className="object-cover"
            />
            <div className="p-6 mt-3">
              <h3 className="text-xl font-bold mt-10">Graphic Design and Branding</h3>
              <p className="mt-2 text-gray-400">
                We create visually stunning designs that capture your brand's essence, including logos, brochures, business cards, and more for comprehensive branding.
              </p>
            </div>
          </div>
          
          {/* Motion Graphics (GFX) Service */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://cdn.dribbble.com/users/623359/screenshots/3061757/rocket_launch.gif"
              alt="Motion Graphics"
              width={400}
              height={300}
              className="object-cover"
            />
            <div className="p-6 mt-3">
              <h3 className="text-xl font-bold">Motion Graphics (GFX)</h3>
              <p className="mt-2 text-gray-400">
                We specialize in creating dynamic and engaging motion graphics to bring your ideas to life, from explainer videos to animated logos.
              </p>
            </div>
          </div>

          {/* Additional Service Example */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://volomagis.com/wp-content/uploads/2021/03/18695-scaled.jpg"
              alt="Branding"
              width={400}
              height={300}
              className="object-cover"
            />
            <div className="p-6 mt-3">
              <h3 className="text-xl font-bold">Video Editing</h3>
              <p className="mt-2 text-gray-400">
                We offer professional video editing services to help you create engaging content that resonates with your audience.
              </p>
            </div>
          </div>

          {/* Add more services as needed */}
        </div>
      </div>
    </section>
  );
}