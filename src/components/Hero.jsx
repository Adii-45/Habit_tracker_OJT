import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#6a5af9] to-[#8753f4] text-white pt-32 pb-40 px-8 overflow-hidden rounded-b-[40px]">
      
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 left-20 w-14 h-14 bg-white/10 rounded-full blur-md"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-28 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
      <div className="absolute bottom-10 right-40 w-12 h-12 bg-black/20 rounded-full blur-md"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Build Better Habits. <br /> One Day at a Time.
        </h1>

        <p className="mt-4 text-lg opacity-90">
          Track your daily routines, stay consistent, and turn goals into habits —
          all in one beautiful app.
        </p>

        <Link to="/signup"><button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold shadow">
          Get Started Free
        </button></Link>

        <div className="mt-4 flex justify-center">
          <span className="bg-black/40 px-4 py-2 rounded-full text-sm">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Loved by 1M+ users worldwide
          </span>
        </div>
      </div>
    </section>
  );
}