import MedicineCard from "@/components/medicine";

export default function PharmacyItems() {
    return (
        <div className="p-6 bg-[#d2e2ec]">
            <h1 className="text-3xl font-bold text-center mb-6 text-black font-[math]">Available Pharmacy Items</h1>
            <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                <MedicineCard
                    image="/cac.png"
                    name="Cac"
                    price="Rs:300"
                />
                <MedicineCard
                    image="/cebosh.png"
                    name="Cebosh"
                    price="Rs:499"
                />
                <MedicineCard
                    image="/duphalac.png"
                    name="Duphalac Sup"
                    price="Rs:285"
                />
                <MedicineCard
                    image="/hydrozole.png"
                    name="Hydrozole"
                    price="Rs:324"
                />
                <MedicineCard
                    image="/indrop d.png"
                    name="Indrop-D Inj"
                    price="Rs:284"
                />
                <MedicineCard
                    image="/klaricid.png"
                    name="Klaricid"
                    price="Rs:912"
                />
                <MedicineCard
                    image="/linkus.png"
                    name="linkus-bam"
                    price="Rs:300"
                />
                <MedicineCard
                    image="/prospan.png"
                    name="Prospan Sup"
                    price="Rs:627"
                />
                <MedicineCard
                    image="/surbex.png"
                    name="Surbex-z"
                    price="Rs:360"
                />
                <MedicineCard
                    image="/Ulsanic.png"
                    name="Ulsanic Sup"
                    price="Rs:393"
                />
                <MedicineCard
                    image="/Xynosine-Spray.png"
                    name="Xynosine Drop"
                    price="Rs:70"
                />
                <MedicineCard
                    image="/nise.png"
                    name="Nise"
                    price="Rs:220"
                />
                </div>
            </div>
    );
}