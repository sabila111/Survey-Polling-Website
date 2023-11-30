import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const ContactUs = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Have a Question"
                heading="Contact Us"
            ></SectionTitle>
            <div className="flex justify-evenly hero min-h-screen  bg-blue-200">

                <div className=" ">
                    <h2 className="text-6xl font-bold mb-5 ">Have a Survey in Mind ?</h2>
                    <h2 className="text-2xl font-bold " >Let have a conversation </h2>
                    <div className="mt-14">
                        <p className="text-xl font-bold">Address :</p>
                        <p>Dhaka</p>
                        <p className="text-xl font-bold">Email :</p>
                        <p>admin@gmail.com</p>
                        <p className="text-xl font-bold">Phone :</p>
                        <p>0184939999999</p>
                    </div>
                </div>
                <div className=" ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                        </div>
                        <div className="  w-96  shadow-2xl ">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Fist Name</span>
                                    </label>
                                    <input type="name" placeholder="fist name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="name" placeholder="last name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="text" className="input input-bordered py-10" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-800 text-white">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;