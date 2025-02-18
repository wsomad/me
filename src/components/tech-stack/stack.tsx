import {stacks} from '@/types/stack';
import Image from "next/image";

const Stack: React.FC = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 p-4">
            {stacks.map((stack, index) => (
                <div
                key={index}
                className="flex flex-col items-center bg-white p-4 transition-shadow"
                >
                <Image
                    src={stack.imageUrl} 
                    alt={`${stack.name} logo`}
                    width={52}
                    height={52}
                    className="object-contain"
                    priority
                />
                <p className="mt-4 text-center text-md font-medium">{stack.name}</p>
                </div>
            ))}
            </div>
    )
}

export default Stack;