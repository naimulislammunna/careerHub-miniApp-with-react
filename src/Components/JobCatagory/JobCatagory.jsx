import { useEffect, useState } from "react";

const JobCatagory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/categories.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="bg-white py-10">
            <h1 className="text-2xl font-bold text-center my-7">Job Category List</h1>
            <div className="flex gap-10 justify-center container">
                {
                    data.map(data => <div className="p-8 bg-[#b3b4bd3a] rounded-lg" key={data.id}> 
                        <img src={data.logo} alt="" />
                        <h4 className="text-lg font-semibold my-3">{data.category_name}</h4>
                        <p>{data.availability}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;