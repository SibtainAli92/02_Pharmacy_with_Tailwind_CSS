import Image from "next/image";

interface MedicineType {
    image: string;
    name: string;
    price: string;
}

export default function MedicineCard({ image, name, price }: MedicineType) {
    return (
        <div className="bg-[gray-100] rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 [box-shadow:0px_0px_20px_black] border-2 border-black">
            <Image
                src={image}
                alt={name} 
                width={300}
                height={250}
                className="rounded-lg mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-[black] font-[math] text-center">{name}</h3>
            <p className="text-md text-[#1d640f] font-[math] text-center">{price}</p>
        </div>
    );
}