import Navbar from "../components/Navbar";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import HomepageSelect from "../components/HomepageSelect";
import ProgressBar from "../components/ProgressBar";

function Homepage() {
  return (
    <div>
      <header className="bg-white shadow">
          <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome to FourBetter!</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">You have 4 new exercises!</h1>
          <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-0">
          <ProgressBar percentage={25} />
          </div>
          </div>
          <HomepageSelect />
        </main>
    </div>
  );
}

export default Homepage;
