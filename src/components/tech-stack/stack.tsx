import {stacks} from '@/types/stack';
import Image from "next/image";

const Stack: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
            {stacks.map((stack, index) => (
                <div
                key={index}
                className="flex flex-col items-center bg-white p-4 hover:shadow-md transition-shadow"
                >
                <Image
                    src={stack.imageUrl} // Dynamic image source
                    alt={`${stack.name} logo`} // Accessible description
                    width={48}
                    height={48}
                    className="object-contain" // Tailwind class for fitting
                    priority // Optional: Loads the image eagerly
                />
                <p className="mt-4 text-center font-medium">{stack.name}</p>
                </div>
            ))}
            </div>
    )
}

export default Stack;