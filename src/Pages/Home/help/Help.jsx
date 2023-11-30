import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Help = () => {
    return (
        <div className='mx-auto items-center'>
            <SectionTitle
            subHeading="Have a Question"
            heading="Help center"
            ></SectionTitle>
            <div className="join ml-96 mt-10">
                <input className="input input-bordered join-item  items-centertext-center" placeholder="Search" />
                <button className="btn join-item items-center rounded-r-full text-center">Search</button>
            </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ml-24 mx-5 ">
    
<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">
    <h2 className="card-title">Billing and membership</h2>

</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">
    <h2 className="card-title">Managing and organa</h2>

</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">
    <h2 className="card-title">FAQ</h2>

</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">
    <h2 className="card-title">uploading</h2>

</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">
    <h2 className="card-title">video</h2>

</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">

<div className="card-body items-center text-center">
    <h2 className="card-title">Survey</h2>

</div>
</div>

</div>

        </div>
    );
};

export default Help;