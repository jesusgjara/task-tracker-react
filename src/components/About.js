import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Version 1.0.0</h1>
            <Link to="/" className="my-10 btn btn-primary">Go Back</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
