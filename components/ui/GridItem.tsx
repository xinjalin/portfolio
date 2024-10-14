import React from "react";

interface GridItemProps {
    id: string | number;
    title: string;
    description: string;
    className: {
        container: string;
        title: string;
        content: string;
    };
}

const GridItem: React.FC<GridItemProps> = ({id, title, description, className}) => {
    return (
        <div className={className.container} id={`${id}`}>
            <h1 className={className.title}>{title}</h1>
            <br />
            <p className={className.content}>{description}</p>
        </div>
    );
};

export default GridItem;
