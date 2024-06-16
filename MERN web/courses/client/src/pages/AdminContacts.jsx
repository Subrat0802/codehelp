import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'

const AdminContacts = () => {
    const [contactsData, setContactsData] = useState(null);
    const { authorizationToken } = useAuth();

    const getAllContactsData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken  // Ensure the token has the correct prefix
                }
            })
            
            const data = await response.json();
            console.log(data);  // Log the data after parsing JSON
            setContactsData(data);
        } catch (error) {
            console.error("Error fetching contacts data:", error);
        }
    }

    useEffect(() => {
        getAllContactsData();
    }, [authorizationToken]);  // Adding dependency array

    return (
        <div>
            {
                contactsData === null ? <h1>Loading...</h1> : contactsData.map((el) => (
                    <div className='border text-white' key={el._id}>  {/* Use unique key */}
                        <h1>{el.username}</h1>
                        <p>{el.message}</p>
                        <p>{el.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AdminContacts
