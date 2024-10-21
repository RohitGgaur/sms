import React from 'react'

const Subject = () => {
    const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState({
    name: '',
    branch: 'CSE',
    code: '',
    credits: '',
    semester: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [subjectIdToUpdate, setSubjectIdToUpdate] = useState(null);

  // Fetch all subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      const res = await axios.get('http://localhost:5000/subjects');
      setSubjects(res.data);
    };
    fetchSubjects();
  }, []);

  // Handle adding or updating subject
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdating) {
        // Update existing subject
        await axios.put(`http://localhost:5000/subjects/${subjectIdToUpdate}`, subject);
        alert('Subject updated successfully');
      } else {
        // Add new subject
        await axios.post('http://localhost:5000/subjects/add', subject);
        alert('Subject added successfully');
      }
      setIsUpdating(false);
      setSubject({
        name: '',
        branch: 'CSE',
        code: '',
        credits: '',
        semester: '',
      });
      // Refresh subjects
      const res = await axios.get('http://localhost:5000/subjects');
      setSubjects(res.data);
    } catch (error) {
      alert('Error adding or updating subject');
    }
  };

  // Handle delete subject
  const handleDelete = async (subjectId) => {
    try {
      await axios.delete(`http://localhost:5000/subjects/${subjectId}`);
      alert('Subject deleted successfully');
      // Refresh subjects
      const res = await axios.get('http://localhost:5000/subjects');
      setSubjects(res.data);
    } catch (error) {
      alert('Error deleting subject');
    }
  };

  // Handle edit subject
  const handleEdit = (subject) => {
    setIsUpdating(true);
    setSubjectIdToUpdate(subject._id);
    setSubject({
      name: subject.name,
      branch: subject.branch,
      code: subject.code,
      credits: subject.credits,
      semester: subject.semester,
    });
  };

  return (
    <>
    <div>
      <h2>{isUpdating ? 'Update Subject' : 'Add Subject'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject Name"
          value={subject.name}
          onChange={(e) => setSubject({ ...subject, name: e.target.value })}
        />
        <select
          value={subject.branch}
          onChange={(e) => setSubject({ ...subject, branch: e.target.value })}
        >
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EE">EE</option>
          <option value="ME">ME</option>
          <option value="CHE">CHE</option>
          <option value="CE">CE</option>
        </select>
        <input
          type="text"
          placeholder="Subject Code"
          value={subject.code}
          onChange={(e) => setSubject({ ...subject, code: e.target.value })}
        />
        <input
          type="number"
          placeholder="Credits"
          value={subject.credits}
          onChange={(e) => setSubject({ ...subject, credits: e.target.value })}
        />
        <input
          type="number"
          placeholder="Semester"
          value={subject.semester}
          onChange={(e) => setSubject({ ...subject, semester: e.target.value })}
        />
        <button type="submit">{isUpdating ? 'Update Subject' : 'Add Subject'}</button>
      </form>

      <h2>All Subjects</h2>
      <ul>
        {subjects.map((subj) => (
          <li key={subj._id}>
            {subj.name} - {subj.branch} - {subj.code} - {subj.credits} credits - Semester {subj.semester}
            <button onClick={() => handleEdit(subj)}>Edit</button>
            <button onClick={() => handleDelete(subj._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>



    </>
  )
}

export default Subject;