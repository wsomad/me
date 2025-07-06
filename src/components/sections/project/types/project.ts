const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

export interface projectType {
    name: string;
    imagePath: string;
}

export const projectList: projectType[] = [
    {name: "openlearnhub", imagePath: `${basePath}/images/openlearnhub.png`},
    {name: "sewa", imagePath: `${basePath}/images/code.png`},
    {name: "unifit", imagePath: `${basePath}/images/code.png`},
]