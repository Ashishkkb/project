import bgImage from "./image.png"; // Adjust the path if needed
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center HeroBg"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-green-900/30" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            {/* <span className="text-2xl font-light border-b-2 border-[#FFD77D]">
              Pure & Natural
            </span> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <div className="flex items-center gap-2 text-[#FFD77D]">
              Agriculture Matters
              <Leaf className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            {/* <span className="text-white drop-shadow-lg">Good production</span> */}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light">
            Bringing quality Agricultural food products to the world,<br/>
            straight from India's finest farms.
          </p>
          <button className="bg-[#FFD77D] text-black px-12 py-4 rounded-full font-medium text-lg hover:bg-[#ffc44d] transition-colors uppercase">
            Discover the purest taste!
          </button>
        </div>
      </div>
    </div>
  );
}

// export function Hero() {
//   return (
//     <div className="relative h-screen min-h-[600px]">
//       {/* Background Image */}
//       <Image
//         src={bgImage}
//         alt="Background"
//         layout="fill" // Covers the entire div
//         objectFit="cover"
//         className="absolute inset-0 -z-10"
//       />

//       <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-green-900/30" />
//       <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
//         <div className="max-w-3xl">
//           <div className="inline-block mb-6">
//             <span className="text-2xl font-light border-b-2 border-[#FFD77D]">Pure & Natural</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <div className="flex items-center gap-2 text-[#FFD77D]">
//               Agriculture Matter
//               <Leaf className="w-8 h-8 md:w-12 md:h-12" />
//             </div>
//             <span className="text-white drop-shadow-lg">Good production</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light">
//             Bringing quality agriculture and food products to the world, straight from India's finest farms.
//           </p>
//           <button className="bg-[#FFD77D] text-black px-12 py-4 rounded-full font-medium text-lg hover:bg-[#ffc44d] transition-colors uppercase">
//             Discover the purest taste!
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
