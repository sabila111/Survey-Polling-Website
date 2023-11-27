

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/bNNw5zq/What-are-online-surveys-banner-1.jpg)'}}>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        
          <div className="max-w-lg text-start mr-[600px] text-white my-3 ">
            <h1 className="mb-5 text-6xl font-bold">Create Your Own Online Servey</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-outline border-0 border-b-4  text-white font-bold  ">More Details</button>
            {/* <button className="btn border-2 border-white bg-blue-800  text-white font-bold border-solid">More Details</button> */}
          </div>
       
      </div>
    );
};

export default Banner;