import React from 'react'
import Navbar from './components/Navbar'
import StudentList from './components/StudentList'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <StudentList />
    </div>
  )
}

export default App
