import Job from "./Job";
import { useEffect, useState } from "react";

const Jobs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/jobs.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])


    const [datalength, setDatalength] = useState(4);
    return (
        <div className="bg-white">
            <div className="container py-10">
                <h1 className="text-3xl text-center mb-5">Featured Jobs</h1>
                <div className="sm:grid sm:grid-cols-2 grid grid-cols-1 gap-5">
                    {
                        data.slice(0, datalength).map(jobData => <Job key={jobData.id} jobData={jobData}></Job>)
                    }
                </div>
                <div className={datalength === data.length ? 'hidden' : 'text-center my-5'}>
                    <button onClick={() => setDatalength(data.length)} className="button">View All</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;