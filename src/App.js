import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-2">Aravind Vijay</h1>
        <p className="text-xl text-gray-600">Senior Android Developer | Kotlin | Jetpack Compose | MVVM</p>
        <p className="mt-2">Immediate Joiner | Open to Remote / Hybrid / On-site</p>
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
          <Button asChild>
            <a href="/Aravind_Vijay_Resume_Updated.pdf" download>
              Download Resume
            </a>
          </Button>
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
