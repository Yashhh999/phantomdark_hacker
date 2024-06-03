import Image from 'next/image';
import Link from 'next/link';
export default function Projects(){
    return(
        <section id="portfolio" className="py-16 px-6 md:px-12 bg-gray-50 dark:text-gray-200" style={{background: 'linear-gradient(to right, #1F2937,rgb(49 46 129) )'}}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">Our Creations</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <Image src="/1.jpg" alt="Project 1" width={400} height={300} className="h-52" layout="responsive" />
              <Image src="/2.jpg" alt="Project 1" width={400} height={300} className="h-52 mt-3" layout="responsive" />
              <Link href="https://www.instagram.com/doodlefreakstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl mt- font-bold ">Thumbmails and Banners</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see more examples</p>
              </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <Image src="/3.jpg" alt="Project 2" className="" width={400} height={300} layout="responsive" />
              <Link href="https://www.instagram.com/doodlefreakstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">              
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl mt-20 font-bold">Advertising Posters</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see more examples</p>
              </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
  <Image src="/5.jpg" alt="Project 3" width={400} height={300} className="h-52 blur-md" layout="responsive" />
  <Image src="/4.jpg" alt="Project 3" width={400} height={300} className="h-52 blur-md" layout="responsive" />
  <Link href="https://www.youtube.com/@Ani_Port/shorts">
    <div className="p-4 hover:text-blue-500">
      <h3 className="text-xl font-bold mt-6">Video Edits</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see examples</p>
    </div>
  </Link>
</div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>

    )
}