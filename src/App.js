import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900 px-6 pb-12 font-sans">
      <section className="text-center py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 drop-shadow-sm">
          Aravind Vijay
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          Senior Android Developer | Kotlin | Jetpack Compose | MVVM
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Immediate Joiner | Open to Remote / Hybrid / On-site
        </p>
        <div className="flex justify-center gap-5 mt-4">
          <a href="mailto:aravindvijay07@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6 hover:text-blue-500 transition duration-200" />
          </a>
          <a href="https://github.com/Aravindvijay7" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-blue-500 transition duration-200" />
          </a>
          <a href="https://linkedin.com/in/aravind-vijay-74198594" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition duration-200" />
          </a>
        </div>
        <div className="mt-6">
          <a
            href="/Aravind_Vijay_Resume_Updated.pdf"
            download
            className="inline-block px-6 py-2 text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition duration-200"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">Rewards Module – Way.com</h3>
            <p className="text-sm text-gray-600">
              Jetpack Compose-based personalized rewards UI. Integrated DataStore and LazyColumn for seamless experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">Mileage Tracker – Way.com</h3>
            <p className="text-sm text-gray-600">
              Used Activity Recognition API to track user activity with 95% accuracy. Recognized as Employee of the Month.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">Booster Banking App</h3>
            <p className="text-sm text-gray-600">
              Kotlin + MVVM-based secure mobile banking application for the New Zealand market.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">Swiss Volley & Volunteer</h3>
            <p className="text-sm text-gray-600">
              Developed Flutter-based event and sports management platforms tailored for the Swiss market.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-xs mt-16">
        &copy; {new Date().getFullYear()} Aravind Vijay. Built with ❤️ using React + Tailwind.
      </footer>
    </main>
  );
}

export default App;
