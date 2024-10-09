import React from 'react';

const RecentProjects: React.FC = () => {
    const style: string = "border-2 border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white rounded transition-all duration-300 mx-5 my-2 text-xl text-center py-1";

    return (
        <div className='text-blue-100'>
            <div className='text-center text-3xl pb-5'>Recent Projects</div>
            <div className='grid grid-cols-1 sm:grid-cols-3 pb-5'>
                <div>
                    <a href='https://github.com/xinjalin/AzureDI-OpenAI-Langchain-Example'>
                        <h1 className={`${style}`}>ORC Langchain</h1>
                    </a>
                    <p className='text-center mx-5'>
                        Using Azure DI to extract information from scanned document and prompt GPT with extracted data
                    </p>
                </div>

                <div>
                    <a href='https://github.com/xinjalin/Pandas_Task_1'>
                        <h1 className={`${style}`}>Pandas Data Transformation</h1>
                    </a>
                    <p className='text-center mx-5'>
                        With the python lib Pandas Take a csv data-set clean and normalize the data then display a graph using a subset of the data
                    </p>
                </div>

                <div>
                    <a href='#'>
                        <h1 className={`${style}`}>placeholder</h1>
                    </a>
                    <p className='text-center mx-5'>
                        
                    </p>
                </div>

            </div>
        </div>
    );
};

export default RecentProjects;
