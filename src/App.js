import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function DownloadIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" />
    </svg>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900 px-6 pb-12 font-sans">
      <section className="text-center py-16 relative">
        <div className="flex justify-center mb-4">
          <img
            src="/logo192.png"
            alt="Aravind Vijay"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg object-cover animate-fade-in"
          />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-800 drop-shadow-lg font-sans">
          Aravind Vijay
        </h1>
        <p className="text-lg mt-2 text-gray-700 font-medium">
          Senior Android Developer | Kotlin | Jetpack Compose | MVVM
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Immediate Joiner | Open to Permanent - Remote / Hybrid / On-site
        </p>
        <div className="flex justify-center items-center gap-8 mt-4">
          <a href="mailto:aravindvijay07@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-12 h-12 hover:text-blue-500 hover:scale-110 transition duration-200 drop-shadow" />
          </a>
          <a href="https://github.com/Aravindvijay7" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-12 h-12 hover:text-blue-500 hover:scale-110 transition duration-200 drop-shadow" />
          </a>
          <a href="https://linkedin.com/in/aravind-vijay-74198594" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-12 h-12 hover:text-blue-500 hover:scale-110 transition duration-200 drop-shadow" />
          </a>
        </div>
        <div className="mt-6 flex items-end">
          <a
            href="/Aravind_Vijay_Resume.pdf"
            download
            className="inline-flex items-end gap-2 px-6 py-2 text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 hover:scale-105 transition duration-200 font-semibold text-lg"
          >
            <DownloadIcon style={{ width: '24px', height: '32px' }} className="align-bottom" />
            Download Resume
          </a>
        </div>
   
      </section>

      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-700 tracking-tight font-sans drop-shadow">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-400 hover:shadow-xl hover:-translate-y-1 transition duration-200 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-1 text-blue-800">Rewards Module – Way.com</h3>
            <p className="text-sm text-gray-600">
              Jetpack Compose-based personalized rewards UI. Integrated DataStore and LazyColumn for seamless experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-400 hover:shadow-xl hover:-translate-y-1 transition duration-200 animate-fade-in-up delay-100">
            <h3 className="text-xl font-semibold mb-1 text-blue-800">Mileage Tracker – Way.com</h3>
            <p className="text-sm text-gray-600">
              Used Activity Recognition API to track user activity with 95% accuracy. Recognized as Employee of the Month.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-400 hover:shadow-xl hover:-translate-y-1 transition duration-200 animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold mb-1 text-blue-800">Booster Banking App</h3>
            <p className="text-sm text-gray-600">
              Kotlin + MVVM-based secure mobile banking application for the New Zealand market.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-400 hover:shadow-xl hover:-translate-y-1 transition duration-200 animate-fade-in-up delay-300">
            <h3 className="text-xl font-semibold mb-1 text-blue-800">Swiss Volley & Volunteer</h3>
            <p className="text-sm text-gray-600">
              Developed Flutter-based event and sports management platforms tailored for the Swiss market.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-xs mt-16">
        &copy; {new Date().getFullYear()} Aravind Vijay. Built with <span className="text-red-400">❤️</span> using React + Tailwind.
      </footer>
    </main>
  );
}

export default App;
