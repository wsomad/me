const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

export interface place {
    name: string;
    duration: string;
    role: string;
    imagePath: string
}

export const experience: place[] = [
    {name: "DC Technology Solutions Sdn. Bhd.", role: "Technology Analyst", duration: "Mac 2025 - Now", imagePath: `${basePath}/images/deloitte-logo.png`},
    {name: "DC Technology Solutions Sdn. Bhd.", role: "Technology Intern", duration: "Sept 2024 - Jan 2025", imagePath: `${basePath}/images/deloitte-logo.png`},
]