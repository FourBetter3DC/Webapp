import Navbar from "../components/Navbar";
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function Homepage() {
  return (
    <div>
      <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home Page</h1>
          </div>
        </header>
        <main>
          <p>Welcome to the homepage</p>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/*Content goes here*/}</div>
        </main>
    </div>
  );
}

export default Homepage;
