import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaChevronDown}  from 'react-icons/fa';

const Faq = () => {
    return (
       <section>
        <SectionTitle
            
            subHeading="What Our Clients Asks"
            heading="FAQS"
            >    
            </SectionTitle>
            <div className="max-w-4xl mx-auto mt-14">
                <h2 className="font-bold text-3xl">People Also Ask :</h2> 
                <div className="divider"></div>
                <div className="flex justify-between">
                <p> How can I find the right learning format for me?</p>
                <FaChevronDown></FaChevronDown>
                </div>
                <div className="divider"></div>
               <div className="flex justify-between">
               <p> How can I stay updated on the latest tech trends?</p>
               <FaChevronDown></FaChevronDown>
               </div>
                <div className="divider"></div>
                <div className="flex justify-between">
                <p>What factors should I consider when buying a new gadget?</p>
                <FaChevronDown></FaChevronDown>
                </div>
                <div className="divider"></div>
               <div className="flex justify-between">
               <p>How can I establish a healthy sleep routine?</p>
               <FaChevronDown></FaChevronDown>
               </div>
                <div className="divider"></div>
               <div className="flex justify-between">
               <p> How can I create a budget that works for me?</p>
               <FaChevronDown></FaChevronDown>
               </div>
            </div>
       </section>
    );
};

export default Faq;