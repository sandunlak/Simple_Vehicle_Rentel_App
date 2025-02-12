import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data: response } = await axios.post('http://localhost:8000/api/login', { email, password });
            if (response.error) {
                toast.error(response.error);
            } else {
                setData({ email: '', password: '' });
                toast.success('Login Successful. Welcome!');
                navigate('/showafterlogin');
            }
        } catch (error) {
            console.log(error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
            <form onSubmit={loginUser} style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px', background: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Login</h2>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Enter email...'
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Enter password...'
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0', border: '1px solid #ddd', borderRadius: '4px' }}
                    />
                </div>
                <button type='submit' style={{ width: '100%', padding: '0.75rem', border: 'none', borderRadius: '4px', background: '#007bff', color: '#fff', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </div>
    );
}
