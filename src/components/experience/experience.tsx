import { experience } from "@/types/experience";
import Image from "next/image";

const Places: React.FC = () => {
    const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {experience.map((e, index) => (
                <div key={index} className="flex flex-col md:flex-col items-start md:items-start">
                    <div className="flex items-start justify-start">
                        <Image
                            src={`${e.imagePath}`}
                            height={120}
                            width={100}
                            alt="Company logo"
                            className="w-30 h-30 mt-6"
                        />
                    </div>
                    <div className="text-start md:text-start md:mt-2">
                        <h3 className="text-md font-semibold">{e.name}</h3>
                        <p className="text-md text-black">{e.role}</p>
                        <p className="text-sm italic text-gray-600 mt-1">{e.duration}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// w-10 h-10 bg-black rounded-full text-white font-semibold

export default Places;