import { useState } from 'react';

export default function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    grade: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.dateOfBirth || !formData.grade) {
      alert('All fields are required!');
      return;
    }
    onAddStudent(formData);
    setFormData({ firstName: '', lastName: '', dateOfBirth: '', grade: '' }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={formData.dateOfBirth}
        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
      />
      <input
        type="text"
        placeholder="Grade"
        value={formData.grade}
        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}