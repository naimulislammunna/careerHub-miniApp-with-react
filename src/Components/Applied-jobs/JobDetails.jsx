import { useLoaderData, useParams } from "react-router-dom";
import { setDataFromLocalStore } from "../../localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    
    const {jobID} = useParams();
    const idx = parseInt(jobID);
    const job = jobs.find(job => job.id === idx);

    const {id, logo, job_title, company_name, remote_or_onsite, location, salary, job_description} = job;

    const handleJob = (id) =>{
        setDataFromLocalStore(id);
    }

    return (
        <div className="container py-10">
            <div className="border border-gray-500 px-7 py-7">
            <div className="mb-5">
                <img src={logo} alt="" />
            </div>
            <h1 className="text-xl font-medium mb-1">{job_title}</h1>
            <h3>{company_name}</h3>
            <button className=" bg-[#B3B4BD] text-black text-lg font-medium px-5 py-1  mt-4 mb-3">{remote_or_onsite}</button>
            <div className="flex gap-10 mb-4">
                <h3>{location}</h3>
                <h3>{salary}</h3>
            </div>
            <div className="my-4">
                <p>{job_description}</p>
            </div>
            <div className="flex justify-end">
            <button onClick={() => handleJob(id)} className="button">Apply Job</button>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;