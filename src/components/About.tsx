"use client";
import About1 from "./Images/About1.svg";
import About2 from "./Images/About2.svg";
import About3 from "./Images/About3.svg";

export default function About() {
  return (
    <div className="bg-white">
      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="relative h-[600px] w-full">
                <img
                  src={About1}
                  alt="Farmers in field at sunset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#F3C649]/20"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#F3C649] w-24 h-24 -z-10"></div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <span className="text-sm uppercase tracking-wider">
                Who are we
              </span>
              <h1 className="text-4xl font-bold leading-tight">
                Pure Agri and Organic Form
              </h1>
              <h2 className="text-xl text-[#F3C649]">
                Exporting the Essence of India
              </h2>
              <p className="text-gray-600 leading-relaxed">
                "Pure Pickers Agri Pvt Ltd is a commodity based enterprise of
                export of agricultural products. We focus on export of
                agricultural food from India to across Globe. Founded with a
                simple objective to manufacture, packing and market with purest
                and edible food products that would cater as healthier with
                keeping the freshness on affordability to large volume of end
                consumers"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nourishing Lives Section */}
      <section className="py-16 bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#5C7C50] p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">
                Nourishing the lives
                <br />
                with Nature's Best
              </h2>
              <p className="mb-8 leading-relaxed">
                Bringing you the premium veggies, grown with sustainability and
                delivered with care. Our commitment is to provide global
                consumers with the freshness that we guarantee.
              </p>
              <button className="text-sm bg-transparent border border-white px-6 py-3 hover:bg-white hover:text-[#5C7C50] transition-colors">
                EXPERIENCE THE FRESHNESS
              </button>
            </div>
            <div>
              <img
                src={About2}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={About3}
                alt="Fresh vegetables"
                className="w-full rounded-lg"
              />
              {/* <div className="absolute bottom-6 right-6 bg-[#F3C649] p-6 rounded-lg">
                <div className="text-white">
                  <div className="text-sm font-medium">Call Us At</div>
                  <div className="text-2xl font-bold">666 888 0000</div>
                </div>
              </div> */}
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Our Commitment to
                <br />
                Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to provide with the freshness to sustainably
                grown veggies with no compromise in quality and care and without
                losing the nutritional value. Every product is cultivated with a
                passion of preserving the nature's goodness while meeting the
                agricultural standards and ethics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We bridge the gap between farms and tables by providing
                wholesome and delicious to consumers worldwide. Our focus is
                primarily on sustainability and freshness that our vegetables
                reflect with our unwavering dedication to taste,freshness and
                health with green environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
