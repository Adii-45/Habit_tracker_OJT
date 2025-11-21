import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="bg-[#bfe0ff] py-20 px-8 text-center rounded-3xl mt-10">
      <h2 className="text-4xl font-bold">Ready to build better habits?</h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        Take control of your routines, stay consistent, and build meaningful
        progress — one habit at a time.
      </p>

      <Link to="/signup">
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full">
          Start Tracking — It’s Free
        </button>
      </Link>
    </section>
  );
}
