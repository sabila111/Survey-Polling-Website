import Banner from "../banner/Banner";
import Faq from "../faq/FAQ";
import TestimonialMap from "../testimonial/TestimonialMap";
import Footer from "./Shared/footer/Footer";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TestimonialMap></TestimonialMap>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;