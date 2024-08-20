import { LuCircleDollarSign } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AppliedJobDetails = ({ data }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary } = data[0];

    return (
        <div className="container">
            <div className="border border-gray-500 px-7 py-5 flex gap-20">
                <div className="mb-5 flex items-center w-32">
                    <img src={logo} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-xl font-medium mb-1">{job_title}</h1>
                    <h3>{company_name}</h3>
                    <button className=" bg-[#B3B4BD] text-black text-lg font-medium px-5 py-1  mt-4 mb-3">{remote_or_onsite}</button>
                    <div className="flex gap-10 mb-4">
                        <h3 className="flex gap-1 items-center"><FaLocationDot />{location}</h3>
                        <h3 className="flex gap-1 items-center"><LuCircleDollarSign />{salary}</h3>
                    </div>
                    <div className="flex justify-end">
                        <Link to={`/job/${id}`}><button className="button">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobDetails;