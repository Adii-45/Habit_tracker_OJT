export default function Testimonials() {
  const users = [
    { name: "Sarah T.", role: "Writer", text: "I’ve finally stayed consistent journaling for 30 days. This app made it effortless." },
    { name: "James K.", role: "Software Engineer", text: "Seeing my progress visually keeps me motivated every day." },
    { name: "Priya R.", role: "Wellness Coach", text: "This is the only tracker I actually stuck with." },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">What our users say</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {users.map((u, i) => (
          <div key={i} className="p-8 bg-white shadow-md rounded-2xl">
            <p className="text-gray-700 mb-4">“{u.text}”</p>
            <h4 className="font-semibold">{u.name}</h4>
            <p className="text-gray-500 text-sm">{u.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}