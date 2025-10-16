import React, { useState, useRef } from "react";

const FullScreenBankCard: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    const centerX = x - 50;
    const centerY = y - 50;
    setRotation({
      x: -(centerX / 3.5),
      y: centerY / 2,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-0 m-0 overflow-hidden relative">
      {/* Background grid image */}
      <img
        src="https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6818a98509147f8d6c502cf3_Seperator%20(1).png"
        alt="Background grid"
        className="absolute top-0 left-0 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Floating dots */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-float pointer-events-none"
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

      {/* Full Screen Card */}
      <div
        ref={cardRef}
        className="relative w-250 h-150 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          zIndex: 10,
        }}
      >
        {/* Background Dashboard Image */}
        <div
          className="absolute inset-0 w-250"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/685cdb978eafa49a181f3394_8d42be206176adb261b02f8c87df4f2c_dashboard%20visual-p-2000.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Overlay Effects */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            background: `linear-gradient(
              125deg,
              hsla(283, 80%, 60%, 0.6) 5%,
              hsla(2, 80%, 59%, 0.5) 15%,
              hsla(53, 80%, 53%, 0.6) 25%,
              hsla(93, 80%, 52%, 0.5) 35%,
              hsla(176, 80%, 50%, 0.6) 45%,
              hsla(228, 80%, 77%, 0.5) 55%,
              hsla(283, 80%, 61%, 0.6) 65%
            )`,
            backgroundSize: "300% 400%",
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />

        {/* Glare Effect */}
        <div
          className="absolute inset-0 mix-blend-screen pointer-events-none transition-opacity duration-300"
          style={{
            opacity: 0.2,
            background: `linear-gradient(
              105deg,
              transparent 10%,
              rgba(255,255,255,0.8) 25%,
              rgba(255,255,255,0.9) 50%,
              rgba(255,255,255,0.8) 75%,
              transparent 90%
            )`,
            backgroundSize: "200% 200%",
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />{/* Border Effects */}
        <div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          style={{
            backgroundPositionX: `${mousePosition.x}%`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          style={{
            backgroundPositionX: `${mousePosition.x}%`,
          }}
        />
        <div
          className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
          style={{
            backgroundPositionY: `${mousePosition.y}%`,
          }}
        />
        <div
          className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
          style={{
            backgroundPositionY: `${mousePosition.y}%`,
          }}
        />
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

        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FullScreenBankCard;