"use client";

/*
  Name: [Yash Kakadiya, Ethan Van De Woestyne, Precious Robert-Ezenta]
  
  Date: [24-02-25]

  Program Description: This React component, StudentList, receives an array of student objects as a prop and displays a list of students. 
  Each student's first name, last name, date of birth, and current grade are shown in a structured format. 
  The component uses Tailwind CSS for styling and ensures readability with spacing and background color. 
  
  Inputs: Array of student objects with properties (firstName, lastName, dateOfBirth, currentGrade).
  
  Processing: Maps over the students array to generate a list of student details.
  
  Output: A styled list displaying each student's information.
*/

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
