
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-2">Aravind Vijay</h1>
        <p className="text-xl text-gray-600">
          Senior Android Developer | Kotlin | Jetpack Compose | MVVM
        </p>
        <p className="mt-2">
          Immediate Joiner | Open to Remote / Hybrid / On-site
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:aravindvijay07@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/Aravindvijay7" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/aravind-vijay-74198594" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-6">
          <a
            href="/Aravind_Vijay_Resume.pdf"
            download
            className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-xl font-medium">Rewards Module – Way.com</h3>
            <p className="text-sm text-gray-600">
              Jetpack Compose module for personalized offers and rewards. Used DataStore and LazyColumn for smooth UX.
            </p>
          </li>
          <li className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-xl font-medium">Mileage Tracker – Way.com</h3>
            <p className="text-sm text-gray-600">
              Built using Activity Recognition API, achieved 95% accuracy. Awarded Employee of the Month.
            </p>
          </li>
          <li className="bg-gray-100 p-4 rounded-xl shadow">
            <h3 className="text-xl font-medium">Booster Banking App</h3>
            <p className="text-sm text-gray-600">
              Kotlin + MVVM-based secure banking app for the New Zealand market.
            </p>
          </li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Aravind Vijay. Built with ❤️
      </footer>
    </main>
  );
}

export default App;