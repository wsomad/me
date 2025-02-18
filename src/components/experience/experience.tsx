import { experience } from "@/types/experience";

const Places: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-6">
            {experience.map((e, index) => (
                <div key={index} className="flex flex-row md:flex-col items-start md:items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-white font-semibold">
                        {index + 1}
                    </div>
                    <div className="text-start ml-4 md:ml-0 md:text-center md:mt-4  ">
                        <h3 className="text-xl font-semibold">{e.name}</h3>
                        <p className="text-md text-black">{e.role}</p>
                        <p className="text-md italic text-gray-600">{e.duration}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Places;