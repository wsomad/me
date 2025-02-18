import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image"; // Import the Image component from Next.js

interface CardProps {
  name: string;
  repo_url: string;
}

const CardComponents: React.FC<CardProps> = ({ name, repo_url}) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

    return (
        <Card className="min-w-[200px] min-h-[280px] sm:min-w-[280px] md:min-h-[280px]">
            <div className="flex justify-center items-center pt-4"> 
                <Image
                    src={`${basePath}/images/available-face.png`}
                    alt="Default avatar"
                    width={130} 
                    height={100}
                    layout="intrinsic"
                />
            </div>
            <div className="pt-6 pb-2 px-6">
                <CardTitle className="text-md font-medium">{name}</CardTitle>
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
