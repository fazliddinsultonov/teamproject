import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";
    import { Link } from "react-router-dom"
export default function Footer() {
    const links = [
    { name: "Style Guide", to: "#style-guide" },
    { name: "Licenses", to: "#licenses" },
    { name: "Changelog", to: "#changelog" },
    { name: "404", to: "/404" },
  ]
  return (
    <footer className="bg-[#0b0b0f] text-gray-300 py-16 px-8 md:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <h2 className="text-2xl font-semibold text-white">Sasifye</h2>
          </div>
          <p className="text-gray-400 mb-6">SaaS Website Template</p>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.instagram.com/0_absamatov_0/"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTelegram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium px-6 py-2 rounded-full hover:opacity-90 transition">
            Buy Template
          </button>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            {["Home", "Feature", "Pricing", "About", "Contact", "Blogs"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Utility Pages
          </h3>
     

 <ul className="flex flex-col space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.to}
            className="hover:text-white text-gray-300 transition-colors duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li>(62) 1829017</li>
            <li>
              <a href="mailto:hello@flowfye.com" className="hover:text-white">
                Hello@flowfye.com
              </a>
            </li>
            <li>
              2912 Meadowbrook Road,
              <br />
              Los Angeles, CA 90017
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-16 border-t border-gray-800 pt-6">
        © All rights reserved. Flowfye. Powered by Webflow.
      </div>
    </footer>
  );
}
