import {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../../Components/Navbar/navbar';
import './editUser.css';

function addUser() {
    const { userId } = useParams();
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            city: '',
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                toast.success('Updated Successfully..!!!!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    

    return (
        <>
        {/* Navbar */}
        <Navbar />

        {/* Edit User */}
        <section id="addUser" class="addUser">
            <div class="add-container">
                <div class="section-title">
                    <h2>Edit User Details</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleInputChange} />
                    <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                    <input type="text" name="street" placeholder="Street" value={userData.address.street} onChange={handleInputChange} />
                    <input type="text" name="city" placeholder="City" value={userData.address.city} onChange={handleInputChange} />
                    <input type="text" name="phone" placeholder="Phone" value={userData.phone} onChange={handleInputChange} />
                    <input type="text" name="website" placeholder="Website" value={userData.website} onChange={handleInputChange} />
                    <input type="text" name="companyName" placeholder="Company Name" value={userData.company.name} onChange={handleInputChange} />
                    <input type="text" name="catchPhrase" placeholder="Catch Phrase" value={userData.company.catchPhrase} onChange={handleInputChange} />
                    <input type="text" name="bs" placeholder="BS" value={userData.company.bs} onChange={handleInputChange} />
                </form>

                <div className="button">
                <button type="submit" class="add-btn">Update</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default addUser;