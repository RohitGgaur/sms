import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
    // const boxStyle = {
    //     height: "300px", // Height of each box
    //  width:"100px",
    //     backgroundColor: "white",  // Box background color
    //     display: "flex", 
    //     justifyContent: "center",  // Center text horizontally
    //     alignItems: "center",      // Center text vertically
    //     border: "1px solid black", // Border for boxes
    //     color: "black",            // Text color
    //     fontWeight: "bold",        // Bold text
    //   };
  return (
    <>
   <div className="row">
    <div className="col-lg-4 "style={{height:"300px",width:"300px",border:"0.5px solid black",marginLeft:"160px",marginTop:"20px"}}>
       
        <p style={{fontWeight:"bold",fontSize:"25px",color:"black",marginLeft:"60px",marginTop:"90px"}}>ABC Account</p>
        <p style={{color:"black",marginLeft:"70px"}}>Link of Create ABC ID</p>
       <button type="button"style={{border:"1px solid black",padding:"10px",marginLeft:"90px",marginTop:"40px"}}>Read More</button>
    </div>
    <div className="col-lg-4 "style={{height:"300px",width:"300px",border:"0.5px solid black",marginLeft:"40px",marginTop:"20px"}}>
    <p style={{fontWeight:"bold",fontSize:"25px",color:"black",marginLeft:"60px",marginTop:"90px"}}>Faculty Details</p>
        <p style={{color:"black",marginLeft:"70px"}}>Fill all Related Information</p>
       <button type="button"style={{border:"1px solid black",padding:"10px",marginLeft:"90px",marginTop:"40px"}}>Read More</button>
    </div>
    <div className="col-lg-4 "style={{height:"300px",width:"300px",border:"0.5px solid black",marginLeft:"40px",marginTop:"20px"}}>
    <p style={{fontWeight:"bold",fontSize:"25px",color:"black",marginLeft:"70px",marginTop:"60px"}}>Faculty Attendance</p>
        <p style={{color:"black",marginLeft:"70px"}}>See here own attendance</p>
       <button type="button"style={{border:"1px solid black",padding:"10px",marginLeft:"90px",marginTop:"30px"}}>Read More</button>
    </div>
    </div>
    <div className="row">
    <div className="col-lg-4 "style={{height:"300px",width:"300px",border:"0.5px solid black",marginLeft:"160px",marginTop:"20px"}}>
    <p style={{fontWeight:"bold",fontSize:"25px",color:"black",marginLeft:"60px",marginTop:"90px"}}>Publish Book</p>
        <p style={{color:"black",marginLeft:"70px"}}>Book Related Information</p>
       <button type="button"style={{border:"1px solid black",padding:"10px",marginLeft:"90px",marginTop:"40px"}}>Read More</button>
    </div>
    <div className="col-lg-4 "style={{height:"300px",width:"300px",border:"0.5px solid black",marginLeft:"40px",marginTop:"20px"}}>
    <p style={{fontWeight:"bold",fontSize:"25px",color:"black",marginLeft:"60px",marginTop:"90px"}}>Research Paper</p>
        <p style={{color:"black",marginLeft:"70px"}}>Search Own Research Paper</p>
       <button type="button"style={{border:"1px solid black",padding:"10px",marginLeft:"90px",marginTop:"40px"}}>Read More</button>
    </div>
    <div className="col-lg-4 "style={{height:"300px",width:"300px",border:"0.5px solid black",marginLeft:"40px",marginTop:"20px"}}>
    <p style={{fontWeight:"bold",fontSize:"25px",color:"black",marginLeft:"40px",marginTop:"90px"}}>Department Work</p>
        <p style={{color:"black",marginLeft:"70px"}}>department work</p>
       <button type="button"style={{border:"1px solid black",padding:"10px",marginLeft:"90px",marginTop:"40px"}}>Read More</button>
    </div>
    </div>
   
 
   
    </>
  )
}

export default Service