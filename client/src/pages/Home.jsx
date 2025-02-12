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