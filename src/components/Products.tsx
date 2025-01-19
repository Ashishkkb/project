interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Onions',
    image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Carrot',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1546470427-0b1581df1a61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Beet Root',
    image: 'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Pepper',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-40 h-40 object-cover mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}