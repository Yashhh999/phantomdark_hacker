// pages/index.js
import Image from 'next/image';
export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/1242493595479441460/1246520938158100622/2fcd0099-3516-40a6-9938-bf7829158846.jpg?ex=665cb096&is=665b5f16&hm=c02fc5137611caff8f18a205d442c4dec66806851e6b789451ea0c64e9b033d8&')" }}>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center bg-black bg-opacity-50 p-6 md:p-12 rounded-lg">
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome to Doodle Freaks</h1>
            <p className="mt-4 text-lg md:text-2xl text-gray-300">We are a team of Graphic Designer specializing in stunning visuals and creative designs.</p>
            <a href="#portfolio" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">View our Works</a>
          </div>
          <div className="md:w-1/2 text-center">
            <img src="https://cdn.discordapp.com/attachments/1242493595479441460/1246523534788792340/dc.jpg?ex=665cb301&is=665b6181&hm=843c4c26708b31979e0fd35b2b260e8de150ed1f67c802eb42f157131a96014e&" alt="Phantom" width={400} height={400} className="rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            Hi, I'm Phantom, a passionate graphic designer with over 5 years of experience. I specialize in creating eye-catching designs that help brands stand out. From logos to full-scale branding projects, I bring a unique and artistic touch to every project I work on.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      
      
    </div>
  );
}