import f1 from "./Images/f1.svg"
import f2 from "./Images/f2.svg"
import f3 from "./Images/f3.svg"
import f4 from "./Images/f4.svg"
import f5 from "./Images/f5.svg"
import f6 from "./Images/f6.svg"

interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Onions',
    image:f4,
  },
  {
    name: 'Carrot',
    image: f5,
  },
  {
    name: 'Tomato',
    image:f6,
  },
  {
    name: 'Beet Root',
    image: f2
  },
  {
    name: 'Pepper',
    image:f3,
  },
  {
    name: 'Spinach',
    image: f1
  }
];

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#fafafa] rounded-lg p-8 w-full aspect-square flex items-center justify-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-[45vw] min-h-[50vh] object-stretch"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-center">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}