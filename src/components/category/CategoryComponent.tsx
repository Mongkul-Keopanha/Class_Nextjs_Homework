import { Card, CardContent } from "@/src/components/ui/card";
import Image from "next/image";

export interface CategoryInter {
  id?: number;
  name?: string;
  image?: string;
}

const CategoryComponent = ({ image, name }: CategoryInter) => {
  return (
    <div className="p-6">
      <a href={"/"} className="block">
        <Card className="group relative h-90 w-80 gap-0 overflow-hidden rounded-2xl border-border p-0">
            <Image
                src={image ?? ""}
                alt={name || "Category Image"}
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 ease-out group-hover:scale-106 group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
            <CardContent className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-medium text-white">{name}</p>
            </CardContent>
        </Card>
      </a>                                                                    
    </div>
  );
};

export default CategoryComponent;
