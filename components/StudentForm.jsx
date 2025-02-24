"use client";

import { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dob,
      currentGrade: formData.grade,
    };

    addStudent(newStudent); // Update the list in parent component
    setFormData({ firstName: "", lastName: "", dob: "", grade: "" }); // Clear form
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          required
          min="1"
          max="12"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
