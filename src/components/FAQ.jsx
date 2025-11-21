export default function FAQ() {
  const faq = [
    "What do I get with Premium?",
    "What happens if I miss a day?",
    "How does streak tracking work?",
    "Can I customize my habit reminders?",
  ];

  return (
    <section className="py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faq.map((q, i) => (
          <div key={i} className="p-6 bg-[#d4efff] rounded-xl flex justify-between">
            <span>{q}</span>
            <span>⌄</span>
          </div>
        ))}
      </div>

      <p className="mt-6 underline cursor-pointer">View All FAQs</p>
    </section>
  );
}