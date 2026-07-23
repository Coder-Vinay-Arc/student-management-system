import { deleteStudent } from "../services/studentService";

function StudentList({ students, loadStudents, setEditingStudent }) {

    const handleDelete = async (id) => {
  try {
    await deleteStudent(id);
    await loadStudents();


  } catch (error) {
    console.log(error);
  }
};

const handleEdit = (student) => {
    console.log(student)
    setEditingStudent(student);
};

  return (
    <div className="space-y-4">

    <h2 className="text-2xl font-semibold mb-4">
        Students
    </h2>

    {
        students.map(student => (

            <div
                key={student.id}
                className="border rounded p-4 shadow"
            >

                <h3 className="font-bold">
                    {student.name}
                </h3>

                <p>{student.age}</p>

                <p>{student.email}</p>

             <div className="flex gap-3 mt-3">
  <button
    onClick={() => handleDelete(student.id)}
    className="bg-red-500 hover:bg-red-600 hover:scale-105 active:scale-95 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
  >
    Delete
  </button>

  <button
    onClick={() => handleEdit(student)}
    className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 active:scale-95 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
  >
    Edit
  </button>
</div>

            </div>

        ))
    }

</div>
  );
}

export default StudentList;