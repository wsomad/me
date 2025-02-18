import Places from "@/components/education/education";

const Education: React.FC = () => {
    return (
        <div className='px-6 pt-6 pb-10'>
            <h1 className="flex items-start justify-start text-2xl font-semibold text-black">#Education</h1>
            <p className="mt-2 text-md text-black">
            I&apos;ve been to different schools back then.
            </p>
            <Places></Places>
        </div>
    )
}

export default Education;