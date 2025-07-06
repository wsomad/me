import WorkingExperiences from "@/components/sections/experience/components/WorkingExperience";

const Experience: React.FC = () => {
    return (
        <div className="px-6 xl:pl-0">
            <h1 className="flex items-start justify-start font-semibold text-3xl sm:text-4xl text-black">Experience</h1>
            <WorkingExperiences></WorkingExperiences>
        </div>
    )
}

export default Experience;