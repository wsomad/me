import Stack from "@/components/tech-stack/stack";

const Skills: React.FC = () => {
    return (
        <div className='px-6 pt-6 pb-10'>
            <h1 className="flex items-start justify-start text-2xl font-semibold text-black">#TechStacks</h1>
            <p className="my-2 text-md text-black">I&apos;m still a learner on these technology stacks.</p>
            <Stack></Stack>
        </div>
    )
}

export default Skills;