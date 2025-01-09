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

    console.log(repos);

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
        return <CardComponents key={repo.id} name={repo.name} repo_url={repo.html_url}/>
    });

    return (
        <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-4 gap-4 flex">
            {renderedRepos}
        </div>
    );
}

export default Repos;

