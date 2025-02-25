import React from "react";

const Hero: React.FC = () => {
    return (
        <div className="pb-20 pt-36 text-blue-100">
            <div className="flex justify-center text-center text-lg sm:text-xl">
                Hi, I'm Christopher, a Software Developer and Tableau Data
                Specialist
            </div>
            <div className="flex justify-center mt-4">
                <a 
                href="https://github.com/xinjalin/portfolio"
                target="_blank"  // Opens in a new tab
                rel="noopener noreferrer"  // Security
                >
                    <button className="p-4 border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white rounded transition-all duration-300 w-48 sm:w-60">
                        Take a look under the hood
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
