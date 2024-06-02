import Image from 'next/image';
import Link from 'next/link';
export default function Projects(){
    return(
        <section id="portfolio" className="py-16 px-6 md:px-12 bg-gray-50 dark:text-gray-200" style={{background: 'linear-gradient(to right, #1F2937,rgb(49 46 129) )'}}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">Our Creations</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src="https://cdn.discordapp.com/attachments/1246383609061965845/1246383899714523231/Untitled-1.png?ex=665c30f6&is=665adf76&hm=cdf01c8496bc7cd2133ad1ca51a5ce072253e299ca83c66fc50868ca8c9fa41c&" alt="Project 1" width={400} height={300} className="h-52" layout="responsive" />
              <img src="https://cdn.discordapp.com/attachments/1246383609061965845/1246384063703547976/banner_gig_3.1.png?ex=665c311d&is=665adf9d&hm=3f41967647cb60263a849277dd91b3b79ccc278b6e8103b7bb436527c5e54ad2&" alt="Project 1" width={400} height={300} className="h-52 mt-3" layout="responsive" />
              <Link href="https://www.instagram.com/doodlefreakstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl mt-3 font-bold ">Thumbmails and Banners</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see more examples</p>
              </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src="https://cdn.discordapp.com/attachments/1246383609061965845/1246384206846890036/testing_2.png?ex=665c313f&is=665adfbf&hm=05be72e198634ac20eb35211ff50be10068daf3e34ef7a7b4a6b17710b2ff425&" alt="Project 2" className="size-92" width={400} height={300} layout="responsive" />
              <Link href="https://www.instagram.com/doodlefreakstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">              
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl mt-12 font-bold">Advertising Posters</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see more examples</p>
              </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src="https://i.ytimg.com/vi/m1uVr0Elq-w/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDGBR0URJe2g3JqkgIwqoFD4ZMH4A" alt="Project 3" width={400} height={300} className="h-52 blur-md" layout="responsive" />
              <img src="https://i.ytimg.com/vi/QXBebc1P6SM/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLB7pC0SZA7KYm9FogKTaSfZT3e6ww" alt="Project 1" width={400} height={300} className="mt-3 h-52 blur-md" layout="responsive" />
              <Link href="https://www.youtube.com/@Ani_Port/shorts">
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl font-bold mt-4">Video Edits</h3>
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