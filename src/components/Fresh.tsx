"use client"
import Family from "./Images/image20.svg"
import Freshst from "./Images/stamp.svg"

export default function Fresh() {
  return (
    <section className="bg-[#5C7C50] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="relative aspect-[4/3]">
          <img
            src={Family}
            alt="Family harvesting vegetables"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <img
              src={Freshst}
              alt="Logo"
              className="w-16 h-16"
            />
          </div>
          <p className="text-sm uppercase tracking-wider mb-4">FROM FARM TO TABLE: FRESHNESS DELIVERED WITH CARE</p>
          <h1 className="text-4xl font-bold mb-6">Pure Freshness, Direct to You</h1>
          <p className="mb-6">
            At Pure Pickers And Put, Ltd., we're proud to be the trusted link connecting farms to your table. Think of
            us as the diligent courier ensuring fresh, high-quality, and hygienic farm produce reaches you with the
            utmost care. With strict quality checks at every stage, we make sure only the finest produce arrives at your
            doorstep.
          </p>
          <p>
            Just like a performer spreads joy, we aim to bring delight to your home by delivering fresh, wholesome
            produce with a touch of happiness. From farm to table, our produce is always fresh, tasty, and hygienic,
            ensuring that every meal is a joyful experience.
          </p>
        </div>
      </div>
    </section>
  )
}

