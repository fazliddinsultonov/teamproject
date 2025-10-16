import { BarChart3, TrendingUp, Users, Clock } from 'lucide-react';

export default function ProductShowcase() {
  const expenses = [
    { category: 'Housing', amount: 439.82, max: 500, color: 'from-pink-500 to-pink-600' },
    { category: 'Utilities', amount: 320.45, max: 500, color: 'from-orange-500 to-orange-600' },
    { category: 'Food', amount: 180.20, max: 500, color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Boost sales productivity
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Increase team efficiency, streamline workflows, and achieve higher sales with smarter tools and automation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center text-pink-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Revenue Growth</h4>
                  <p className="text-gray-500 text-sm">Track and optimize your sales performance</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center text-pink-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Team Collaboration</h4>
                  <p className="text-gray-500 text-sm">Work together seamlessly in real-time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-pink-400" />
                  <h3 className="text-white font-semibold">Major Expenses</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Weekly</span>
                  <select className="bg-gray-800 text-white text-sm rounded-lg px-2 py-1 border border-gray-700">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>


              <div className="space-y-4">
                {expenses.map((expense, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">{expense.category}</span>
                      <span className="text-white font-semibold">${expense.amount.toFixed(2)}</span>
                    </div>
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${expense.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${(expense.amount / expense.max) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total</span>
                  <span className="text-2xl font-bold text-white">
                    ${expenses.reduce((sum, e) => sum + e.amount, 0).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-4 px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm font-semibold text-center border border-pink-500/30">
                CONVERSION RATE
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 border-4 border-pink-500/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">92%</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-gray-900"></div>
                  <div className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 border-4 border-gray-900"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-300">Completion Rate</span>
                  <span className="text-pink-400 font-semibold">92%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-300">Active Projects</span>
                  <span className="text-orange-400 font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                  <span className="text-gray-300">Team Members</span>
                  <span className="text-purple-400 font-semibold">8</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Create with ease
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Build powerful solutions effortlessly, automate tasks, and scale your business in no time.
            </p>


            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center text-orange-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Time Tracking</h4>
                  <p className="text-gray-500 text-sm">Monitor project time and productivity</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center text-orange-400">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Analytics Dashboard</h4>
                  <p className="text-gray-500 text-sm">Get insights from comprehensive data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
