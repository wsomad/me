import Stack from "@/components/sections/stack/components/stack";

const Stacks: React.FC = () => {
    return (
        <div className='px-6 xl:pl-0 pt-20'>
            <h1 className="flex items-start justify-start font-semibold text-3xl sm:text-4xl text-black">Familiar Tech Stacks</h1>
            <Stack></Stack>
        </div>
    )
}

export default Stacks;