import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-pharmacy">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg [border-radius:50px_50px_50px_50px]">
        <div className="text-content ">
          <h1 className="text-3xl font-bold mb-4 text-center text-black font-[math]">
            Your Health, Our Priority: Welcome to Mashah Allah Pharmacy
          </h1>
          <p className="text-black text-center text-lg leading-relaxed font-[math]">
            Welcome to our Pharmacy, where your health and well-being are our top priorities! We are dedicated to providing you with a curated selection of premium healthcare products and personalized services designed to meet your unique needs. Explore our diverse range of medications, wellness items, and expert advice, all aimed at empowering you on your health journey. Discover the difference with our knowledgeable team, ready to support you every step of the way!
          </p>
        </div>
      </div>
    </div>
  );
}