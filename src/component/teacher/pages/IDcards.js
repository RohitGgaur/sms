import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas'; // Importing html2canvas
import './Idcards.css';

const Idcards = () => {
    const [data, setData] = useState(null);  // Initializing data as null
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const cardRef = useRef(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/teacher/${id}`);
                setData(response.data);  // No need for an array if it's a single object
                setLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

  
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
              <span className="id-label">Position:</span>
              <span>{data.position}</span>
            </div>
            <div className="id-row">
              <span className="id-label">Faculty Name:</span>
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
              <span>{data.course}({data.department})</span>
            </div>
            <div className="id-row">
              <span className="id-label">Address:</span>
              <span>{data.address}</span>
            </div>
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

export default Idcards;
