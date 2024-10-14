import React from "react";
import Image from "next/image";
import linkedin from "@/images/linkedin.png";
import github from "@/images/github.png";

const Social: React.FC = () => {
    return (
        <div className="flex justify-end">
            <a 
            href="https://github.com/xinjalin"
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer"  // Security
            >
                <Image src={github} alt="Git-Hub" width={50} height={50} />
            </a>
            <a 
            href="https://www.linkedin.com/in/christopher-osborn-60b4b9233/"
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer"  // Security
            >
                <Image src={linkedin} alt="LinkedIn" width={50} height={50} />
            </a>
        </div>
    );
};

export default Social;
