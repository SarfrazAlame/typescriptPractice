import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import AddCourse from './components/AddCourse'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/addcourse' element={<AddCourse/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App