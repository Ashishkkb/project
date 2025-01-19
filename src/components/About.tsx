import { Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Farmers in field at sunset"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F3C649] w-32 h-32 rounded-lg -z-10"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm uppercase text-[#96B66C] font-medium mb-2">OUR INTRODUCTION</span>
              <h2 className="text-4xl font-bold mb-4">Pure Agriculture and<br />Organic Form</h2>
              <h3 className="text-xl text-[#F3C649] mb-6">Exporting the Essence of India</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Pure Pickers Agri Pvt Ltd is a commodity trading enterprise is a part of export agricultural products. We focus on export of agricultural and processed food from India to across globe. We founded with a simple objective to manufacture, package and market with purest edible food products that would cater as healthier and tastier solutions to millions of consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nourishing Lives Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#96B66C] p-12 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-4">Nourishing Lives<br />with Nature's Best</h2>
              <p className="mb-8">
                Bringing you premium vegetables, grown sustainably and delivered with care. Our commitment is to provide global consumers with freshness they can trust.
              </p>
              <button className="bg-white text-[#96B66C] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors uppercase text-sm">
                EXPERIENCE THE FRESHNESS
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Fresh vegetables in basket"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Fresh vegetables"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-8 right-8 bg-[#F3C649] p-6 rounded-lg flex items-center space-x-3">
                <Phone size={24} className="text-white" />
                <div className="text-white">
                  <div className="text-sm">Call Us At</div>
                  <div className="text-xl font-bold">666 888 0000</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are dedicated to delivering the freshest, sustainably-grown vegetables, prioritizing quality, nutrition, and care. Every product is cultivated with a passion for preserving nature's goodness while meeting the highest standards of agricultural excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By bridging the gap between farms and tables, we strive to bring wholesome, delicious produce to consumers worldwide. Our focus on sustainability and freshness ensures that each vegetable reflects our unwavering dedication to health, taste, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}