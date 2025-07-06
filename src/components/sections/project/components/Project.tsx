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
    const github_url = process.env.NEXT_PUBLIC_GITHUB_API_URL || 'https://api.github.com/users/wsomad/repos';
    const [repos, setRepos] = useState<Repo[]>([]);
    const [, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(github_url);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const excludeRepos = ['me'];
                const filteredRepos = data.filter((repo: Repo) => !excludeRepos.includes(repo.name));
                setRepos(filteredRepos);
            } catch (error) {
                console.error('Error fetching repos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [github_url]);

    const renderedRepos = repos.map((repo) => {
        const matchedName = projectList.find(i => i.name === repo.name);
        if (matchedName) {
            return <CardComponents key={repo.id} name={repo.name} repo_url={repo.html_url} imagePath={matchedName.imagePath}/>;
        }
        
    });

    return (
        // <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-6 justify-center sm:justify-center sm:place-items-center mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mt-6">    
            {renderedRepos}
        </div>
    );
}

export default Project;
