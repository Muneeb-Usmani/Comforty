"use client";
import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#272343] w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-12 border-y flex flex-wrap justify-between items-start gap-8">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex gap-2 items-center">
            <Image src="/LogoIcon.png" alt="logoicon" width={40} height={40} />
            <h3 className="text-2xl font-bold text-[#272343]">Comforty</h3>
          </div>
          <p className="text-[#272343] opacity-60 text-base leading-6">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras sagittis purus.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[#272343] hover:text-[#007580]">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580]">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580]">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580]">
              <FaPinterest />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580]">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-xs">
          <h3 className="text-sm text-[#9A9CAA] font-medium">CATEGORY</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Sofa",
              "Arm Chair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-[#272343] hover:text-[#007580] hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 max-w-xs">
          <h3 className="text-sm text-[#9A9CAA] font-medium">SUPPORT</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-[#272343] hover:text-[#007580] hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 max-w-lg">
          <h3 className="text-sm text-[#9A9CAA] font-medium">NEWSLETTER</h3>
          <form className="flex flex-wrap gap-2 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 border border-[#E1E3E5] px-4 py-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-[#029FAE] hover:bg-cyan-600 text-white px-6 py-2 rounded-lg"
              onClick={(e) => e.preventDefault()}
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#272343] opacity-60 text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-4 flex flex-wrap justify-between items-center text-sm text-[#9A9CAA]">
        <p>
          &copy; 2021 - Blogy - Designed & Developed by{" "}
          <span className="text-[#272343]">Zakirsoft</span>
        </p>
        <Image src="/Logos.png" width={227} height={27} alt="payment methods" />
      </div>
    </footer>
  );
};

export default Footer;
