import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<FormData>;
type Status = {
  loading: boolean;
  success: boolean | null;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({
    loading: false,
    success: null,
    message: "",
  });

  const [messages, setMessages] = useState<FormData[]>([]);

  function validate() {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Ism kiriting";
    if (!form.email.trim()) e.email = "Email kiriting";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email))
      e.email = "Noto'g'ri email";
    if (!form.subject.trim()) e.subject = "Mavzu kiriting";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Xabar kamida 10 ta belgidan bo'lishi kerak";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus({ loading: true, success: null, message: "" });

    setTimeout(() => {
      setMessages((prev) => [form, ...prev]); 
      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({
        loading: false,
        success: true,
        message: "✅ Xabaringiz muvaffaqiyatli yuborildi!",
      });
    }, 1500);
  }

  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-200 py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Biz bilan bog'laning
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Sizda savol yoki taklif bormi? Quyidagi formani to'ldiring yoki biz
            bilan to'g'ridan-to'g'ri bog'laning.
          </p>

          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-4 bg-gray-800/50 p-5 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <span className="text-indigo-400 text-2xl">📞</span>
              <div>
                <p className="text-sm text-gray-400">Telefon</p>
                <p className="font-medium text-gray-100">+1 (62) 1829017</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-5 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <span className="text-indigo-400 text-2xl">✉️</span>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-gray-100">hello@sasifye.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-800/50 p-5 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <span className="text-indigo-400 text-2xl">📍</span>
              <div>
                <p className="text-sm text-gray-400">Manzil</p>
                <p className="font-medium text-gray-100">
                  2912 Meadowbrook Road, Los Angeles, CA 90017
                </p>
              </div>
            </div>
          </div>


          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 mt-8">
            <iframe
              title="location-map"
              src="https://www.google.com/maps?q=Los+Angeles+CA+90017&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 hover:border-indigo-600 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-gray-300">Ism</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`mt-1 w-full px-4 py-2 bg-gray-950 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Ismingiz"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`mt-1 w-full px-4 py-2 bg-gray-950 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Mavzu</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={`mt-1 w-full px-4 py-2 bg-gray-950 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none ${
                  errors.subject ? "border-red-500" : "border-gray-700"
                }`}
                placeholder="Mavzu"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Xabar</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`mt-1 w-full px-4 py-2 bg-gray-950 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none ${
                  errors.message ? "border-red-500" : "border-gray-700"
                }`}
                placeholder="Xabaringizni yozing..."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition disabled:opacity-60"
            >
              {status.loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>


            {status.success && (
              <p className="text-green-400 text-sm text-center mt-2 animate-pulse">
                {status.message}
              </p>
            )}
          </form>

          {messages.length > 0 && (
            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">
                Yuborilgan xabarlar
              </h3>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-indigo-500 transition"
                >
                  <p className="text-indigo-400 font-semibold mb-1">
                    {m.name} ({m.email})
                  </p>
                  <p className="text-sm text-gray-400 italic mb-2">
                    Mavzu: {m.subject}
                  </p>
                  <p className="text-gray-300">{m.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
