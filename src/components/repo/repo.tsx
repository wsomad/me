'use client';

import { useEffect, useState } from "react";
import CardComponents from "../card/card";

interface Repo {
    id: number;
    name: string;
    html_url: string;
}

const Repos: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/wsomad/repos')
        .then((response) => response.json())
        .then((data) => {
            const excludeRepos = ['wsomad', 'me'];
            const filteredRepos = data.filter((repo: Repo) => !excludeRepos.includes(repo.name));
            setRepos(filteredRepos);
        })
        .catch((error) => console.error('Error fetching repos:', error));
    }, []);

    const renderedRepos = repos.map((repo) => {
        return <CardComponents key={repo.id} name={repo.name} repo_url={repo.html_url} />;
    });

    return (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-6 
        sm:justify-center md:justify-center lg:justify-center sm:place-items-center md:place-items-center lg:place-items-center mt-6">
            {renderedRepos}
        </div>
    );
}

export default Repos;
