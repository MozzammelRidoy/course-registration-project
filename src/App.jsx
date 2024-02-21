
import './App.css'
import Header from './Componant/Header/Header'
import Cart from './Componant/Main/Cart/Cart'
import Courses from './Componant/Main/Courses/Courses'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex md:max-w-6xl mx-auto p-4'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
      </>
  )
}

export default App
