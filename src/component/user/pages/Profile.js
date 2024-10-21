import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
const Profile= () => {
    const [data, setData] = useState(null);  // Initializing data as null
    const [loading, setLoading] = useState(true);
    const { rollno} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =await axios.get(`http://localhost:8000/api/student/${rollno}`);
                setData(response.data);  // No need for an array if it's a single object
                setLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No student data found</div>;
    }
    return (
        <>
             <div className="teacher-profile-list">
               
               <div className="teacher-profile">
                   <div className="row">
                       <div
                           className="col-lg-3"
                           style={{
                               height: "70vh",
                               margin: "20px",
                               marginTop: "40px",
                               padding: "20px",
                               boxShadow: "0 0 2px green",
                               display: "flex",
                               flexDirection: "column",
                               alignItems: "center"
                           }}
                       >
                           <div className="img-profile">
                               <img
                                   className="rounded-circle mt-4"
                                   alt="avatar1"
                                   src={data.image}
                                   style={{width:"210px",height:"210px"}}
                               />
                           </div>
                           <div className="contant mt-3 text-center" style={{ fontSize: "24px", color: "black" }}>
                               <b>{data.name}</b>
                           </div>
                           <div className="contant mt-1 text-center" style={{ fontSize: "14px", color: "black" }}>
                           
                           </div>
                           <div className="contant mt-1 text-center" style={{ fontSize: "14px", color: "black" }}>
                               Roll No. {data.rollno}
                           </div>
                           <div className="additional-content mt-2 text-center">2021-2025</div>
                       </div>

                       <div
                           className="col-lg-8"
                           style={{
                               height: "70vh",
                               width: "133vh",
                               margin: "20px",
                               marginTop: "40px",
                               padding: "20px",
                               boxShadow: "0 0 2px green",
                               display: "flex",
                               flexDirection: "row",
                               alignItems: "center",
                               position: "relative"
                           }}
                       >
                           <div
                               className="heading"
                               style={{
                                   position: "absolute",
                                   top: "10px",
                                   left: "20px",
                                   fontSize: "24px",
                                   fontWeight: "bold",
                                   color: "black"
                               }}
                           >
                               Personal Information
                           </div>
                           <hr
                               style={{
                                   width: "116vh",
                                   color: "black",
                                   border: "1px solid black",
                                   position: "absolute",
                                   top: "40px"
                               }}
                           />
                           <div className="contant" style={{ position: 'absolute', top: '80px' }}>
                               <div className="row1" style={{ gap: "170px", display: "flex" }}>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Full Name-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.name}</span>
                                   </div>
                               </div>
                               <div className="row1 mt-5" style={{ gap: "170px", display: "flex" }}>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Father Name-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.fathername}</span>
                                   </div>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Mother Name-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.mothername}</span>
                                   </div>
                               </div>
                               <div className="row1 mt-5" style={{ gap: "170px", display: "flex" }}>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>D.O.B-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.dob}</span>
                                   </div>
                                   <div className="column-lg-3 mx-5">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Email Address-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.email}</span>
                                   </div>
                               </div>
                               <div className="row1 mt-5" style={{ gap: "170px", display: "flex" }}>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Phone No.-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.phone}</span>
                                   </div>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Father Ph. No.-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.fatherphone}</span>
                                   </div>
                               </div>
                               <div className="row1 mt-5" style={{ gap: "170px", display: "flex" }}>
                                   <div className="column-lg-3">
                                       <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Gender-</span>
                                       <span style={{ color: "black", fontSize: "17px" }}>{data.gender}</span>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Education Details */}
                   <div
                       className="col-lg-8"
                       style={{
                           height: "70vh",
                           width: "190vh",
                           margin: "20px",
                           marginTop: "1px",
                           marginLeft: "15px",
                           padding: "20px",
                           boxShadow: "0 0 2px green",
                           display: "flex",
                           flexDirection: "row",
                           alignItems: "center",
                           position: "relative"
                       }}
                   >
                       <div
                           className="heading"
                           style={{
                               position: "absolute",
                               top: "10px",
                               left: "20px",
                               fontSize: "24px",
                               fontWeight: "bold",
                               color: "black"
                           }}
                       >
                           Education Details
                       </div>
                       <hr
                           style={{
                               width: "116vh",
                               color: "black",
                               border: "1px solid black",
                               position: "absolute",
                               top: "40px"
                           }}
                       />
                       <div className="contant" style={{ position: 'absolute', top: '80px' }}>
                           <div className="row1" style={{ gap: "640px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Student Id-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.id}</span>
                               </div>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Roll No.-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.rollno}</span>
                               </div>
                           </div>
                           <div className="row1 mt-4" style={{ gap: "580px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Course Name-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.course}</span>
                               </div>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Branch Name-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.branch}</span>
                               </div>
                           </div>
                           <div className="row1 mt-4" style={{ gap: "614px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Year-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.grad}</span>
                               </div>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Batch Year-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.gradcom}</span>
                               </div>
                           </div>
                           <div className="row1 mt-4" style={{ gap: "614px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Current CGPA-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.currcgpa}</span>
                               </div>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>High School-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.high}</span>
                               </div>
                           </div>
                           <div className="row1 mt-4" style={{ gap: "610px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Intermediate-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.inter}</span>
                               </div>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Collage-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.collage}</span>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div
                       className="col-lg-8"
                       style={{
                           height: "30vh",
                           width: "190vh",
                           margin: "20px",
                           marginTop: "1px",
                           marginLeft: "15px",
                           padding: "20px",
                           boxShadow: "0 0 2px green",
                           display: "flex",
                           flexDirection: "row",
                           alignItems: "center",
                           position: "relative"
                       }}
                   >
                       <div
                           className="heading"
                           style={{
                               position: "absolute",
                               top: "10px",
                               left: "20px",
                               fontSize: "24px",
                               fontWeight: "bold",
                               color: "black"
                           }}
                       >
                           Address Details
                       </div>
                       <hr
                           style={{
                               width: "116vh",
                               color: "black",
                               border: "1px solid black",
                               position: "absolute",
                               top: "40px"
                           }}
                       />
                       <div className="contant" style={{ position: 'absolute', top: '80px' }}>
                           <div className="row1" style={{ gap: "640px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Addesss-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.address}</span>
                               </div>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>City.-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.city}</span>
                               </div>
                           </div>
                           <div className="row1 mt-4" style={{ gap: "580px", display: "flex" }}>
                               <div className="column-lg-3">
                                   <span style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>Pin Code-</span>
                                   <span style={{ color: "black", fontSize: "17px",marginLeft:"25px" }}>{data.pincode}</span>
                               </div>
                            
                           </div>
                           
                           
                           
                       </div>
                   </div>
               </div>
           
     
       
   </div>


        </>
    )
};


export default Profile;