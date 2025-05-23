'use client';

import { useEffect, useState } from "react";
import { projectList } from "@/types/project";
import CardComponents from "../card/card";

interface Repo {
    id: number;
    name: string;
    html_url: string;
}

const Repos: React.FC = () => {
    const github_url = "https://api.github.com/users/wsomad/repos";
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch(github_url)
        .then((response) => response.json())
        .then((data) => {
            const excludeRepos = ['wsomad', 'me'];
            const filteredRepos = data.filter((repo: Repo) => !excludeRepos.includes(repo.name));
            
            setRepos(filteredRepos);
        })
        .catch((error) => console.error('Error fetching repos:', error));
    }, []);

    const renderedRepos = repos.map((repo) => {
        const matchedName = projectList.find(i => i.name === repo.name);
        if (matchedName) {
            return <CardComponents key={repo.id} name={repo.name} repo_url={repo.html_url} imagePath={matchedName.imagePath}/>;
        }
        
    });

    return (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-6 justify-center
        sm:justify-center sm:place-items-center mt-6">
            {renderedRepos}
        </div>
    );
}

export default Repos;
