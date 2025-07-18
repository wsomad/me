import WorkingExperiences from "@/components/sections/experience/components/WorkingExperience";

const Experience: React.FC = () => {
    return (
        <div className="px-4">
            <h1 className="flex items-start justify-start font-bold text-xl sm:text-2xl text-black">Experience</h1>
            <WorkingExperiences></WorkingExperiences>
        </div>
    )
}

export default Experience;