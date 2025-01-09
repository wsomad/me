import {stacks} from '@/types/stack';

const Stack: React.FC = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
            {stacks.map((stack, index) => (
                <div
                key={index}
                className="flex flex-col items-center bg-white p-4 hover:shadow-md transition-shadow"
                >
                <img
                    src={stack.imageUrl}
                    alt={`${stack.name} logo`}
                    className="h-16 w-16 object-contain"
                />
                <p className="mt-4 text-center font-medium">{stack.name}</p>
                </div>
            ))}
            </div>
    )
}

export default Stack;