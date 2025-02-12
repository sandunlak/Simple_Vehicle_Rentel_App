import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function Showdoctors() {
  const [appoinments, setAppoinments] = useState([]);

  useEffect(() => {
    function getAppoinments() {
      axios.get("http://localhost:8000/appoinment/show")
        .then((res) => {
          setAppoinments(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAppoinments();
  }, []);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      height: "150vh",
      margin: "auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      color: "#000000",
      backgroundImage: "url('https://i.postimg.cc/bwPdSsTc/carrent.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#000000"
    }}>
      <Navbar />

      <h1 style={{
        textAlign: "center",
        marginBottom: "20px",
        fontFamily: "'Roboto', sans-serif",
        color: "#000000",
        fontSize:'40px'
      }}>Make an appoinment today and reserve your vehicle     </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {appoinments.map((appoinment, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#000000",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img src={`https://i.postimg.cc/5tDkKDpw/carrentt.jpg/${appoinment.photo}`} alt={appoinment.name} style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px"
            }} />
            <h3 style={{
              margin: "10px 0",
              fontFamily: "'Roboto', sans-serif"
            }}>{appoinment.name}</h3>
            <p style={{
              margin: "5px 0",
              fontFamily: "'Roboto', sans-serif"
            }}>{appoinment.special}</p>
            <p style={{
              margin: "5px 0",
              fontFamily: "'Roboto', sans-serif"
            }}>Availability: {appoinment.states}</p>
          </div>
        ))}
      </div>
    </div>
  );
}





//Add Car



/*import React,{useState} from "react";
import axios from "axios";
export default function Home(){
    
    const[name,setName]=useState("");
    const[special,setSpecial]=useState("");
    const[states,setStates]=useState("");
    const[details,setDetails]=useState("");


    function sendData(e){
        e.preventDefault();
        
        const newAppoinment={
            name,
            special,
            states,
            details
        }
        axios.post("http://localhost:8000/appoinment/enter",newAppoinment).then(()=>{
            alert("Doctor added")
            setName("");
            setSpecial("");
            setStates("");
            setDetails("");
        }).catch((err)=>{
            alert(err)
        })
    }




    return(
        <div className="container">
            <form onSubmit={sendData}>
  <div class="form-group">
    <label for="name">name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Doctor name" 
    onChange={(e)=>{
        setName(e.target.value); //Assign value to the setName
    }}/>
    
  </div>
  <div class="form-group">
    <label for="special">Specialization</label>
    <input type="text" class="form-control" id="special" placeholder="Enter Specialization"
    onChange={(e)=>{
      setSpecial(e.target.value); 
    }}/>
    
  </div>
  <div class="form-group">
    <label for="states">States</label>
    <input type="text" class="form-control" id="states" placeholder="Enter doctor States"
    onChange={(e)=>{
      setStates(e.target.value); 
    }}/>
    
  </div>

  <div class="form-group">
    <label for="details">Details</label>
    <input type="text" class="form-control" id="details" placeholder="Enter doctor details"
    onChange={(e)=>{
      setDetails(e.target.value); 
    }}/>
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}*/
