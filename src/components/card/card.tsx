import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image"; // Import the Image component from Next.js

interface CardProps {
  name: string;
  image?: string;
  repo_url: string;
}

const CardComponents: React.FC<CardProps> = ({ name, image, repo_url }) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

    return (
        <Card className="w-[350px] h-[300px]">
        <div className="flex justify-center items-center pt-4">
            {image ? (
            <Image
                src={image} // Dynamic image source
                alt={`Image for ${name}`}
                className="object-cover"
                layout="fill" // Ensure proper scaling
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive size hints
            />
            ) : (
            <Image
                src={`${basePath}/images/available-face.png`} // Default fallback image
                alt="Default avatar"
                width={140} // 44px * 4 (h-44, w-44)
                height={140}
            />
            )}
        </div>
        <div className="pt-4 pb-2 px-6">
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        </div>
        <div className="px-6">
            <Button
            className="p-4 w-full"
            onClick={() => window.open(`${repo_url}`, "_blank")}
            >
            GitHub Repository
            </Button>
        </div>
    </Card>
  );
};

export default CardComponents;
