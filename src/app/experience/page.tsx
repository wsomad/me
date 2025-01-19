import Places from "@/components/experience/experience";

const Experience: React.FC = () => {
    return (
        <div className='px-6 pt-6 pb-10'>
            <h1 className="flex items-start justify-start text-2xl font-semibold text-black">#Experience</h1>
            <p className="mt-2 text-md text-black">
            I&apos;ve work in only a company as for now.
            </p>
            <Places></Places>
        </div>
    )
}

export default Experience;