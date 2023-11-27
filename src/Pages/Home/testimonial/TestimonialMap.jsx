import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useEffect, useState } from "react";


const TestimonialMap = () => {

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('/testimonial.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section>
            <SectionTitle
            
            subHeading="What Our Clients Says"
            heading="Testimonials"
            >    
            </SectionTitle>

            <Swiper
       cssMode={true}
       navigation={true}
       pagination={true}
       mousewheel={true}
       keyboard={true}
       modules={[Navigation, Pagination, Mousewheel, Keyboard]}
       className="mySwiper"
      >
        
       <div>
        {
            reviews.map(review => <SwiperSlide key={review.id}>
                 <div className="hero max-h-max " style={{backgroundImage: 'url(https://i.ibb.co/9YdH7Xy/testimonial-video-examples.png)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        
          <div className="max-w-xl text-center  text-white my-20 ">
          <p className="mb-10 mt-10 ">{review.shortDescription}</p>
           
            <img className="w-32 h-32 mx-auto rounded-full" src={review.img} alt="" />
            <h1 className="mb-5 text-xl my-5 font-bold">{review.name}</h1>
          </div>
       
      </div>
            </SwiperSlide>)
        }
       </div>
      </Swiper>

        </section>
    );
};

export default TestimonialMap;