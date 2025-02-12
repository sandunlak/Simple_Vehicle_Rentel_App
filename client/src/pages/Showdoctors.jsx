import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Showdoctors() {
    const [appoinments, setAppoinments] = useState([]);
    const [editingAppoinment, setEditingAppoinment] = useState(null);

    useEffect(() => {
        function getAppoinments() {
            axios.get("http://localhost:8000/appoinment/show").then((res) => {
                setAppoinments(res.data); // Insert data 
            }).catch((err) => {
                alert(err.message);
            });
        }
        getAppoinments();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/appoinment/delete/${id}`).then((res) => {
            alert(res.data.states);
            setAppoinments(appoinments.filter(appoinment => appoinment._id !== id));
        }).catch((err) => {
            alert("Failed to delete the Doctor.");
        });
    };

    const handleEdit = (appoinment) => {
        setEditingAppoinment(appoinment);
    };

    const handleUpdate = () => {
        const updatedAppoinment = {
            name: editingAppoinment.name,
            special: editingAppoinment.special,
            states: editingAppoinment.states,
            details: editingAppoinment.details
        };

        axios.put(`http://localhost:8000/appoinment/update/${editingAppoinment._id}`, updatedAppoinment).then((res) => {
            alert(res.data.states);
            setAppoinments(appoinments.map(appoinment => appoinment._id === editingAppoinment._id ? editingAppoinment : appoinment));
            setEditingAppoinment(null);
        }).catch((err) => {
            alert("Failed to update the Appoinment.");
        });
    };

    return (
        <div className="container">
            <h1>Your Reservation</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>States</th>
                    </tr>
                </thead>
                <tbody>
                    {appoinments.map((appoinment, index) => (
                        <tr key={index}>
                            <td>{appoinment._id}</td>
                            <td>
                                {editingAppoinment && editingAppoinment._id === appoinment._id ? (
                                    <input
                                        type="text"
                                        value={editingAppoinment.name}
                                        onChange={(e) => setEditingAppoinment({ ...editingAppoinment, name: e.target.value })}
                                    />
                                ) : (
                                    appoinment.name
                                )}
                            </td>
                            <td>
                                {editingAppoinment && editingAppoinment._id === appoinment._id ? (
                                    <input
                                        type="text"
                                        value={editingAppoinment.special}
                                        onChange={(e) => setEditingAppoinment({ ...editingAppoinment, special: e.target.value })}
                                    />
                                ) : (
                                    appoinment.special
                                )}
                            </td>
                            <td>
                                {editingAppoinment && editingAppoinment._id === appoinment._id ? (
                                    <input
                                        type="text"
                                        value={editingAppoinment.states}
                                        onChange={(e) => setEditingAppoinment({ ...editingAppoinment, states: e.target.value })}
                                    />
                                ) : (
                                    appoinment.states
                                )}
                            </td>
                            <td>
                                {editingAppoinment && editingAppoinment._id === appoinment._id ? (
                                    <input
                                        type="text"
                                        value={editingAppoinment.details}
                                        onChange={(e) => setEditingAppoinment({ ...editingAppoinment, details: e.target.value })}
                                    />
                                ) : (
                                    appoinment.details
                                )}
                            </td>
                            <td>
                                {editingAppoinment && editingAppoinment._id === appoinment._id ? (
                                    <button onClick={handleUpdate} className="btn btn-success">Save</button>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(appoinment)} className="btn btn-warning">Edit</button>
                                        <button onClick={() => handleDelete(appoinment._id)} className="btn btn-danger">Delete</button>
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