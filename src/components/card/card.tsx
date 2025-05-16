import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";
import Image from "next/image";

interface CardProps {
  name: string;
  repo_url: string;
  imagePath: string;
}

const CardComponents: React.FC<CardProps> = ({ name, repo_url, imagePath}) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/me' : '';

    return (
        <Card className="w-full min-h-[250px] flex flex-col justify-between">
            <div></div>
            <div className="flex justify-center items-center pt-12"> 
                <Image
                    src={imagePath || `${basePath}/images/available-face.png`}
                    alt="Default avatar"
                    width={150} 
                    height={50}
                    layout="intrinsic"
                />
            </div>
            <div className="py-4 px-4 flex flex-col">
                <div className="pb-4">
                    <CardTitle className="text-md font-medium">{name}</CardTitle>
                </div>
                <div>
                    <Button
                    className="p-4 w-full"
                    onClick={() => window.open(`${repo_url}`, "_blank")}
                    >
                    Repository
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default CardComponents;
