import { Button } from "../ui/button";
import { Card, CardTitle } from "../ui/card";

interface CardProps {
    name: String,
    image?: String,
    repo_url: String,
}

const CardComponents: React.FC<CardProps> = ({name, image, repo_url}) => {
    return (
        <Card className="w-[350px] h-[300px]">
            <div className="flex justify-center items-center pt-4">
                {image 
                    ? <img 
                        alt={`Image for ${name}`}
                        className="h-full w-full object-cover"
                    /> 
                    : <img 
                        src="/images/available-face.png"
                        className="h-44 w-44"
                    /> 
                }
                
            </div>
            <div className="pt-4 pb-2 px-6">
                <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            </div>
            <div className="px-6">
                <Button 
                    className="p-4 w-full" 
                    onClick={() => window.open(`${repo_url}`, '_blank')}
                >GitHub Repository</Button>
            </div>
        </Card>
    );
}

export default CardComponents;