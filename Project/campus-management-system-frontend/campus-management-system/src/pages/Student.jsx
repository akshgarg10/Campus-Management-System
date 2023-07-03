import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Student() {
  const [students, setStudents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
    const [hnew, sethnew] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const openModal = (student) => {
    setIsOpen(true);
    setEditedStudent(student);
    setName(student.name);
    setBranch(student.branch);
    setYear(student.year);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditedStudent(null);
    setName("");
    setBranch("");
    setYear("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!hnew) {
      updateStudent();
    } else {
      createStudent();
      sethnew(false);
    }
  };

  const createStudent = () => {
    const newStudent = { name, branch, year };

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Response from the server
        fetchStudents();
        closeModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateStudent = () => {
    const updatedStudent = { name: name, branch: branch, year: year };
    console.log(updatedStudent);

    fetch(`http://localhost:8080/student/update/${editedStudent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Response from the server
        fetchStudents();
        closeModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchStudents = () => {
    fetch("http://localhost:8080/student/getAll")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  };

  const deleteStudent = (student) => {
    fetch(`http://localhost:8080/student/delete/${student.id}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Response from the server
        fetchStudents();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className="flex justify-center items-center p-10 flex-col ">
      <h1 className="text-3xl font-semibold m-10">Student Details</h1>
      <div className="max-w-3xl">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            {/* Table header */}
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Branch
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Year
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {student.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {student.branch}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {student.year}
                  </td>
                  {/* Edit and delete buttons */}
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => openModal(student)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deleteStudent(student)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* Create new student button in a new row */}
              <tr>
                <td
                  className="whitespace-nowrap px-4 py-2 text-gray-700 text-center"
                  colSpan="5"
                >
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full"
                    onClick={() =>{
                        sethnew(true);
                        openModal();
                    }}
                  >
                    Create New Student
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* Modal content */}
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Edit Student
                        </h3>
                        <div className="mt-2">
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="off"
                              defaultValue={editedStudent?.name}
                              onChange={(e) => setName(e.target.value)}
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="branch"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Branch
                            </label>
                            <input
                              type="text"
                              name="branch"
                              id="branch"
                              autoComplete="off"
                              defaultValue={editedStudent?.branch}
                              onChange={(e) => setBranch(e.target.value)}
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="year"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Year
                            </label>
                            <input
                              type="text"
                              name="year"
                              id="year"
                              autoComplete="off"
                              defaultValue={editedStudent?.year}
                              onChange={(e) => setYear(e.target.value)}
                              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      onClick={handleFormSubmit}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Student;
