import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/studentService";

function StudentForm({ loadStudents, editingStudent, setEditingStudent }) {
    const [student, setStudent] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    if (editingStudent) {

      await updateStudent(editingStudent.id, student);

      setEditingStudent(null);

    } else {

      await addStudent(student);

    }

    await loadStudents();

    setStudent({
      name: "",
      age: "",
      email: ""
    });

  } catch (error) {
    console.error(error);
  }
};

const handleCancel = () => {
  setEditingStudent(null);

  setStudent({
    name: "",
    age: "",
    email: ""
  });
};

useEffect(() => {
  if (editingStudent) {
    setStudent(editingStudent);
  }
}, [editingStudent]);


  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-10">

      <input
        type="text"
        placeholder="Enter Name"
        className="border p-2 w-full rounded"
        value={student.name}
        onChange={(e) => 
            setStudent({...student, name:e.target.value})
        }
      />

      <input
        type="number"
        placeholder="Enter Age"
        className="border p-2 w-full rounded"
        value={student.age}
        onChange={(e) => 
            setStudent({...student, age: e.target.value})
        }

      />

      <input
        type="email"
        placeholder="Enter Email"
        className="border p-2 w-full rounded"
        value={student.email}
        onChange={(e) =>
            setStudent({...student, email: e.target.value })
        }
      />

<div className="flex gap-3">
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
  >
    {editingStudent ? "Update Student" : "Add Student"}
  </button>

  {editingStudent && (
    <button
      type="button"
      onClick={handleCancel}
      className="bg-gray-500 hover:bg-gray-600 hover:scale-105 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      Cancel
    </button>
  )}
</div>


    </form>
  );
}

export default StudentForm;