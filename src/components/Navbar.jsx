import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <h1 className="text-2xl font-bold text-black">Habitrix</h1>

      <ul className="hidden md:flex gap-10 text-black font-medium">
        <li>Home</li>
        <li>Features</li>
        <li>How it works</li>
        <li>Blog</li>
        <li>Resources</li>
        <li>About Us</li>
      </ul>

      <div className="flex gap-4">
        <Link to="/signup">
          <button className="px-5 py-2 bg-white text-black rounded-full shadow">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="px-5 py-2 border border-black rounded-full">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}
