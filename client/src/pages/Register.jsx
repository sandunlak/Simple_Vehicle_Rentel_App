import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const { data: response } = await axios.post('http://localhost:8000/api/register', { name, email, password });
            if (response.error) {
                toast.error(response.error);
            } else {
                setData({ name: '', email: '', password: '' });
                toast.success('Registration Successful. Welcome!');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
            <form onSubmit={registerUser} style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <label style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>Name</label>
                <input type='text' placeholder='Enter name...' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <label style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>Email</label>
                <input type='email' placeholder='Enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <label style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>Password</label>
                <input type='password' placeholder='Enter password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <button type='submit' style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#1890ff', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
}
