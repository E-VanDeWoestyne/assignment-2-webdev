"use client";
import { useEffect, useState, React } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

// Created 24-02-25
// Provides the header navbar that can be adjusted to navigate to new pages

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
    <div className="rounded-md shadow-lg bg-zinc-500">
      <StudentList students={students} />
      <StudentForm addStudent={addStudent} />
    </div>
  );
};

export default Students;
