import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from '../components/Navbar1';

export default function Showform() {
    const [forms, setForms] = useState([]);
    const [editingForm, setEditingForm] = useState(null);

    useEffect(() => {
        function getForms() {
            axios.get("http://localhost:8000/form/showtouser").then((res) => {
                setForms(res.data); // Insert data 
            }).catch((err) => {
                alert(err.message);
            });
        }
        getForms();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/form/delete/${id}`).then((res) => {
            alert(res.data.states);
            setForms(forms.filter(form => form._id !== id));
        }).catch((err) => {
            alert("Failed to delete the user.");
        });
    };

    const handleEdit = (form) => {
        setEditingForm(form);
    };

    const handleUpdate = () => {
        const updatedForm = {
            name: editingForm.name,
            mobile: editingForm.mobile,
            address: editingForm.address,
            email: editingForm.email,
            carname: editingForm.carname,
            days: editingForm.days
        };

        axios.put(`http://localhost:8000/form/update/${editingForm._id}`, updatedForm).then((res) => {
            alert(res.data.states);
            setForms(forms.map(form => form._id === editingForm._id ? editingForm : form));
            setEditingForm(null);
        }).catch((err) => {
            alert("Failed to update the Details.");
        });
    };

    return (
        
        <div style={{ width: "80%", margin: "auto", marginTop: "20px",maxWidth: "1300px", width: "100%", padding: "20px", fontFamily: "Arial, sans-serif", background: "", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
            
            <h1 style={{ textAlign: "center", fontSize: "2.5em", color: "#333" }}>Your Reservation</h1>
            <Navbar1 />
            <table className="table table-bordered" style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2", color: "#333", textAlign: "left" }}>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Mobile Number</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Address</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Email</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Car Name</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>How many Days</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map((form, index) => (
                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <input
                                        type="text"
                                        value={editingForm.name}
                                        onChange={(e) => setEditingForm({ ...editingForm, name: e.target.value })}
                                        style={{ width: "100%", padding: "8px" }}
                                    />
                                ) : (
                                    form.name
                                )}
                            </td>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <input
                                        type="text"
                                        value={editingForm.mobile}
                                        onChange={(e) => setEditingForm({ ...editingForm, mobile: e.target.value })}
                                        style={{ width: "100%", padding: "8px" }}
                                    />
                                ) : (
                                    form.mobile
                                )}
                            </td>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <input
                                        type="text"
                                        value={editingForm.address}
                                        onChange={(e) => setEditingForm({ ...editingForm, address: e.target.value })}
                                        style={{ width: "100%", padding: "8px" }}
                                    />
                                ) : (
                                    form.address
                                )}
                            </td>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <input
                                        type="text"
                                        value={editingForm.email}
                                        onChange={(e) => setEditingForm({ ...editingForm, email: e.target.value })}
                                        style={{ width: "100%", padding: "8px" }}
                                    />
                                ) : (
                                    form.email
                                )}
                            </td>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <input
                                        type="text"
                                        value={editingForm.carname}
                                        onChange={(e) => setEditingForm({ ...editingForm, carname: e.target.value })}
                                        style={{ width: "100%", padding: "8px" }}
                                    />
                                ) : (
                                    form.carname
                                )}
                            </td>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <input
                                        type="text"
                                        value={editingForm.days}
                                        onChange={(e) => setEditingForm({ ...editingForm, days: e.target.value })}
                                        style={{ width: "100%", padding: "8px" }}
                                    />
                                ) : (
                                    form.days
                                )}
                            </td>
                            <td style={{ padding: "12px" }}>
                                {editingForm && editingForm._id === form._id ? (
                                    <button onClick={handleUpdate} className="btn btn-success" style={{ padding: "8px 12px", fontSize: "16px" }}>Save</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(form)} className="btn btn-warning" style={{ padding: "8px 12px", fontSize: "16px", marginRight: "8px" }}>Edit</button>
                                        <button onClick={() => handleDelete(form._id)} className="btn btn-danger" style={{ padding: "8px 12px", fontSize: "16px" }}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
