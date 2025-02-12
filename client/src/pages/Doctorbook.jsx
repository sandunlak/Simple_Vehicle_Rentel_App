import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar1 from '../components/Navbar1';

export default function Doctorbook() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [carname, setCarname] = useState("");
    const [days, setDays] = useState("");
    const [bookedDates, setBookedDates] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/form/showtouser")
            .then(response => {
                const dates = response.data.map(form => form.days);
                setBookedDates(dates);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function sendData(e) {
        e.preventDefault();

        const newForm = {
            name,
            mobile,
            address,
            email,
            carname,
            days
        };

        axios.post("http://localhost:8000/form/add", newForm)
            .then(() => {
                alert("Your details added");
                setName("");
                setMobile("");
                setAddress("");
                setEmail("");
                setCarname("");
                setDays("");
                navigate('/showtouser');
            })
            .catch(err => {
                alert(err.response.data.error);
            });
    }

    const isDateBooked = date => {
        return bookedDates.includes(date);
    };

    return (
        <div style={{
            background: `url('https://i.postimg.cc/rsHqgxQh/vecteezy-blur-light-car-on-street-at-night-abstact-bokeh-background-1862618.jpg') no-repeat center center fixed`, backgroundSize: "cover", height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            <div style={{
                maxWidth: "1300px", width: "100%", padding: "20px", fontFamily: "Arial, sans-serif", background: "", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
            }}>
                <Navbar1 />
                <form onSubmit={sendData}>
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
                        <input type="text" id="name" placeholder="Enter Your Name"
                            style={{
                                width: "50%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",
                                boxShadow: "0px 0px 3px rgba(0,0,0,0.1)"
                            }}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} />
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <label htmlFor="mobile" style={{ display: "block", marginBottom: "5px" }}>Mobile</label>
                        <input type="text" id="mobile" placeholder="Enter Your Mobile Number"
                            style={{
                                width: "50%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",
                                boxShadow: "0px 0px 3px rgba(0,0,0,0.1)"
                            }}
                            onChange={(e) => {
                                setMobile(e.target.value);
                            }} />
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <label htmlFor="address" style={{ display: "block", marginBottom: "5px" }}>Address</label>
                        <input type="text" id="address" placeholder="Enter Your Address"
                            style={{
                                width: "50%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",
                                boxShadow: "0px 0px 3px rgba(0,0,0,0.1)"
                            }}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }} />
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
                        <input type="text" id="email" placeholder="Enter Your Email"
                            style={{
                                width: "50%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",
                                boxShadow: "0px 0px 3px rgba(0,0,0,0.1)"
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <label htmlFor="carname" style={{ display: "block", marginBottom: "5px" }}>Car Name</label>
                        <input type="text" id="carname" placeholder="Enter Your Car Name"
                            style={{
                                width: "50%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",
                                boxShadow: "0px 0px 3px rgba(0,0,0,0.1)"
                            }}
                            onChange={(e) => {
                                setCarname(e.target.value);
                            }} />
                    </div>
                    <div style={{ textAlign: "center", marginBottom: "15px" }}>
                        <label htmlFor="days" style={{ display: "block", marginBottom: "5px" }}>Date</label>
                        <input type="date" id="days"
                            style={{
                                width: "50%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",
                                boxShadow: "0px 0px 3px rgba(0,0,0,0.1)"
                            }}
                            onChange={(e) => {
                                const selectedDate = e.target.value;
                                if (!isDateBooked(selectedDate)) {
                                    setDays(selectedDate);
                                } else {
                                    alert("This date is already booked. Please select another date.");
                                    e.target.value = "";
                                }
                            }} />
                    </div>
                    <button type="submit" style={{
                        width: "50%", padding: "10px",textAlign: "left", borderRadius: "4px", border: "none", background: "#007bff",
                        color: "#fff", cursor: "pointer", fontSize: "16px"
                    }}>Submit</button>
                </form>
            </div>
        </div>
    )
}
