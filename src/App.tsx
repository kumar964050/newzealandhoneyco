import { useState } from "react";
import Header from "./components/Header";

export default function ProductPage() {
  const [selectedImg, setSelectedImg] = useState("/src/assets/item-8.png");

  const handleNext = () => {};
  const handlePrevious = () => {};

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#faf8f6] px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div>
            {/* Hero Image */}
            <div className="relative w-full aspect-square bg-white flex items-center justify-center rounded-2xl shadow">
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2"
              >
                ‹
              </button>
              <img
                src={selectedImg}
                alt="Main Product"
                className="h-full w-full object-cover"
              />
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 mt-6">
              <div className="aspect-square bg-white flex items-center justify-center rounded-xl shadow">
                <img
                  src="/src/assets/item-8.png"
                  alt={`main image`}
                  className="h-full w-full object-cover"
                  onClick={() => setSelectedImg("/src/assets/item-8.png")}
                />
              </div>
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white flex items-center justify-center rounded-xl shadow"
                >
                  <img
                    src={`/src/assets/item-${i + 1}.png`}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    onClick={() =>
                      setSelectedImg(`/src/assets/item-${i + 1}.png`)
                    }
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Title + UMF */}
            <h1 className="text-2xl font-semibold">Manuka Honey</h1>
            <p className="text-xl mt-2">
              <span className="font-bold">UMF® 24+</span> <br />
              <span className="font-bold">MGO 1122+</span>
            </p>

            {/* Reviews */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-yellow-500">★★★★★</span>
              <p className="text-sm text-gray-600">825 Reviews</p>
            </div>

            {/* Subtitle + Description */}
            <h2 className="font-semibold mt-6">The Optimiser</h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              For those times in life when quality comes first. This pure UMF™
              24+ Manuka Honey is powerfully active, sourced from wild and
              rugged locations around Aotearoa New Zealand and great for almost
              all uses. It has a full, delicious flavour and your body will love
              you for it.
            </p>

            {/* Certifications */}
            <div className="flex gap-4 mt-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <img src="/src/assets/certifications.png" alt="Cert" />
                </div>
              ))}
            </div>

            {/* Size Selector */}
            <div className="mt-8">
              <p className="font-medium">Size (Select One)</p>
              <div className="grid grid-cols-3 gap-4 mt-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-2 rounded-xl p-3 flex justify-center items-center cursor-pointer hover:border-black"
                  >
                    <img src="/src/assets/item-8.png" alt="Variant" />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-8">
              <p className="font-medium">Payment Options (Select One)</p>
              <div className="flex gap-4 mt-3">
                <button className="flex-1 border-2 rounded-xl p-4 text-center bg-yellow-400 font-medium">
                  One-time Purchase <br /> $55.88
                </button>
                <button className="flex-1 border-2 rounded-xl p-4 text-center bg-gray-100 font-medium">
                  Subscribe & Save 20% <br /> $44.70
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border rounded-xl">
                <button className="px-3 py-2">-</button>
                <span className="px-4">1</span>
                <button className="px-3 py-2">+</button>
              </div>
              <button className="flex-1 bg-black text-white py-3 rounded-xl">
                Add to Cart
              </button>
            </div>

            {/* Bundle */}
            <div className="mt-8 border rounded-2xl p-6 bg-white shadow">
              <h3 className="font-medium">Beauty Bundle</h3>
              <div className="flex gap-4 mt-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <>
                    <div
                      key={i}
                      className="border rounded-xl p-3 flex items-center justify-center"
                    >
                      <img src="/src/assets/item-8.png" alt="Bundle item" />
                    </div>
                    {i < 2 ? "+" : ""}
                  </>
                ))}
              </div>
              <button className="mt-4 bg-black text-white py-3 px-6 rounded-xl w-full">
                Add Bundle to Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 text-sm text-gray-600">
              <p>Delivery: Free delivery on orders over $30</p>
              <p>Afterpay: 4 payments of $13.97</p>
            </div>

            {/* UMF Scale */}
            <div className="mt-8">
              <p className="font-medium">UMF™ Scale</p>
              <div className="flex justify-between text-sm mt-2 text-gray-600">
                <span>UMF 10+</span>
                <span>UMF 15+</span>
                <span>UMF 20+</span>
                <span className="text-black font-semibold">UMF 24+</span>
                <span>UMF 26+</span>
                <span>UMF 28+</span>
                <span>UMF 30+</span>
              </div>
            </div>

            {/* Taste Profile */}
            <div className="mt-8">
              <p className="font-medium">Taste Profile</p>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2 relative">
                <div className="absolute left-1/2 -translate-x-1/2 bg-black w-4 h-4 rounded-full -top-1"></div>
              </div>
              <div className="flex justify-between text-sm mt-2 text-gray-600">
                <span>Clean & Intense</span>
                <span>Bold & Intense</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
