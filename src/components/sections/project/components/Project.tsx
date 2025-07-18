'use client';
import { useEffect, useState } from "react";
import { projectList } from "@/components/sections/project/types/project";
import CardComponents from "./CardProject";

interface Repo {
    id: number;
    name: string;
    html_url: string;
}

const Project: React.FC = () => {
    const github_url = process.env.NEXT_PUBLIC_GITHUB_API_URL || 'https://api.github.com/users/haikalsamari/repos';
    const [repos, setRepos] = useState<Repo[]>([]);
    const [, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(github_url);
                if (!response.ok) throw new Error('Response takde!');

                const data = await response.json();

                setRepos(data);
            } catch (error) {
                console.error('Tak dapat nak fetch repos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [github_url]);

    const renderedRepos = repos.map((repo) => {
        const matchedName = projectList.find(project => project.name === repo.name);
        if (matchedName) {
            return <CardComponents key={repo.id} name={repo.name} repo_url={repo.html_url} imagePath={matchedName.imagePath}/>;
        }
        
    });

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">    
            {renderedRepos}
        </div>
    );
}

export default Project;
