import { Users, ClipboardCheck, MessageSquare, Award, Briefcase, FileCheck} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900">

      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 
                         bg-gradient-to-r from-emerald-600 to-emerald-700 
                         text-white shadow-md">
        <h1 className="text-2xl font-bold">Virtual Internship</h1>

        <nav className="flex gap-8 font-medium">
          <a href="#" className="hover:text-emerald-200">Home</a>
          <a href="#" className="hover:text-emerald-200">Features</a>
          <a href="#" className="hover:text-emerald-200">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 mt-20 flex items-center justify-between">
        {/* Left */}
        <div className="max-w-xl">
          <h2 className="text-6xl font-bold leading-tight text-gray-900">
            Build Real Experience with AI-Powered Internships
          </h2>

          <p className="text-lg text-gray-700 mt-6">
          Join internships that simulate real company environments and get job-redy through hands-on projects, mentorship, and teamwork. Work with virtual teams, complete real tasks, gain hands-on experience —
            just like working in a real company.
          </p>

          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 
                             text-white rounded-xl text-lg shadow-md hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* Right Image Placeholder */}
        <div className="hidden md:block">
  <img
    src="src/assets/Hero-image.jpg"
    alt="Hero"
    className="w-[650px] h-[420px] object-cover rounded-2xl shadow-xl border border-emerald-200"
  />
</div>



      </section>

      {/* How It Works */}
      <section className="px-10 mt-28">
  <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>

  <div className="grid md:grid-cols-3 gap-10 mt-12">

    <div className="p-6 rounded-2xl border border-emerald-300 bg-white shadow-sm hover:shadow-xl transition">
      <Users className="w-12 h-12 text-emerald-600 mb-4" />
      <h4 className="text-xl font-semibold text-gray-900">Join a Virtual Team</h4>
      <p className="text-gray-700 mt-2">
       Work with AI teammates that behave like real developers.
      </p>
    </div>

    <div className="p-6 rounded-2xl border border-emerald-300 bg-white shadow-sm hover:shadow-xl transition">
      <ClipboardCheck className="w-12 h-12 text-emerald-600 mb-4" />
      <h4 className="text-xl font-semibold text-gray-900">Work on Real Tasks</h4>
      <p className="text-gray-700 mt-2">
      Build real-world experience with industry-level task structures.
      </p>
    </div>

    <div className="p-6 rounded-2xl border border-emerald-300 bg-white shadow-sm hover:shadow-xl transition">
      <MessageSquare className="w-12 h-12 text-emerald-600 mb-4" />
      <h4 className="text-xl font-semibold text-gray-900">Get Feedback</h4>
      <p className="text-gray-700 mt-2">
        Receive instant code reviews and performance analysis.
      </p>
    </div>

  </div>
</section>

      {/* Why Choose Us */}
      <section className="px-10 mt-28">
  <h3 className="text-3xl font-bold text-gray-900">Why Choose Us?</h3>

  <div className="grid md:grid-cols-3 gap-10 mt-12">

    <div className="p-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-lg">
      <Award className="w-12 h-12 mb-4 text-emerald-100" />
      <h4 className="text-xl font-semibold">Realistic Experience</h4>
      <p className="mt-2 text-emerald-100">
        Work in environments that match real tech companies.
      </p>
    </div>

    <div className="p-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-lg">
      <Briefcase className="w-12 h-12 mb-4 text-emerald-100" />
      <h4 className="text-xl font-semibold">Industry Tasks</h4>
      <p className="mt-2 text-emerald-100">
        Tasks follow real-world workflows and engineering practices.
      </p>
    </div>

    <div className="p-8 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-lg">
      <FileCheck className="w-12 h-12 mb-4 text-emerald-100" />
      <h4 className="text-xl font-semibold">Portfolio Ready</h4>
      <p className="mt-2 text-emerald-100">
        Graduate with real projects, experience, and confidence.
      </p>
    </div>

  </div>
</section>
      {/* Testimonials */}
      <section className="px-10 mt-28 mb-28">
        <h3 className="text-3xl font-bold text-gray-900">Testimonials</h3>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm">
            <p className="text-gray-700">
              “This platform gave me real confidence. It felt like working at a modern startup.”
            </p>
            <h4 className="mt-4 font-semibold text-emerald-700">— Sarah, Frontend Developer</h4>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm">
            <p className="text-gray-700">
              “The feedback and AI teammates helped me improve more than any bootcamp.”
            </p>
            <h4 className="mt-4 font-semibold text-emerald-700">— Daniel, Backend Intern</h4>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-emerald-200 shadow-sm">
            <p className="text-gray-700">
              “I came in with only theory. Now I feel ready for real interviews.”
            </p>
            <h4 className="mt-4 font-semibold text-emerald-700">— Maya, Software Engineering Student</h4>
          </div>

        </div>
      </section>
    </div>
  );
}
