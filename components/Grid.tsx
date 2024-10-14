import React from "react";
import GridItem from "./ui/GridItem";
import { gridItems } from "@/data";

interface GridItemData {
    id: string | number;
    title: string;
    description: string;
    className: {
        container: string;
        title: string;
        content: string;
    };
}

const Grid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-15 pb-20">
            {gridItems.map((item: GridItemData, index) => (
                <GridItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    className={item.className}
                />
            ))}
        </div>
    );
};

export default Grid;
