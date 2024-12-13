import { Design_LIBRARY, UI_LIBRARY } from "@/common/constant/library";
import LibraryCard from "./LibraryCard";
import { LibraryProps } from "@/common/types/library";


const LibraryList = () => {
    const libraryList = Design_LIBRARY;
    const uiLibraryList = UI_LIBRARY;
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-5'>Design Library</h1>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {libraryList.map((item: LibraryProps, index: number) => (
                    <LibraryCard {...item} key={index} />
                ))}
            </div>
            <h1 className='text-2xl font-bold my-5'>UI Components</h1>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {uiLibraryList.map((item: LibraryProps, index: number) => (
                    <LibraryCard {...item} key={index} />
                ))}
            </div>

        </div>

    )
}

export default LibraryList;