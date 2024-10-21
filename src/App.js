import User from "./component/user/User.js";
import Admin from "./component/Admin/Admin.js";
import Adminsign from "./component/Admin/Adminsign.js";
import Teachersignin from "./component/teacher/Teachersignin.js"; // Updated to match case
//  import Usersignin from"./component/user/Usersign.js"
import Dashboard from "./component/Deskboard/Deskboard.js"
import Signin from "./component/Deskboard/Auth/Signin.js";
import Userprofile from "./component/user/UserProfile.js";
import StudentReg from "./component/studentform/StudentReg.js";
import TeacherReg from "./component/teacher/Teacher.js";
import Profile from "./component/user/pages/Profile.js"
import StudentUpdateFull from "./component/user/pages/StudentUpadtefull.js"
import Teacherprofile from "./component/teacher/Teacherprofile.js";
import Teacherdetails from "./component/teacher/pages/Teacherdetails.js";
import findpass from "./component/Deskboard/Auth/Findpass.js"
import Studentbranch from "./component/user/Studentbranch.js";
import Teacherdepartment from "./component/teacher/Teacherdepartment.js";
import Book from "./component/Admin/Books.js"
import Studentprofile from "./component/user/pages/Studentprofile.js"
import Studentupdate from "./component/user/pages/Studentupdate.js"
import TeacherUpdatefull from "./component/teacher/pages/TeacherUpdatefull.js"
import Service from "./component/teacher/pages/Service.js"
import Departmentstu from "./component/teacher/pages/Departmentstudent.js"
import Branchteacher from "./component/user/pages/Departmentteacher.js"
import Services from "./component/user/pages/Services.js"
import Subject from "./component/user/pages/Subject.js"
import Idcard from "./component/user/pages/Idcard.js";
import Idcards from "./component/teacher/pages/IDcards.js"
 import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Findpass from "./component/Deskboard/Auth/Findpass.js";
import UserProfile from "./component/user/UserProfile.js";

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Admin />} /> 
        <Route path="/dash" element={<Dashboard />} /> 
        <Route path="/Adminsign" element={<Adminsign />} /> 
        <Route path="/user" element={<User />} />  
        <Route path="/Teachersign" element={<Teachersignin />} /> 
        {/* <Route path="/usersign" element={<Usersignin />} />  */}
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/userprofile/:rollno" element={<UserProfile/>} />
        <Route path="/StudentReg" element={<StudentReg/>} /> 
        <Route path="/TeacherReg" element={<TeacherReg/>} /> 
        <Route path="/profile/:rollno" element={<Profile/>} /> 
        <Route path="/Teacherprofile/:id" element={<Teacherprofile/>} /> 
        <Route path="/Teacherdetails/:id" element={<Teacherdetails/>} /> 
        <Route path="/find" element={<Findpass/>} /> 
        <Route path="/branch/:branch" element={<Studentbranch />} />
        <Route path="/department/:department" element={<Teacherdepartment />} />
        <Route path="/books/:category" element={<Book />} />
        <Route path="/studentprofile/:rollno" element={<Studentprofile/>} />
        <Route path="/student-update/:rollno" element={<StudentUpdateFull />} />
        <Route path="/Teacher-update/:id" element={<TeacherUpdatefull />} />
        <Route path="/Service/:id" element={<Service />} />
        <Route path="/Department-student/:id" element={<Departmentstu />} />
        <Route path="/userprofile/teacher-department/:rollno" element={<Branchteacher />} />
        <Route path="/userprofile/Services/:rollno" element={<Services />} />
        <Route path="/userprofile/Subject/:rollno" element={<Subject />} />
        <Route path="/Idcard/:rollno" element={<Idcard />} />
        <Route path="/Idcards/:id" element={<Idcards />} />
      </Routes>
    </Router>
  );
}

export default App;
