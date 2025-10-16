const reviews = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zM9 11v2H7v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2z" />
      </svg>
    ),
    title: "venture",
    text: '"Working with this SaaSifye was an absolute game-changer! Their expertise helped us achieve incredible results"',
    author: "Mat Mursmark",
    role: "Chief Growth Officer",
    img: "https://img.freepik.com/free-photo/handsome-caucasian-man-wearing-casual-clothes-glasses-with-happy-cool-smile-face-lucky-person_839833-12772.jpg?semt=ais_hybrid&w=740&q=80",
    bgColor: "bg-pink-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zM6 11v2H4v-2h2zm5 0v2H9v-2h2zm5 0v2h-2v-2h2z" />
      </svg>
    ),
    title: "application",
    text: '"Working with them has been a transformative experience. Their solutions exceeded expectations and delivered outstanding results."',
    author: "Chris Milkulin",
    role: "Performance Marketer",
    img: "https://static.vecteezy.com/system/resources/thumbnails/050/820/367/small/happy-millennial-guy-talking-on-mobile-phone-and-smiling-at-camera-grey-studio-background-free-space-photo.jpg",
    bgColor: "bg-purple-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zM7 11v2H5v-2h2zm5 0v2h-2v-2h2zm5 0v2h-2v-2h2z" />
      </svg>
    ),
    title: "startup",
    text: '"Their approach is highly effective, driving impactful results while maintaining top-notch professionalism."',
    author: "Audrey Madden",
    role: "Chief Growth Officer",
    img: "https://thumbs.dreamstime.com/b/shh-keep-quiet-confidential-portrait-handsome-man-worker-denim-shirt-showing-silence-gesture-shh-keep-quiet-194991462.jpg",
    bgColor: "bg-orange-400",
  },
];

const ReviewCard = ({ icon, title, text, author, role, img, bgColor }) => {
  return (
    <div className="bg-[#110F1E] rounded-xl p-6 shadow-lg backdrop-blur-md max-w-sm flex flex-col justify-between hover:shadow-pink-500/40 transition-shadow duration-300">
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-white">{icon}</div>
        <h3 className="text-white font-semibold lowercase">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm mb-6">{text}</p>
      <div className="flex items-center space-x-3">
        <div
          className={`rounded-full w-10 h-10 flex-shrink-0 ${bgColor} overflow-hidden`}
        >
          <img src={img} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-semibold">{author}</h4>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TrustedSection = () => {
  return (
    <section className="min-h-screen bg-[#0e001d] flex flex-col items-center justify-center py-16 px-4 text-white relative">
      <span className="text-xs bg-black bg-opacity-30 rounded-full px-3 py-1 mb-3 backdrop-blur-sm shadow-inner">
        Review
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center max-w-4xl">
        Trusted by industry leaders
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
