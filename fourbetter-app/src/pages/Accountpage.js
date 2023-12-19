import Navbar from "../components/Navbar";

function Accountpage() {
  return (
    <div>
      <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Account Details</h1>
          </div>
        </header>
        <main>
          <p>Welcome to the account page.</p>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
    </div>
  );
}

export default Accountpage;
