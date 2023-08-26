import {useState} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/navbar';
import './addUser.css';

function addUser() {
    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
            console.log('New User added:', response.data);
        } catch (error) {
            console.log('Error:', error);
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

        {/* Add User */}
        <section id="addUser" class="addUser">
            <div class="container">
                <div class="section-title">
                    <h2>Add New User</h2>
                </div>
                <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleInputChange} />
                <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                <input type="text" name="phone" placeholder="Phone" value={userData.phone} onChange={handleInputChange} />
                <input type="text" name="website" placeholder="Website" value={userData.website} onChange={handleInputChange} />

                <button type="submit" class="btn btn-primary">Add User</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default addUser;