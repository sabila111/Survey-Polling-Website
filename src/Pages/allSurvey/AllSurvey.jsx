import { useLoaderData } from "react-router-dom";
import AllSurveyPage from "./AllSurveyPage";


const AllSurvey = () => {
    const card = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ml-24 mx-5 ">
            {
                card.map(cards =><AllSurveyPage key={cards._id} cards={cards}></AllSurveyPage>)
            }
        </div>
    );
};

export default AllSurvey;