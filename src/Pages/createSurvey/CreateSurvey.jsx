import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CreateSurvey = () => {

    const [isChecked, setChecked] = useState(false);

    
    const handleAddSurvey = e => {
        e.preventDefault()
        const form = e.target
        const category = form.category.value;
        console.log('Category:', form.category.value);
        const description = form.description.value;
        console.log('Description:', form.description.value);
        const title = form.title.value;
        const timestamp = form.timestamp.value;
        const option = form.option.value;
      
        const survey = { title, timestamp,option,  category, description }
        console.log(survey)

        fetch('http://localhost:5000/survey', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(survey)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Created Survey successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };


    return (
        <div className="mt-10 ">
             <h2 className="text-3xl text-blue-900 font-extrabold text-center mb-10">Create Your Survey</h2>
            <form onSubmit={handleAddSurvey}>
                <div className="flex md:flex lg:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium"> Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder=" title" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Category</span>
                        </label>
                        <label className="input-group">
                            <select name="category" placeholder="category" className="input input-bordered w-full">
                                <option value="Lifestyle and Hobbies">Lifestyle and Hobbies</option>
                                <option value="Health and Wellness">Health and Wellness</option>
                                <option value="Technology and Gadgets">Technology and Gadgets</option>
                                <option value="Environmental Awareness">Environmental Awareness</option>
                                <option value="Education and Learning">Education and Learning</option>
                                <option value="Career and Work Life">Career and Work Life</option>
                                <option value="Travel and Leisure">Travel and Leisure</option>
                                <option value="Financial Habits">Financial Habits</option>
                                <option value="Technology and Innovation">Technology and Innovation</option>
                                <option value="Food and Dining Preferences">Food and Dining Preferences</option>
                                <option value="Gaming and Entertainment">Gaming and Entertainment</option>
                                <option value="Pets and Animals">Pets and Animals</option>
                            </select>
                        </label>
                    </div>

                </div>
                {/* row-2 */}
                <div className='flex md:flex lg:flex mb-6'>

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="description" className="input input-bordered w-full " />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Create Time</span>
                        </label>
                        <label className="input-group">
                            <input type="time" name="timestamp" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Options</span>
                    </label>
                    <label className="input-group">
                        <select name="option" placeholder='option' className="input input-bordered w-full">
                            <option value=" yes">yes</option>
                            <option value="no">no</option>
                            
                        </select>
                    </label>
                </div>

                {/* votes  */}

                <div className='flex justify-around mt-6'>

                    <div className="flex gap-4">
                        <label className="label cursor-pointer">
                            <span className="label-text font-bold pb-4">like</span>

                        </label>
                        <input type="radio" checked={isChecked}
                            onChange={handleCheckboxChange} className="radio mt-2 checked:bg-blue-500" />
                    </div>

                    <div className="flex gap-4">
                        <label className="label cursor-pointer">
                            <span className="label-text font-bold pb-4">dislike</span>

                        </label>
                        <input type="radio" checked={isChecked}
                            onChange={handleCheckboxChange} className="radio mt-2 checked:bg-blue-500" />
                    </div>

                </div>

                   <Link to={'/survey'}>
                   <input type="submit" value="Create Survey" className=" py-3 px-4 rounded-lg  bg-blue-900 text-white  font-bold mt-6 mx-auto items-center justify-center w-full" /></Link>
               
            </form>
        </div>
    );
};

export default CreateSurvey;