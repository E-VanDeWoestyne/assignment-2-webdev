import Navbar from '@/components/Navbar';
import StudentList from '@/components/StudentList';
import AddStudentForm from '@/components/AddStudentForm';
import Footer from '@/components/Footer';

export default function Home() {
  // State to manage the list of students
  const [students, setStudents] = useState([]);

  // Function to add a new student to the list
  const handleAddStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main>
        <h1>Welcome to the Student Portal</h1>

        {/* Add Student Form */}
        <AddStudentForm onAddStudent={handleAddStudent} />

        {/* Student List */}
        <StudentList students={students} />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}