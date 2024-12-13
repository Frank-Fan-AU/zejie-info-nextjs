import Link from "next/link";
import { LibraryProps } from "@/common/types/library";
import Card from "@/common/components/elements/Card";
import Image from "next/image";

const LibraryCard = ({title, description, link, image}: LibraryProps) => {
    return (
        <Link href={link} target="_blank">
            <Card className=" flex h-[70px] w-full flex-col rounded-lg border p-2 border-neutral-300 bg-neutral-50 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50">
                <div className="flex flex-row gap-4 items-center">
                   {image}
                   <div className="flex flex-col">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="text-sm text-gray-500">{description}</p>
                   </div>
                </div>
            </Card>
        </Link>
    )
}

export default LibraryCard;