import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['surveyInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/surveyInfo');
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/surveyInfo/publish/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Published',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeSurveyor = user =>{
        axiosSecure.patch(`/surveyInfo/unpublish/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Not Publishable",
                    footer: 'Click to know '
                  });
            }
        })
    }

   
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-blue-800 font-bold mt-5">All Surveys</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Question</th>
                            <th>Publish</th>
                            <th>UnPublish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.title}</td>
                                <td>{user.category}</td>
                                <td>{user.description}</td>
                                <td>
                                    { user.role === 'publish' ? 'Published' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn text-white bg-blue-900">
                                        Make publish
                                    </button>}
                                </td>
                                <td>
                                { user.role === 'unpublish' ? 'Unpublished' : <button
                                        onClick={() => handleMakeSurveyor(user)}
                                        className="btn text-white bg-blue-900">
                                        Make Unpublished
                                    </button>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;