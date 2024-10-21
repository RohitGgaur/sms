import React from 'react'

const Subject = () => {
  return (
    
     <div className="subject-selection ">
      <div className="heading m-5" style={{ textAlign: "center" }}>
        <h1>Subject Selection</h1>
      </div>

      <div
        className="body"
        style={{
          color:"black",
          height: "400px",
          width: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <form>
          {/* Checkbox for each subject */}
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="subject1" id="subject1" />
            <label className="form-check-label mx-4" htmlFor="subject1">
              <h5>Computer Network</h5>
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input " type="checkbox" value="subject2" id="subject2" />
            <label className="form-check-label mx-4" htmlFor="subject2">
             <h5>Database Management System</h5>
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="subject3" id="subject3" />
            <label className="form-check-label mx-4" htmlFor="subject3">
             <h5>Operating System</h5>
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="subject4" id="subject4" />
            <label className="form-check-label mx-4" htmlFor="subject4">
              <h5>Blockchain System</h5>
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="subject5" id="subject5" />
            <label className="form-check-label mx-4" htmlFor="subject5">
              <h5>Data Structure And Algorithm</h5>
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input " type="checkbox" value="subject6" id="subject6" />
            <label className="form-check-label mx-4" htmlFor="subject6">
             <h5>C Programming</h5>
            </label>
          </div>

          {/* Submit button */}
          <div style={{ marginTop: "80px" }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Subject