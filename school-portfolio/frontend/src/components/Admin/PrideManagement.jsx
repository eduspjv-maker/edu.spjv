import React, { useState, useEffect } from 'react';
import { getPrideStudents, createPrideStudent, updatePrideStudent, deletePrideStudent, getPrideYears } from '../../services/api';
import toast from 'react-hot-toast';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const PrideManagement = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    marks: '',
    year: '',
    currentPosition: '',
    percentage: '',
    description: '',
  });
  const [photo, setPhoto] = useState(null);
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchYears();
  }, []);

  const fetchStudents = async () => {
    const { data } = await getPrideStudents({ limit: 100 });
    setStudents(data.students);
  };

  const fetchYears = async () => {
    const { data } = await getPrideYears();
    setYears(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) formDataToSend.append(key, formData[key]);
    });
    if (photo) formDataToSend.append('photo', photo);

    try {
      if (editingStudent) {
        await updatePrideStudent(editingStudent._id, formDataToSend);
        toast.success('Student updated successfully');
      } else {
        await createPrideStudent(formDataToSend);
        toast.success('Student added successfully');
      }
      fetchStudents();
      closeModal();
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await deletePrideStudent(id);
      toast.success('Deleted successfully');
      fetchStudents();
    }
  };

  const openModal = (student = null) => {
    if (student) {
      setEditingStudent(student);
      setFormData({
        name: student.name,
        marks: student.marks,
        year: student.year,
        currentPosition: student.currentPosition,
        percentage: student.percentage,
        description: student.description,
      });
    } else {
      setEditingStudent(null);
      setFormData({ name: '', marks: '', year: '', currentPosition: '', percentage: '', description: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPhoto(null);
    setEditingStudent(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Our Pride Management</h1>
        <button
          onClick={() => openModal()}
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/80"
        >
          <FaPlus /> Add Student
        </button>
      </div>

      <div className="bg-white dark:bg-darkCard rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left">Photo</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Year</th>
              <th className="px-6 py-3 text-left">Marks</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <img src={student.photo || '/avatar.png'} alt={student.name} className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td className="px-6 py-4 font-medium">{student.name}</td>
                <td className="px-6 py-4">{student.year}</td>
                <td className="px-6 py-4">{student.marks}%</td>
                <td className="px-6 py-4">
                  <button onClick={() => openModal(student)} className="text-blue-600 mr-3"><FaEdit /></button>
                  <button onClick={() => handleDelete(student._id)} className="text-red-600"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkCard rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border rounded-lg dark:bg-darkBg" required />
              <input type="number" placeholder="Year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} className="w-full px-4 py-2 border rounded-lg dark:bg-darkBg" required />
              <input type="number" placeholder="Percentage" step="0.01" value={formData.percentage} onChange={(e) => setFormData({ ...formData, percentage: e.target.value })} className="w-full px-4 py-2 border rounded-lg dark:bg-darkBg" />
              <input type="text" placeholder="Current Position" value={formData.currentPosition} onChange={(e) => setFormData({ ...formData, currentPosition: e.target.value })} className="w-full px-4 py-2 border rounded-lg dark:bg-darkBg" />
              <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-2 border rounded-lg dark:bg-darkBg" rows="3"></textarea>
              <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} className="w-full" />
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-primary text-white py-2 rounded-lg">Save</button>
                <button type="button" onClick={closeModal} className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrideManagement;