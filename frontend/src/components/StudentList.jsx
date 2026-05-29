import React from 'react'

const students = [
  { id: 1, name: 'Sanuth De Silva', age: 24, stream: 'Mathematics' },
  { id: 2, name: 'Thamadhi Mendis', age: 24, stream: 'Science' },
  { id: 3, name: 'Ravindi Fernando', age: 23, stream: 'Commerce' },
]

const StudentList = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 tracking-tight">Student Records</h2>
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <table className="w-full text-sm text-left align-middle">
          <thead className="bg-gray-800 text-white uppercase text-xs tracking-widest">
            <tr>
              <th className="px-6 py-5 font-bold">#</th>
              <th className="px-6 py-5 font-bold">Name</th>
              <th className="px-6 py-5 font-bold">Age</th>
              <th className="px-6 py-5 font-bold text-center">Stream</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 hover:scale-[1.001] transition-all duration-150`}
              >
                <td className="px-6 py-4 font-bold text-gray-400">{index + 1}</td>
                <td className="px-6 py-4 font-extrabold text-gray-900">{student.name}</td>
                <td className="px-6 py-4 font-bold text-gray-700">{student.age}</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-blue-100 text-blue-700 font-bold text-xs px-3 py-1 rounded-full">
                    {student.stream}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentList
