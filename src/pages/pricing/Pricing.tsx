import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you have a free trial?",
    answer:
      "Yes! We offer a 7-day free trial with full access to all premium features.",
  },
  {
    question: "Do you offer any early startup discounts?",
    answer:
      "Absolutely. Startups can get up to 40% off with our startup support program.",
  },
  {
    question: "Can I get a discount if I commit yearly?",
    answer:
      "Yes, annual subscriptions come with a 20% discount automatically applied.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Most users start seeing improvements within the first week of consistent use.",
  },
  {
    question: "How do I do when I have a question?",
    answer:
      "You can contact our support team anytime via live chat or email support.",
  },
  {
    question: "How will I be kept informed of my case?",
    answer:
      "You’ll receive automatic updates via email and dashboard notifications.",
  },
];

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#090014] text-white font-sans overflow-x-hidden">
      <section className="text-center py-20 mt-16 bg-gradient-to-b from-[#0f0220] to-[#090014]">
        <h1 className="text-5xl font-extrabold mb-4">Pricing Plans</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Choose a plan that fits your needs and scale your business
          confidently.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-16">
        {[
          {
            name: "Basic",
            price: "$9/mo",
            features: ["1 Project", "Email Support", "Basic Analytics"],
            color: "from-pink-500 to-purple-600",
          },
          {
            name: "Pro",
            price: "$29/mo",
            features: ["10 Projects", "Priority Support", "Advanced Analytics"],
            color: "from-purple-500 to-indigo-600",
          },
          {
            name: "Enterprise",
            price: "$79/mo",
            features: [
              "Unlimited Projects",
              "Dedicated Support",
              "Custom Integrations",
            ],
            color: "from-indigo-500 to-blue-600",
          },
        ].map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#11042a] rounded-2xl p-8 border border-gray-800 hover:border-purple-600 transition-all"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-4xl font-extrabold mb-6 bg-gradient-to-r text-transparent bg-clip-text from-pink-500 to-purple-500">
              {plan.price}
            </p>
            <ul className="space-y-2 mb-8 text-gray-400">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${plan.color} hover:opacity-90 transition`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </section>


      {/* FAQ Section */}
      <section className="relative px-6 py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Side */}
          <div>
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-medium">
              FAQ
            </div>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Frequently asked <br /> questions
            </h2>
            <p className="text-gray-400 mb-8">
              Find answers to common queries and get the information you need
              quickly and easily.
            </p>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all">
              Contact Us
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-700 pb-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold hover:text-pink-400 transition-colors">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-pink-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-pink-500" />
                  )}
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>


        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)] -z-10"></div>
      </section>
    </div>
  );
}
