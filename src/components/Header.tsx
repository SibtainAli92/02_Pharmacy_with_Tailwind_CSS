import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-[#92dff3] text-[#1B5886] p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl font-bold font-[math]">Pharmacy Store</h1>
                <nav>
                    <ul className="flex flex-col md:flex-row space-x-0 md:space-x-6 mt-4 md:mt-0">
                        <li>
                            <Link href="/" className="hover:text-black font-bold transition font-[math]">Home</Link>
                        </li>
                        <li>
                            <Link href="/product" className="hover:text-black font-bold transition font-[math]">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-black font-bold transition font-[math]">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}