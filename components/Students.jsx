"use client";
import { useEffect, useState, React } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

/*
  Name: [Yash Kakadiya, Ethan Van De Woestyne, Precious Robert-Ezenta]
  
  Date: [24-02-25]

  Program Description: This React component manages a list of students by fetching data from a JSON file 
  and allowing users to add new students. The component consists of two main parts: 
  a student list that displays existing students and a form to add new students.

  Inputs: Fetches student data from "students.json" and accepts new student entries via a form. 
  
  Processing: Stores student data in a state variable and updates it when a new student is added. 
  
  Output: Displays the list of students and dynamically updates it when a new student is added.
 */

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
