const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

export interface projectType {
    name: string;
    imagePath: string;
}

export const projectList: projectType[] = [
    {name: "json-tool", imagePath: `${basePath}/images/-logo.png`},
    {name: "openlearnhub", imagePath: `${basePath}/images/openlearnhub.png`},
    {name: "sewa", imagePath: `${basePath}/images/-logo.png`},
    {name: "unifit", imagePath: `${basePath}/images/-logo.png`},
]