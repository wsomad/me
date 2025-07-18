import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CardExperienceProps {
  companyName: string;
  position: string;
  duration: string;
  imagePath: string;
}

const CardExperience: React.FC<CardExperienceProps> = ({ companyName, position, duration, imagePath}) => {
    return (
        <Card className="w-full min-h-[300px] flex flex-col justify-between rounded-lg">
            <div></div>
            <div className="flex justify-center items-center pt-12"> 
                <Image
                    src={imagePath}
                    alt="Default avatar"
                    width={150} 
                    height={50}
                    layout="intrinsic"
                />
            </div>
            <div className="py-4 px-4 flex flex-col gap-1">
                <CardTitle className="text-md font-semibold text-blue-600">{companyName}</CardTitle>
                <CardDescription className="text-sm font-medium">{position}</CardDescription>
                <CardDescription className="text-sm font-medium">{duration}</CardDescription>
            </div>
        </Card>
    );
};

export default CardExperience;
