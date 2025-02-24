"use client";
import { useEffect, useState, React } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data.students));
  }, []);

  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };
  return (
    <div>
      <StudentList students={students} />
      <StudentForm addStudent={addStudent} />
    </div>
  );
};

export default Students;
