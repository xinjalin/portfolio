import React from "react";

interface Project {
    title: string;
    link: string;
    description: string;
}

const RecentProjects: React.FC = () => {
    const style: string =
        "border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white rounded transition-all duration-300 mx-5 my-2 text-xl text-center py-1";

    const projects: Project[] = [
        {
            title: "ORC Langchain",
            link: "https://github.com/xinjalin/AzureDI-OpenAI-Langchain-Example",
            description:
                "Using Azure DI to extract information from scanned documents and prompt GPT with extracted data.",
        },
        {
            title: "Pandas Data Transformation",
            link: "https://github.com/xinjalin/Pandas_Task_1",
            description:
                "Clean and normalize a CSV data-set, then charting a subset of the data utilizing Python Pandas.",
        },
        {
            title: "NodeJS REST API",
            link: "https://github.com/AIT-Group-Project/Pet-Scope-REST-API",
            description:
                "Collaborated on the development of the Pet-Scope REST API, a group project focused on building a scalable backend service for managing user authentication and pet-related data.",
        },
    ];

    return (
        <div className="text-blue-100">
            <div className="text-center text-3xl pb-5">Recent Projects</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 pb-5">
                {projects.map((project, index) => (
                    <div key={index}>
                        <a
                            href={project.link}
                            aria-label={`Link to ${project.title}`}
                            className="cursor-pointer"
                            target="_blank"  // Opens in a new tab
                            rel="noopener noreferrer"  // Security
                        >
                            <h1 className={style}>{project.title}</h1>
                        </a>
                        {project.description && (
                            <p className="text-justify mx-5 pb-5">
                                {project.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
