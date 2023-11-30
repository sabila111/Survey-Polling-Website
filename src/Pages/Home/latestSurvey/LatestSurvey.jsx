import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LatestSurveyPage from "./LatestSurveyPage";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const LatestSurvey = () => {
    const axiosSecure = useAxiosSecure()

    const { data: recentSurveys = [], refetch } = useQuery({
        queryKey: ['survey','recent' ],
        queryFn: async () => {
          const res = await axiosSecure.get('/survey/recent');
          return res.data;
        }
      });
      const handleRefresh = () => {
        refetch();
      };
      
    return (
        <div>
    <SectionTitle
    subHeading=" Our Clients Latest Surveys"
    heading="Latest Surveys"
    ></SectionTitle>
    <button className="text-white text-center" onClick={handleRefresh}>Refresh Surveys</button>
    
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ml-24 mx-5 ">
        {
             recentSurveys.map(survey => <LatestSurveyPage key={survey._id} survey={survey}></LatestSurveyPage>)
    
        }
     </div>
  </div>
    );
};

export default LatestSurvey;