import Banner from "../banner/Banner";
import Faq from "../faq/FAQ";
import LatestSurvey from "../latestSurvey/LatestSurvey";
import TestimonialMap from "../testimonial/TestimonialMap";
import Footer from "./Shared/footer/Footer";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestSurvey></LatestSurvey>
            <TestimonialMap></TestimonialMap>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;