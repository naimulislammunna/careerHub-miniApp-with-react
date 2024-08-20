
const Hero = () => {
    return (
        <div className="container">
            <div className="flex items-center">
                <div className="w-1/2">
                    <h1 className="text-5xl font bold ">One Step Closer To Your <span className="text-blue-800">Dream Job</span></h1>
                    <p className="my-5">Explore thousands of job opportunities with all the information you need. Its your future. <br /> Come find it. Manage all your job application from start to finish.</p>
                    <button className="button">Get Start</button>
                </div>
                <div className="w-1/2">
                    <img src="https://i.postimg.cc/5NgxrSf2/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;