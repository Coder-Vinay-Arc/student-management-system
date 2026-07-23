import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { useEffect, useState } from "react";
import { getStudents } from "./services/studentService"

function App() {
  const [editingStudent, setEditingStudent] = useState(null);
  const [students, setStudents ] = useState([]);
  const loadStudents = async () => {
    try {
      const response = await getStudents();
      console.log(response.data)
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Student Management System
      </h1>

      <StudentForm
    loadStudents={loadStudents}
    editingStudent={editingStudent}
    setEditingStudent={setEditingStudent}
/>

      <StudentList
    students={students}
    loadStudents={loadStudents}
    setEditingStudent={setEditingStudent}
/>

    </div>
  );
}

export default App;