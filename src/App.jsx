
import { useState } from 'react'
import './App.css'
import Header from './Componant/Header/Header'
import Cart from './Componant/Main/Cart/Cart'
import Courses from './Componant/Main/Courses/Courses'

function App() {

  const [courses, setCourses] = useState([]);


  const handleSelectCourse = course => {
    const neeItem = [...courses, course]
    setCourses(neeItem);
  }
  

  return (
    <>
      <Header></Header>
      <div className='md:flex md:max-w-6xl mx-auto p-4'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Cart courses={courses}></Cart>
      </div>
      </>
  )
}

export default App
