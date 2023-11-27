import { Link } from "react-router-dom";


const AllSurveyPage = ({ cards }) => {
    const { title, category, description, timestamp } = cards
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <div className="card-body my-3">
                <h2 className="font-medium text-lg"><span className="font-bold text-2xl">Title:</span> {title}</h2>
                <p className="font-medium"><span className="font-bold text-2xl">Category:</span> {category}</p>
                <p  className="font-medium text-lg"><span className="font-bold">Q:</span>{description}</p>
                <p ><span className="font-bold text-xl">Created At:</span> {timestamp}</p>
                <div className="">
                    <Link to={'/details'}><button className="px-4 py-3 bg-blue-800 text-white w-full rounded-lg mt-5">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllSurveyPage;