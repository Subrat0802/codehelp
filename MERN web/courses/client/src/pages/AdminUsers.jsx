import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
    const [userData, setUserData] = useState(null);
    const {authorizationToken} = useAuth();
    

    const getAllUsersData = async () => {
        try{
            const resposne = await fetch("http://localhost:3000/api/admin/users", {
                method:"GET",
                headers:{
                    Authorization: authorizationToken
                }
            })

            const data = await resposne.json();
            setUserData(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    },[]);

    const handleDelete = async (id) => {
        try {
            const deleteUser = await fetch(`http://localhost:3000/api/admin/users/removeUser/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken  // Add authorization header
                }
            })

            if (deleteUser.ok) {
                getAllUsersData();
                toast.success("User deleted successfully");
            } else {
                toast.error("Failed to delete user");
            }
        } catch (error) {
            console.error("Error while deleting user:", error);
            toast.error("Error while deleting user");
        }
    }
  return (
    <div>
        {
            userData === null ? <h1>Loading...</h1> : userData.map((el, index) => (
                <div className='border text-white' key={index}>
                    <h1>{el.username}</h1>
                    <p>{el.email}</p>
                    <p>{el.phone}</p>
                    <button className='px-3 bg-blue-600 mr-3'><Link to={`/admin/users/${el._id}/edit`}>Edit</Link></button>
                    <button className='px-3 bg-blue-600' onClick={() => handleDelete(el._id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default AdminUsers