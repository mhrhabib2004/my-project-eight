import { Link } from "react-router-dom";

const Benear = () => {
    return (
        <div className="hero min-h-auto bg-base-200 rounded-2xl p-5 mt-">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img  src="https://i.ibb.co/sV8jPkD/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl h-60" />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
            <Link to="/listedBooks"><button className="btn btn-primary mt-10">Get Started</button></Link>
            
            
          </div>
        </div>
      </div>
    );
};

export default Benear;

