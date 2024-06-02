import Image from 'next/image';
import Link from 'next/link';
export default function Projects(){
    return(
        <section id="portfolio" className="py-16 px-6 md:px-12 bg-gray-50 dark:text-gray-200" style={{background: 'linear-gradient(to right, #1F2937,rgb(49 46 129) )'}}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">Our Creations</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <Image src="https://cdn.discordapp.com/attachments/1246383609061965845/1246383899714523231/Untitled-1.png?ex=665d8276&is=665c30f6&hm=1239983689ae507c4c6c4126990351faae46780b87c4921c0bbf4e25bafa77cd&" alt="Project 1" width={400} height={300} className="h-52" layout="responsive" />
              <Image src="https://cdn.discordapp.com/attachments/1246383609061965845/1246384063703547976/banner_gig_3.1.png?ex=665d829d&is=665c311d&hm=87582e7628111b6878f04debc5c683a40c57dbeeb74ed46d469b1d4f7d1ce4a0&" alt="Project 1" width={400} height={300} className="h-52 mt-3" layout="responsive" />
              <Link href="https://www.instagram.com/doodlefreakstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl mt- font-bold ">Thumbmails and Banners</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see more examples</p>
              </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <Image src="https://cdn.discordapp.com/attachments/1246383609061965845/1246384206846890036/testing_2.png?ex=665d82bf&is=665c313f&hm=9ede6a0914b09901c71366e56c8b3bff70373cd16915d2e8b72ff2d9c98ac9b2&" alt="Project 2" className="" width={400} height={300} layout="responsive" />
              <Link href="https://www.instagram.com/doodlefreakstudios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">              
              <div className="p-4 hover:text-blue-500">
                <h3 className="text-xl mt-20 font-bold">Advertising Posters</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Click to see more examples</p>
              </div>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
  <Image src="https://cdn.discordapp.com/attachments/1242493595479441460/1246912851797475388/images.webp?ex=665e1d96&is=665ccc16&hm=62e7aa2bd80c5be89885b353152ca9b2d250e7949d8a756e9ff5cdfe07d6f95a&s" alt="Project 3" width={400} height={300} className="h-52 blur-md" layout="responsive" />
  <Image src="https://cdn.discordapp.com/attachments/1242493595479441460/1246913159772504126/maxresdefault.jpg?ex=665e1ddf&is=665ccc5f&hm=737ab9704c7452b51b40401965751963db550516e8c92dfefb9a74a4d5edafc9&" alt="Project 3" width={400} height={300} className="h-52 blur-md" layout="responsive" />
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