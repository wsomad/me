interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
    return (
        <div className={`min-h-[75vh] ${className}`}>
            <div className="max-w-6xl mx-auto">
                <section className="h-full">{children}</section>
            </div>
        </div>
    );
};

export default Section;