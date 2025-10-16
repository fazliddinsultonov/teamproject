import {
  FiGlobe,
  FiStar,
  FiHexagon,
  FiActivity,
  FiCloud,
  FiLayers,
  FiDroplet,
  FiZap,
  FiCircle,
} from "react-icons/fi";

const icons = [
  FiStar,
  FiHexagon,
  FiActivity,
  FiCloud,
  FiLayers,
  FiDroplet,
  FiZap,
  FiCircle,
  FiHexagon,
];

const WebFollow = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0e001d] to-[#1a0532] text-white flex flex-col items-center justify-center px-4">
      <div className="mb-5">
        <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
          <FiGlobe size={30} />
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-tight">
        Discover all-in-one system <br className="hidden md:block" /> integrated
        products
      </h1>

      <div className="flex gap-4 bg-black bg-opacity-30 px-6 py-3 rounded-full mb-10 backdrop-blur-sm shadow-inner">
        {icons.map((Icon, idx) => (
          <div
            key={idx}
            className="w-10 h-10 bg-black bg-opacity-60 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-opacity-80"
          >
            <Icon size={18} />
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
          Get Started Now
        </button>
        <button className="bg-black bg-opacity-50 text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-70 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default WebFollow;
