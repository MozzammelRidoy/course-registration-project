
import { useState } from 'react'
import './App.css'
import Header from './Componant/Header/Header'
import Cart from './Componant/Main/Cart/Cart'
import Courses from './Componant/Main/Courses/Courses'
import Footer from './Componant/Fotter/Footer'

function App() {

  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [remainingTime, setRemainingTime] = useState(20);


  const handleSelectCourse = (id) => {

    const selectCourse = courses.find(course => course.id === id.id);

    if (!selectCourse) {
      const limitCredit = credit + id.credit;
      if (!(limitCredit > 20)) {
        const newCredit = credit + id.credit;
        setCredit(newCredit);

        const miniMumRemaininigTime = remainingTime - id.credit;
        if (!(miniMumRemaininigTime < 0)) {
          const newRemainingTime = remainingTime - id.credit;
          setRemainingTime(newRemainingTime);
          const newItem = [...courses, id];
          setCourses(newItem);
          const totalPrice = price + id.price;
          setPrice(totalPrice);
        }
        else {
          return alert('Minimum Limit 0');
        }

      }
      else {
        return alert('20 Credit Limit For You');
      }

    }
    else {
      return alert('This Course Already Selected');

    }

  }


  return (
    <>
      <Header></Header>
      <div className='md:flex md:max-w-6xl mx-auto p-4'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Cart courses={courses} price={price} credit={credit} remainingTime={remainingTime}></Cart>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
