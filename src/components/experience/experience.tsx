import { experience } from "@/types/experience";

const Places: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
            {experience.map((e, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 overflow-auto">
                    <div className="relative flex flex-col items-center md:items-start">
                        <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
                            {index + 1}
                        </div>
                        <div className="mt-4 text-center md:text-left">
                            <h3 className="text-lg font-semibold">{e.name}</h3>
                            <p className="text-sm text-gray-600">{e.role}{e.duration}</p>
                        </div>
                        {/* <div className="hidden md:block absolute top-5 left-12 w-20 h-[2px] bg-gray-300"></div>
                        <div className="block md:hidden absolute top-14 left-5 h-20 w-[2px] bg-gray-300"></div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Places;