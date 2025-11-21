import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#6558F5] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-bold mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-sm" />
        Habitrix
      </h1>

      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <input
          type="text"
          placeholder="User"
          className="w-full bg-white text-gray-700 py-4 rounded-xl shadow-md text-center"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-white text-gray-700 py-4 rounded-xl shadow-md text-center"
        />

        <button className="w-full bg-white text-gray-800 font-semibold py-4 rounded-xl shadow-md">
          Login
        </button>

        <p className="text-sm mt-2 text-white/90">
          Dont have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up Here
          </Link>
        </p>
      </div>
    </div>
  );
}