import Places from "@/components/experience/experience";

const Experience: React.FC = () => {
    return (
        <div className='px-6 py-10 font-courier'>
            <h1 className="flex items-start justify-start text-3xl font-semibold text-black">#WhereIHaveBeen?</h1>
            <p className="mt-4 text-lg text-black">
            I&apos;ve been to many places as for now.
            </p>
            <Places></Places>
        </div>
    )
}

export default Experience;