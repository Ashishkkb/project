export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-lg mb-2">Pure & Natural</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Agriculture Matter
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Good production
          </h2>
          <p className="text-xl mb-8 max-w-2xl">
            Bringing quality agriculture and food products to the world, straight from India's finest farms.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors">
            DISCOVER THE PUREST TASTE!
          </button>
        </div>
      </div>
    </div>
  );
}
