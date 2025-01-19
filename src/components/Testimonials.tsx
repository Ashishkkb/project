interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content: "The quality of produce from Pure Pickers is exceptional. Every delivery brings the freshest vegetables straight to our doorstep. Their commitment to organic farming practices is truly commendable.",
    author: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">OUR TESTIMONIALS</h2>
        <h3 className="text-2xl font-bold text-center mb-12">WHAT THEY'RE TAKING ABOUT</h3>
        
        <div className="grid gap-8 md:grid-cols-1 lg:max-w-3xl lg:mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-lg">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}