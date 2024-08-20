import Jobs from "../Applied-jobs/Jobs";
import Hero from "../Hero/Hero";
import JobCatagory from "../JobCatagory/JobCatagory";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <JobCatagory></JobCatagory>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;