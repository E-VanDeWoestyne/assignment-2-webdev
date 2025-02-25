"use client";

// Created 24-02-25
// This page will print or display the Student list data 

const StudentList = ({ students }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student List</h2>
      <ul className="space-y-3">
        {students.map((student, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            <p className="font-semibold">
              {student.firstName} {student.lastName}
            </p>
            <p>DOB: {student.dateOfBirth}</p>
            <p>Grade: {student.currentGrade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
