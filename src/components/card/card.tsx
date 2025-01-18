import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image"; // Import the Image component from Next.js

interface CardProps {
  name: string;
  repo_url: string;
}

const CardComponents: React.FC<CardProps> = ({ name, repo_url }) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

    return (
        <Card className="min-w-[300px] min-h-[300px]">
            <div className="flex justify-center items-center pt-4"> 
                <Image
                    src={`${basePath}/images/available-face.png`} // Default fallback image
                    alt="Default avatar"
                    width={132} // 44px * 4 (h-44, w-44)
                    height={132}
                />
            </div>
            <div className="pt-8 pb-2 px-6">
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
