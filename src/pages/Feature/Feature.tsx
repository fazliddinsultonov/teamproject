import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

export default function Feature() {
  const lineData = [
    { name: "Jan", value: 800 },
    { name: "Feb", value: 900 },
    { name: "Mar", value: 850 },
    { name: "Apr", value: 1100 },
    { name: "May", value: 1532 },
  ];

  const barData = [
    { name: "Mon", uv: 300 },
    { name: "Tue", uv: 500 },
    { name: "Wed", uv: 400 },
    { name: "Thu", uv: 450 },
    { name: "Fri", uv: 600 },
    { name: "Sat", uv: 550 },
    { name: "Sun", uv: 380 },
  ];

  return (
    <div className="min-h-screen bg-[#0d0b14] text-white flex flex-col items-center py-16 px-6">
      <div className="max-w-6xl grid md:grid-cols-2 mt-16 gap-12 mb-24 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-10"
          >
            Create a website that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              attracts more clients
            </span>
          </motion.h1>

          {[
            {
              id: "01",
              title: "Real-time Collaboration",
              desc: "Work together with your team in real-time. Share progress instantly and keep everyone aligned.",
            },
            {
              id: "02",
              title: "Interactive Chart",
              desc: "Visualize your analytics and track progress with live charts and data insights.",
            },
            {
              id: "03",
              title: "Portfolio Management",
              desc: "Organize, analyze, and optimize your business assets efficiently and effectively.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="mb-8"
            >
              <p className="text-gray-500 mb-1">{item.id}</p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="w-full h-px bg-gradient-to-r from-purple-500 to-pink-500 mt-4"></div>
            </motion.div>
          ))}
        </div>


        {/* === Right categories === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1a1324] to-[#241933] p-8 rounded-2xl shadow-xl flex flex-col items-center"
        >
          <div className="grid grid-cols-2 gap-4 w-full">
            {[
              {
                label: "Financial Services",
                color: "from-purple-500 to-pink-400",
              },
              { label: "Tech", color: "from-pink-500 to-fuchsia-400" },
              { label: "AgriTech", color: "from-amber-400 to-orange-500" },
              {
                label: "Retail & E-commerce",
                color: "from-pink-400 to-purple-500",
              },
              {
                label: "Healthcare & pharmaceutical",
                color: "from-pink-500 to-rose-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#11101a] rounded-xl text-center py-3 px-4 shadow-md"
              >
                <p
                  className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ====== ANALYTICS CARDS (OLD PART) ====== */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {/* === Gauge Chart === */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#11101a] rounded-2xl p-6 shadow-lg"
        >
          <p className="text-gray-400 text-sm">Earnings</p>
          <h2 className="text-gray-500 text-sm mb-4">Total Expense</h2>
          <div className="relative flex items-center justify-center mb-4">
            <svg width="150" height="80">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                d="M10 70 A60 60 0 0 1 140 70"
                stroke="#222"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M10 70 A60 60 0 0 1 120 70"
                stroke="url(#grad)"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-3xl font-bold">40%</span>
          </div>
          <h3 className="text-lg font-bold">Set boards privacy</h3>
          <p className="text-gray-400 text-sm mt-2">
            Control access and enhance security by setting board privacy levels.
          </p>
        </motion.div>


        {/* === Line Chart === */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#11101a] rounded-2xl p-6 shadow-lg"
        >
          <p className="text-gray-400 text-sm">Earnings</p>
          <h2 className="text-gray-500 text-sm mb-4">Total Expense</h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={false}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <h3 className="text-2xl font-bold mt-4">$1,532</h3>
          <p className="text-gray-400 text-sm mt-2">
            Focus on what matters by prioritizing features that drive real
            value.
          </p>
        </motion.div>

        {/* === Bar Chart === */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#11101a] rounded-2xl p-6 shadow-lg"
        >
          <p className="text-gray-400 text-sm">Earnings</p>
          <h2 className="text-gray-500 text-sm mb-4">Total Expense</h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#555" />
                <YAxis stroke="#555" />
                <Tooltip />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="uv"
                  fill="url(#barGradient)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h3 className="text-lg font-bold mt-4">Merge duplicated post</h3>
          <p className="text-gray-400 text-sm mt-2">
            Consolidate your content by merging duplicated posts for a cleaner
            feed.
          </p>
        </motion.div>
      </div>

      {/* === Lower Section === */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mt-16">
        {[
          {
            title: "Cutting-Edge Analytics",
            text: "Leverage cutting-edge analytics to gain deeper insights, optimize strategies, and drive growth.",
          },
          {
            title: "Effortless Integrations",
            text: "Integrate seamlessly with your favorite tools to streamline workflows and boost productivity effortlessly.",
          },
          {
            title: "Intuitive User Experience",
            text: "Enjoy an intuitive user experience designed to simplify tasks and enhance efficiency across platforms.",
          },
        ].map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={i}
            className="bg-[#11101a] p-6 rounded-2xl shadow-lg border border-gray-800"
          >
            <p className="text-pink-400 text-2xl mb-3">✔️</p>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
