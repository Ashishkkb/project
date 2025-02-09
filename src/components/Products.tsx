import f1 from "./Images/f1.svg";
import f2 from "./Images/f2.svg";
import f3 from "./Images/f34.webp"
import f4 from "./Images/f4.svg";
import f5 from "./Images/f5.svg";
import f6 from "./Images/f6.svg";
import AnimatedCard from "./AnimatedCard"; // Import the AnimatedCard component

const products = [
  { name: "Onions", image: f4 },
  { name: "Carrot", image: f5 },
  { name: "Tomato", image: f6 },
  { name: "Beet Root", image: f2 },
  { name: "Capsicum", image: f3 },
  { name: "Spinach", image: f1 },
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedCard
              key={index}
              title={product.name}
              description="Click to learn more!"
              content="Here is a lot of amazing information about this product. This modal provides deep insights, specifications, and everything you need to know."
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
