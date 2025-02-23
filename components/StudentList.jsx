// rafce
import { useState, useEffect } from "react";

export default function StudentList({students}) {

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} - Grade {student.grade} (DOB: {student.dateOfBirth})
          </li>
        ))}
      </ul>
    </div>
  );
  }

  