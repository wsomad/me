import Stack from "@/components/tech-stack/stack";

const Skills: React.FC = () => {
    return (
        <div className='px-6 py-10 font-courier'>
            <h1 className="flex items-start justify-start text-3xl font-semibold text-black">#WhatCanIOffer?</h1>
            <p className="my-4 text-lg text-black">I'm still a learner on these technology stacks.</p>
            <Stack></Stack>
        </div>
    )
}

export default Skills;