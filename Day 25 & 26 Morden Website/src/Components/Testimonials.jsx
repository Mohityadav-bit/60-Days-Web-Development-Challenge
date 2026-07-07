import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "This platform completely changed the way I build interfaces. The workflow feels smooth, modern, and incredibly intuitive. It saved me hours of development time.",
  },
  {
    name: "Neha Verma",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "I love how clean and flexible everything feels. The design system is well thought out, and the experience is just premium from start to finish.",
  },
  {
    name: "Rohit Mehta",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    content:
      "We were able to launch faster without compromising on quality. The performance, scalability, and overall polish exceeded our expectations.",
  },
  {
    name: "Ananya Singh",
    role: "Full Stack Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Everything just works. From animations to responsiveness, it feels like a production-ready solution that actually understands developer needs.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              What Our Users
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by developers, designers, and founders worldwide to build
            faster and smarter.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300"
            >
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                “{item.content}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
