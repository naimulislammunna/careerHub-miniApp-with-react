import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStore } from "../../localStorage";
import { useEffect, useState } from "react";
import AppliedJobDetails from "./AppliedJobDetails";

const AppliedJobs = () => {
    const [item, setitem] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const storedJob = getDataFromLocalStore();

        const appliedJob = storedJob.map(item => jobs.filter(job => job.id === item)) ;
        setitem(appliedJob);
        
    }, []);

    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl my-5">Applied Job {item.length}</h1>
            </div>
            <div>
                {
                    item.map(data => <AppliedJobDetails key={data.id} data={data}></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;