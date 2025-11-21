export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-16 px-8 rounded-t-3xl mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-xl font-bold mb-4">Habitrix</h2>
          <p className="text-gray-300">
            Track your routines and turn goals into habits.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <p className="text-gray-300">Features</p>
          <p className="text-gray-300">Pricing</p>
          <p className="text-gray-300">FAQ</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <p className="text-gray-300">About</p>
          <p className="text-gray-300">Contact</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg text-black w-full" />
          <button className="mt-3 w-full bg-orange-500 py-2 rounded-lg">Subscribe</button>
        </div>
      </div>

      <p className="text-gray-400 text-center mt-10">
        © 2025 Habitrix. All rights reserved.
      </p>
    </footer>
  );
}