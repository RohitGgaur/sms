import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas'; // Importing html2canvas
import './Idcard.css';

const Idcard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { rollno } = useParams();
  const cardRef = useRef(null); // Reference to the ID card div

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/student/${rollno}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [rollno]);

  // Function to download the ID card
  const downloadIDCard = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'id-card.png';
      link.click();
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No student data found</div>;
  }

  return (
    <div>
      {/* ID Card */}
      <div className="id-card" ref={cardRef}> {/* Added ref to this div */}
        <div className="id-header">Madan Mohan Malaviya University of Technology,Gorakhpur(U.P)</div>

        <div className="id-body">
          <div className="id-photo mt-4">
            <img src={data.image} alt="Profile" />
          </div>

          <div className="id-details mx-4 mt-2">
            <div className="id-row">
              <span className="id-label">Roll No:</span>
              <span>{data.rollno}</span>
            </div>
            <div className="id-row">
              <span className="id-label">Student Name:</span>
              <span>{data.name}</span>
            </div>
            <div className="id-row">
              <span className="id-label">Father Name:</span>
              <span>{data.fathername}</span>
            </div>
            <div className="id-row">
              <span className="id-label">Phone:</span>
              <span>{data.phone}</span>
              <span className="id-label" style={{ marginLeft: '70px' }}>Gender:</span>
              <span>{data.gender}</span>
            </div>
            <div className="id-row">
              <span className="id-label">Date of Birth:</span>
              <span>{data.dob}</span>
            </div>
            <div className="id-row">
              <span className="id-label">Department:</span>
              <span>{data.course}({data.branch})</span>
            </div>
            {/* <div className="id-row">
              <span className="id-label">ISSUING OFFICE/VALID UNTIL:</span>
              <span>PHS / Feb 12 2006</span>
            </div> */}
          </div>
        </div>

        <div className="id-footer">
          <span>Reg.No:{data.id}</span>
          <div className="id-icon">
            <div>ID</div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="button-container">
  <button onClick={downloadIDCard} className="download-btn">Download</button>
</div>
    </div>
  );
};

export default Idcard;
