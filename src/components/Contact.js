// components/Contact.js
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaDiscord } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="mt-6 text-lg md:text-xl">Feel free to Contact us through social media/email</p>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://x.com/doodle_freaks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/doodlefreakstudios" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="mailto:freaksdoodle@gmail.com" className="text-gray-500 hover:text-red-600 transition duration-300">
            <FaEnvelope size={30} />
          </a>
          <a href="https://wa.me/+919830733489" className="text-gray-500 hover:text-green-600 transition duration-300">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://discord.gg/XT7HcyPJ3Z" className="text-gray-500 hover:text-blue-600 transition duration-300">
            <FaDiscord size={30} />
          </a>
        </div>
        <div className="mt-10 text-gray-400">
        Copyright © Website Made by <span className="text-blue-500"> <Link href="https://yashit.me/">Yash</Link> </span> All rights reserved.
        </div>
      </div>

    </section>
  );
}
