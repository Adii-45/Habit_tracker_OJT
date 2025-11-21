export default function Features() {
  const data = [
    {
      title: "Smart Reminders",
      desc: "Never miss a habit again. Set daily notifications.",
    },
    {
      title: "Progress Analytics",
      desc: "See your growth with streaks, weekly charts, and insights.",
    },
    {
      title: "Streak Tracking",
      desc: "Stay motivated with unbreakable streaks.",
    },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Why you’ll love it</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((f, i) => (
          <div key={i} className="p-8 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}