'use client';

import { useState } from "react";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
}

const Repos: React.FC = () => {
    const [repos] = useState<Repo[]>([
        // {id: 1, name: 'Project 1', html_url: "URL project 1", description: "Project 1", language: "Java"},
        // {id: 2, name: 'Project 2', html_url: "URL project 2", description: "Project 2", language: "Java"}
    ]);

    console.log(repos);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/wsomad/repos')
    //     .then((response) => response.json())
    //     .then((data) => setRepos(data))
    //     .catch((error) => console.error('Error fetching repos:', error));
    // }, []);

    return (
        <div>
            <ul>
            {repos.map((repo) => (
                <li key={repo.id} className="mb-4">
                <p className="font-bold">{repo.name}</p>
                <p>{repo.description || 'No description available'}</p>
                <p className="text-gray-500">Language: {repo.language || 'N/A'}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Repos;

