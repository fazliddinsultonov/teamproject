import React, { useState, useEffect } from "react";

const ProductOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-[#0b0b17] min-h-screen text-white px-4 sm:px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24 overflow-hidden">
      <img
        src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6818a98509147f8d6c502cf3_Seperator%20(1).png"
        alt="Background grid"
        className="absolute top-0 left-0  object-cover pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      <div
        className={`relative z-10 max-w-2xl transition-all duration-700 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
      >
        <span className="inline-block text-sm px-4 py-2 rounded-full border border-[#b375ef] text-[#b375ef] mb-6 bg-[#b375ef]/10 hover:bg-[#b375ef]/20 transition-all duration-300 hover:scale-105">
          Product Overview
        </span>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
          Build a website <br />
          <span className="text-transparent bg-gradient-to-r from-[#b375ef] to-[#ff6b9d] bg-clip-text">
            that wins you
          </span>{" "}
          <br />
          more customers
        </h1>

        <p className="text-gray-300 mb-8 max-w-lg text-lg leading-relaxed">
          Create a powerful online presence that engages your audience and
          drives business growth. Optimize your site for success with ease and
          speed.
        </p>

        <ul className="space-y-4 mb-8">
          {[
            "Streamline your workflow with intuitive, seamless design.",
            "Enhance UX with custom features and speed.",
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300"
            >
              <div className="bg-gradient-to-tr from-pink-400 to-purple-400 p-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-medium group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <button className="group relative overflow-hidden border border-[#b375ef] rounded-full px-8 py-4 text-[#b375ef] hover:text-white transition-all duration-500 hover:scale-105 mb-12">
          <span className="relative z-10 font-semibold">🚀 Learn More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#b375ef] to-[#ff6b9d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button><div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
          {[
            {
              title: "Advanced Analytics",
              desc: "Gain actionable insights with powerful data tools.",
            },
            {
              title: "Seamless Integrations",
              desc: "Connect your favorite tools effortlessly.",
            },
            {
              title: "User-Friendly Design",
              desc: "Experience intuitive design that enhances usability.",
            },
          ].map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <h4 className="font-semibold text-white mb-2 text-sm">{title}</h4>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`relative z-10 transition-all duration-700 delay-300 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
        }`}
      >
        <div className="card">
          <img
            src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6819ff8e8dd850dcac6f8cf8_product%20overview%20image%20visual.avif"
            alt="Product overview"
            className=" object-cover rounded-[6px]"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(4px);
          }
          50% {
            transform: translateY(-12px) translateX(-2px);
          }
          75% {
            transform: translateY(-6px) translateX(3px);
          }
        }

        .card {
          --card-height: 60vh;
          --card-width: calc(var(--card-height) / 1.5);
          background: #191c29;
          width: var(--card-width);
          height: var(--card-height);
          padding: 3px;
          position: relative;
          border-radius: 6px;
          justify-content: center;
          align-items: center;
          text-align: center;
          display: flex;
          font-size: 1.5em;
          color: rgb(88 199 250 / 0%);
          cursor: pointer;
          font-family: cursive;
        }

        .card:hover {
          color: rgb(88 199 250 / 100%);
          transition: color 1s;
        }

        .card:hover:before,
        .card:hover:after {
          animation: none;
          opacity: 0;
        }

        .card::before {
          content: "";
          width: 104%;
          height: 102%;
          border-radius: 8px;
          background-image: linear-gradient(
            var(--rotate, 132deg),
            #5ddcff,
            #3c67e3 43%,
            #4e00c2
          );
          position: absolute;
          z-index: -1;
          top: -1%;
          left: -2%;
          animation: spin 2.5s linear infinite;
        }

        .card::after {
          position: absolute;
          content: "";
          top: calc(var(--card-height) / 6);
          left: 0;
          right: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          transform: scale(0.8);
          filter: blur(calc(var(--card-height) / 6));
          background-image: linear-gradient(
            var(--rotate, 132deg),
            #5ddcff,
            #3c67e3 43%,
            #4e00c2
          );
          opacity: 1;
          transition: opacity 0.5s;
          animation: spin 2.5s linear infinite;
        }

        @keyframes spin {
          0% {
            --rotate: 0deg;
          }
          100% {
            --rotate: 360deg;
          }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }@property --rotate {
          syntax: "<angle>";
          initial-value: 132deg;
          inherits: false;
        }
      `}</style>
    </div>
  );
};

export default ProductOverview;